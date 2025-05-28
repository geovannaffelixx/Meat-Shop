document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Simula a validação do login
    const loginValido = true; // Aqui, substitua com a validação real do banco de dados

    if (loginValido) {
      document.getElementById("loading-screen").style.display = "flex";


      setTimeout(() => {
        window.location.href = "../Home/index.html"; 
      }, 3000);
    }
  });
