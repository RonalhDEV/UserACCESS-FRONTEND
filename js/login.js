// Definición de la URL del endpoint de la API
const url = "http://localhost:8080/api/user";

// Escuchar el evento de envío del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  // Obtener los valores de los campos de entrada de correo electrónico y contraseña
  var emailLog = document.getElementById("emailInput").value;
  var passwordLog = document.getElementById("passwordInput").value;

  // Crear un objeto JSON con los valores de correo electrónico y contraseña
  var logJson = {
    emailUsuario: emailLog,
    passwordUsuario: passwordLog
  };

  // Realizar una solicitud de inicio de sesión al servidor
  fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(logJson)
  })
    .then(function (response) {
      // Manejar la respuesta de la solicitud
      if (response.ok) {
        return response.text();
      } else if (response.status === 404) {
        throw new Error("Usuario no encontrado");
      } else if (response.status === 401) {
        throw new Error("Credenciales inválidas");
      } else {
        throw new Error("Error en el servidor");
      }
    })
    .then(function (responseData) {
      // Manejar los datos de respuesta y redirigir a otra página
      window.location.href = "index.html";
      alert("¡Logeo exitoso!");
    })
    .catch(function (error) {
      // Capturar y mostrar cualquier error ocurrido durante el proceso
      console.error(error);
      alert(error.message);
    });
});
