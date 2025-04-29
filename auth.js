// Supabase’ni ulash
const supabase = supabase.createClient(
  'https://fzrblkxtqufbodpctmvm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6cmJsa3h0cXVmYm9kcGN0bXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMjQ3MjcsImV4cCI6MjA2MDgwMDcyN30.lNGYPRpUfc5TfDk5klQqKwA3wTOIwkhAUuKm78B6bU8'
);

// Ro‘yxatdan o‘tish (faqat userlar uchun)
async function handleRegister() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const fullName = document.getElementById('full_name').value;

  // Auth orqali ro'yxatdan o'tkazish
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert("Xatolik: " + error.message);
    return;
  }

  // users jadvaliga yozish
  await supabase.from('users').insert({
    email: email,
    full_name: fullName,
    role: 'user', // doimiy user bo'ladi
    password: password // bu parolni auth uchun emas, admin uchun ham kerak bo'ladi
  });

  alert("Ro‘yxatdan o‘tish muvaffaqiyatli!");
  window.location.href = 'login.html';
}

// Login (admin va oddiy userlar uchun)
async function handleLogin() {
  const email = document.getElementById('logEmail').value;
  const password = document.getElementById('logPassword').value;

  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .single();

  if (error || !user) {
    alert("Login yoki parol xato!");
    return;
  }

  // Sahifaga yo‘naltirish
  switch (user.role) {
    case 'admin':
      window.location.href = '/admin/admin.html';
      break;
    default:
      window.location.href = '/main_page/index.html';
  }
}

