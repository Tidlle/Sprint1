document.querySelectorAll(".logout-button").forEach(button => {
  button.addEventListener("click", function() {
    if (confirm("Deseja realmente sair?")) {
      window.location.href = "login.html";
    }
  });
});


// Abrir/fechar sidebar
document.getElementById('sidebar-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});