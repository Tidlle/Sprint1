document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-chat");
    const input = document.getElementById("input-mensagem");
    const mensagens = document.getElementById("chat-mensagens");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const texto = input.value.trim();
      if (texto === "") return;
  
      // Adiciona mensagem do usuário
      const msgUsuario = document.createElement("div");
      msgUsuario.classList.add("mensagem", "usuario");
      msgUsuario.textContent = texto;
      mensagens.appendChild(msgUsuario);
  
      // Resposta automática simples
      const msgBot = document.createElement("div");
      msgBot.classList.add("mensagem", "bot");
      msgBot.textContent = "Recebido! Em breve responderemos.";
      mensagens.appendChild(msgBot);
  
      input.value = "";
      mensagens.scrollTop = mensagens.scrollHeight;
    });
  });
  