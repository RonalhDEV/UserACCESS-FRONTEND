const url = "http://localhost:8080/api/user";
document.getElementById("regForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var emailReg = document.getElementById("emailInput").value;
  var passwordReg = document.getElementById("passwordInput").value;

  var regJson = {
    emailUsuario: emailReg,
    passwordUsuario: passwordReg
  };

  fetch(`${url}/crear`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(regJson)
  })
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Error en el proceso de registro");
      }
    })
    .then(function (responseData) {
        window.location.href = "login.html";
        alert("Registro exitoso. ¡Ahora inicia sesión!");

    })
    .catch(function (error) {
      console.error(error);
      alert("Ocurrió un error durante el registro. Por favor, intenta nuevamente.");
    });
});
