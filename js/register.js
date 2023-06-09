// Definición de la URL del endpoint de la API
const url = "http://localhost:8080/api/user";

// Escuchar el evento de envío del formulario de registro
document.getElementById("regForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  // Obtener los valores de los campos de entrada de correo electrónico y contraseña
  var emailReg = document.getElementById("emailInput").value;
  var passwordReg = document.getElementById("passwordInput").value;

  // Crear un objeto JSON con los valores de correo electrónico y contraseña
  var regJson = {
    emailUsuario: emailReg,
    passwordUsuario: passwordReg
  };

  // Realizar una solicitud de registro al servidor
  fetch(`${url}/crear`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(regJson)
  })
    .then(function (response) {
      // Manejar la respuesta de la solicitud
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Error en el proceso de registro");
      }
    })
    .then(function (responseData) {
      // Manejar los datos de respuesta y redirigir a la página de inicio de sesión
      window.location.href = "login.html";
      alert("Registro exitoso. ¡Ahora inicia sesión!");
    })
    .catch(function (error) {
      // Capturar y mostrar cualquier error ocurrido durante el proceso de registro
      console.error(error);
      alert("Ocurrió un error durante el registro. Por favor, intenta nuevamente.");
    });
});
