const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let dataAtual = new Date(); // Começa no mês atual

function buscarConsultas() {
return JSON.parse(localStorage.getItem("consultas")) || [];
}

function renderizarCalendario() {
const consultas = buscarConsultas();

const calendarioGrid = document.querySelector(".calendario-grid");
const mesAnoTexto = document.getElementById("mes-ano");

const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth();

mesAnoTexto.innerText = `${meses[mes]} ${ano}`;

calendarioGrid.innerHTML = `
<div class="dia-semana">DOM</div>
<div class="dia-semana">SEG</div>
<div class="dia-semana">TER</div>
<div class="dia-semana">QUA</div>
<div class="dia-semana">QUI</div>
<div class="dia-semana">SEX</div>
<div class="dia-semana">SÁB</div>
`;

const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
const ultimoDiaMes = new Date(ano, mes + 1, 0).getDate();

for (let i = 0; i < primeiroDiaSemana; i++) {
calendarioGrid.innerHTML += `<div class="dia"></div>`;
}

for (let dia = 1; dia <= ultimoDiaMes; dia++) {
const dataFormatada = `${ano}-${(mes + 1).toString().padStart(2, "0")}-${dia.toString().padStart(2, "0")}`;
const consultaDia = consultas.find(c => c.data === dataFormatada);

if (consultaDia) {
calendarioGrid.innerHTML += `
<div class="dia consulta-marcada" data-especialidade="${consultaDia.especialidade}" data-hora="${consultaDia.hora}">
<span class="icone-consulta">➕</span>
<span class="texto-consulta">Dia de Consulta</span>
</div>`;
} else {
calendarioGrid.innerHTML += `<div class="dia">${dia}</div>`;
}
}

// Adicionar eventos para mostrar detalhes da consulta
const diasConsulta = document.querySelectorAll(".consulta-marcada");
diasConsulta.forEach(dia => {
dia.addEventListener("click", () => {
const especialidade = dia.getAttribute("data-especialidade");
const hora = dia.getAttribute("data-hora");
alert(`Consulta marcada!\nEspecialidade: ${especialidade}\nHorário: ${hora}`);
});
});
}

// Agora adicionando mudança de mês ⬅️ ➡️
document.addEventListener("DOMContentLoaded", function() {
renderizarCalendario();

const prevMes = document.getElementById("prev-mes");
const nextMes = document.getElementById("next-mes");

if (prevMes && nextMes) {
prevMes.addEventListener("click", () => {
dataAtual.setMonth(dataAtual.getMonth() - 1);
renderizarCalendario();
});

nextMes.addEventListener("click", () => {
dataAtual.setMonth(dataAtual.getMonth() + 1);
renderizarCalendario();
});
}
});
