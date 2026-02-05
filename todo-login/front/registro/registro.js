const url = "http://localhost:3000/registro";
const formRegistro = document.getElementById("form-registro");

formRegistro.addEventListener("submit", registrar);

async function registrar(event) {
  event.preventDefault();

  const username = document.getElementById("input-username-register").value;
  const mail = document.getElementById("input-mail-register").value;
  const pass = document.getElementById("inputpassregister").value;
  const image = document.getElementById("input-image-register").files[0]; //el primer elemento de la lista

  const formData = new FormData();
  formData.append("username", username); //agregamos elementos clave-valor al objeto
  formData.append("mail", mail);
  formData.append("pass", pass);
  formData.append("tareas", JSON.stringify([]));
  formData.append("fotoPerfil", image); 


  try {
    await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      } //mensaje que se manda al backend (puede ser cualquier cosa pero especificamos)
    });

    window.location.href = "../logeo/logeo.html";
    alert(`${username} registrado con éxito`);   

  } catch (error) {
    console.error(error);
  }
}

function checkboxEstado(){
    const checkbox = document.getElementById("checkboxPass");
    const pass = document.getElementById("inputpassregister")

    checkbox.checked ? pass.type = "text" : pass.type = "password" 
}