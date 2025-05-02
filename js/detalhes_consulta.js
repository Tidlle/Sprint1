document.addEventListener("DOMContentLoaded", function() {
  const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
  const listaConsultas = document.getElementById("lista-consultas");

  if (consultas.length === 0) {
    listaConsultas.innerHTML = "<p>Você não tem consultas agendadas.</p>";
  } else {
    consultas.forEach((consulta) => {
      const container = document.createElement("div");
      container.classList.add("consulta-container");

      // Aqui fazemos a conversão da data para formato dd/mm/aaaa
      const partesData = consulta.data.split("-");
      const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

      container.innerHTML = `
        <h3>${dataFormatada}</h3>
        <p><strong>Especialidade:</strong> ${consulta.especialidade}</p>
        <p><strong>Hora:</strong> ${consulta.hora}</p>
        <p><strong>Local:</strong> ${consulta.local}</p>
      `;

      listaConsultas.appendChild(container);
    });
  }
});
