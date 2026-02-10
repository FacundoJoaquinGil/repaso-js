const url = "http://localhost:3000/registro";
const formRegistro = document.getElementById("form-registro");
const inputImage = document.getElementById("input-image-register");
const cautionSize = document.getElementById("cautionSize");

// cambiar por una funcion mas basica
inputImage.addEventListener("change", function() {
  cautionSize.textContent = "";
  
  const image = this.files[0];
  
  if (image && image.size > 1 * 1024 * 1024) {
    cautionSize.textContent = "Por favor, sube una imagen de menos de 1 MB.";

  }else{
    cautionSize.textContent = "";
    registrar()
  }
});

formRegistro.addEventListener("submit", registrar);

async function registrar(event) {
  event.preventDefault();

  const username = document.getElementById("input-username-register").value;
  const mail = document.getElementById("input-mail-register").value;
  const pass = document.getElementById("inputpassregister").value;
  const image = inputImage.files[0];

  // ???????????
  if (image && image.size > 1 * 1024 * 1024) {
    cautionSize.textContent = "Por favor, sube una imagen de menos de 1 MB.";

    return; // ???????????
  }

  const formData = new FormData();
  formData.append("username", username);
  formData.append("mail", mail);
  formData.append("pass", pass);
  formData.append("tareas", JSON.stringify([]));
  formData.append("fotoPerfil", image); 

  try {
    await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    alert(`${username} registrado con éxito`);   
    window.location.href = "../logeo/logeo.html";

  } catch (error) {
    console.error(error);
    
    if (error.response?.data?.message) {
      cautionSize.textContent = error.response.data.message;
      //??????????????
    }
  }
}

function checkboxEstado(){
    const checkbox = document.getElementById("checkboxPass");
    const pass = document.getElementById("inputpassregister")

    checkbox.checked ? pass.type = "text" : pass.type = "password" 
}