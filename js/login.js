document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-login");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cpf = document.getElementById("cpf-login").value;
    const senha = document.getElementById("senha-login").value;

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioSalvo && usuarioSalvo.cpf === cpf && usuarioSalvo.senha === senha) {
      alert("Login realizado com sucesso!");
      window.location.href = "index.html";
    } else {
      alert("CPF ou senha inválidos!");
    }
  });
});
