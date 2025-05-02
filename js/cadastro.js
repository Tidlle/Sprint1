document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("data").value;
    const senha = document.getElementById("senha").value;

    const usuario = { nome, email, cpf, dataNascimento, senha };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  });
});
