function authLogin(event) {
  if (event) event.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  let msg = "";

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  if (!user || user.trim() === "") {
    msg = "Nombre de usuario obligatorio";
  } else if (!pass || pass.trim() === "") {
    msg = "Contraseña obligatoria";
  } else if (!regex.test(pass)) {
    msg =
      "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial";
  }

  if (msg.length > 0) {
    document.getElementById("error-message").innerHTML = msg;
    return false;
  } else if (user === "admin" && pass === "Admin123!") {
    window.location.href = "Home.html";
    return true;
  } else {
    document.getElementById("error-message").innerHTML =
      "Usuario o contraseña incorrectos";
    return false;
  }
}

function authLogin(event) {
  if (event) event.preventDefault();

  const user = document.getElementById("email-nif").value.trim();
  const pass = document.getElementById("password").value;
  let msg = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nifRegex = /^[0-9]{8}[A-Z]$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  if (!user) {
    msg = "Debe ingresar su email o NIF.";
  } else if (!emailRegex.test(user) && !nifRegex.test(user)) {
    msg = "Ingrese un formato válido de correo o NIF.";
  } else if (!pass || !passRegex.test(pass)) {
    msg = "Contraseña inválida.";
  }

  if (msg) {
    document.getElementById("error-message").innerText = msg;
    return false;
  }

  
  window.location.href = `confirmacion.html?usuario=${encodeURIComponent(user)}`;
  return true;
}

function sendContactForm(event) {
  if (event) event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const acepto = document.querySelector(".contacto-checkbox input").checked;
  let msg = "";

  if (!nombre || !email || !mensaje) {
    msg = "Todos los campos son obligatorios.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg = "Correo inválido.";
  } else if (!acepto) {
    msg = "Debe aceptar la política de privacidad.";
  }

  if (msg) {
    document.getElementById("error-message").innerText = msg;
    return false;
  }

  window.location.href = `confirmacion.html?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&mensaje=${encodeURIComponent(mensaje)}`;
  return true;
}

function subscribeNewsletter(event) {
  if (event) event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const acepto = document.querySelector(".newsletter-checkbox input").checked;
  let msg = "";

  if (!nombre || !email) {
    msg = "Todos los campos son obligatorios.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg = "Correo inválido.";
  } else if (!acepto) {
    msg = "Debe aceptar los términos.";
  }

  if (msg) {
    document.getElementById("error-message").innerText = msg;
    return false;
  }

  window.location.href = `confirmacion.html?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}`;
  return true;
}

function registerAccount(event) {
  if (event) event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const usuario = document.getElementById("usuario").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;
  const confirmar = document.getElementById("confirmar").value;
  const terminos = document.querySelector(".registro-checkbox input").checked;

  let msg = "";

  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  if (!nombre || !usuario || !email || !pass || !confirmar) {
    msg = "Todos los campos son obligatorios.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg = "Correo inválido.";
  } else if (!passRegex.test(pass)) {
    msg = "Contraseña insegura.";
  } else if (pass !== confirmar) {
    msg = "Las contraseñas no coinciden.";
  } else if (!terminos) {
    msg = "Debe aceptar los términos.";
  }

  if (msg) {
    document.getElementById("error-message").innerText = msg;
    return false;
  }

  window.location.href = `confirmacion.html?nombre=${encodeURIComponent(nombre)}&usuario=${encodeURIComponent(usuario)}&email=${encodeURIComponent(email)}`;
  return true;
}

window.onload = function () {
  const datos = document.getElementById("datos");
  const url = new URL(window.location.href);
  const parametros = url.searchParams;

  if ([...parametros].length === 0) {
    datos.innerHTML = "<p>No se recibieron datos.</p>";
    return;
  }

  let contenido = "<h2>Datos ingresados:</h2><ul>";
  parametros.forEach(function (valor, clave) {
    contenido += "<li><strong>" + clave + ":</strong> " + valor + "</li>";
  });
  contenido += "</ul>";

  datos.innerHTML = contenido;
};
