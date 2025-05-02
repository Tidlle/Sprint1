document.addEventListener("DOMContentLoaded", function() {
  const botaoAgendar = document.querySelector(".botao");

  if (botaoAgendar) {
    botaoAgendar.addEventListener("click", (e) => {
      e.preventDefault();

      const especialidade = document.getElementById("especialidade").value;
      const dataConsulta = document.getElementById("data").value;
      const horaConsulta = document.getElementById("hora").value;
      const localConsulta = document.getElementById("local").value;

      if (especialidade && dataConsulta && horaConsulta && localConsulta) {
        const novaConsulta = {
          especialidade: especialidade,
          data: dataConsulta,
          hora: horaConsulta,
          local: localConsulta
        };

        let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
        consultas.push(novaConsulta);
        localStorage.setItem("consultas", JSON.stringify(consultas));

        window.location.href = "consulta_marcada.html";
      } else {
        alert("Por favor, preencha todos os campos!");
      }
    });
  }
});
