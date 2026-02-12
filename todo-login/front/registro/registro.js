const url = "http://localhost:3000/registro";

const imageInput = document.getElementById("input-image-register");

imageInput.addEventListener("change", imageSizeLimit)

function imageSizeLimit() {
  const imageInput = document.getElementById("input-image-register");
  const image = imageInput.files[0];
  const cautionSize = document.getElementById("cautionSize");

  if (!image || image.size > 1024 * 1024) {
    cautionSize.textContent = "Por favor, sube una imagen de menos de 1 MB.";
    return false
  } else {
    cautionSize.textContent = "";
    return true;
  }
}

const formRegistro = document.getElementById("form-registro");

formRegistro.addEventListener("submit", registrar);

async function registrar(event) {
  event.preventDefault();

  if (!imageSizeLimit()) return;

  const username = document.getElementById("input-username-register").value;
  const mail = document.getElementById("input-mail-register").value;
  const pass = document.getElementById("inputpassregister").value;

  const imageInput = document.getElementById("input-image-register");
  const image = imageInput.files[0];

  const formData = new FormData();
  formData.append("username", username);
  formData.append("mail", mail);
  formData.append("pass", pass);
  formData.append("tareas", JSON.stringify([]));
  formData.append("fotoPerfil", image);

  try {
    await axios.post(url, formData);
    window.location.href = "../logeo/logeo.html";
    alert(`${username} registrado con éxito`);
  }
  catch (error) {

    const message = error.response?.data?.message || "Error inesperado";
    cautionSize.textContent = message; //////////////

  }

}

function checkboxEstado() {
  const checkbox = document.getElementById("checkboxPass");

  const pass = document.getElementById("inputpassregister")
  
  checkbox.checked ? pass.type = "text" : pass.type = "password"
}