

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const cadastroExiste = false; // Aqui substituir pela verificação real

  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  const popupBtn = document.getElementById("popup-btn");

  if (cadastroExiste) {
    popupMessage.textContent = "Cadastro já existente!";
  } else {
    popupMessage.textContent = "Cadastro realizado com sucesso!";
  }

  popup.style.display = "flex";

  popupBtn.addEventListener("click", function() {
    popup.style.display = "none";
    window.location.href = "../Cliente/Login/index.html";
  });
});
