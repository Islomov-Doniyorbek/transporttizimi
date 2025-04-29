function showForm(formId){
    document.querySelectorAll(".formBox").forEach(forma => forma.classList.remove("active"));
    document.getElementById(formId).classList.add("active")
}

// 'https://fzrblkxtqufbodpctmvm.supabase.co',
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6cmJsa3h0cXVmYm9kcGN0bXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMjQ3MjcsImV4cCI6MjA2MDgwMDcyN30.lNGYPRpUfc5TfDk5klQqKwA3wTOIwkhAUuKm78B6bU8'