document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  const successResponse = document.getElementById("success-response");
  const datosEnviados = document.getElementById("datos-enviados");

  const usernameRegex = /^.{10,20}$/;
  const emailRegex = /^.+@.+..+$/;
  const passwordRegex = /^.{9,}$/;
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;

  const errorModal = document.getElementById("error-modal");
  const errorList = document.getElementById("error-list");
  const cerrarModalBtn = document.getElementById("cerrar-modal");

  let mostrarError = (campoId, mensaje) => {
    const listItem = document.createElement("li");
    listItem.textContent = mensaje;
    errorList.appendChild(listItem);

    document.getElementById(campoId).classList.add("input-error");
  };

  let limpiarErrores = () => {
    if (successResponse) {
      successResponse.style.display = "none";
    }

    errorList.innerHTML = "";
    errorModal.style.display = "none";

    document
      .querySelectorAll(".input-error")
      .forEach((el) => el.classList.remove("input-error"));
  };

  let validarFormulario = (event) => {
    event.preventDefault();
    limpiarErrores();
    let esValido = true;

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "") {
      mostrarError("nombre", "El nombre es obligatorio");
      esValido = false;
    }

    if (email === "") {
      mostrarError("email", "El email es obligatorio");
      esValido = false;
    } else if (!emailRegex.test(email)) {
      mostrarError("email", "Formato no valido");
      esValido = false;
    }

    if (telefono !== "" && !phoneRegex.test(telefono)) {
      mostrarError("telefono", "El numero de telefono tiene que ser valido");
      esValido = false;
    }

    if (mensaje === "") {
      mostrarError("mensaje", "Debe de escribir un mensaje");
      esValido = false;
    }
    if (esValido) {
      contactoExito({
        Nombre: nombre,
        Email: email,
        Telefono: telefono,
        Mensaje: mensaje,
      });
    } else {
      errorModal.style.display = "flex";
    }
    if (cerrarModalBtn) {
      cerrarModalBtn.addEventListener("click", () => {
        errorModal.style.display = "none";
      });
    }
  };
  let contactoExito = (datos) => {
    document.getElementById("contact-form").style.display = "none";
    datosEnviados.innerHTML = "";

    for (const [key, value] of Object.entries(datos)) {
      if (value) {
        const p = document.createElement("p");
        const strong = document.createElement("strong");

        strong.textContent = key + ": ";

        p.appendChild(strong);
        p.appendChild(document.createTextNode(value));
        datosEnviados.appendChild(p);
      }
    }
    document.getElementById("successResponse").style.display = "block";
  };
  form.addEventListener("submit", validarFormulario);
});
