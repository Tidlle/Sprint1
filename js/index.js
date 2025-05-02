document.querySelector(".logout-button").addEventListener("click", function() {
    if (confirm("Deseja realmente sair?")) {
      window.location.href = "login.html";
    }
  });
  