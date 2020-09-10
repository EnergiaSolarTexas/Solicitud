document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "14698609831";

  let cliente = document.querySelector("#cliente").value;
  let direccion = document.querySelector("#direccion").value;
  let codigo = document.querySelector("#codigo").value;
  let propietario = document.querySelector("#propietario").value;
  let servicio = document.querySelector("#servicio").value;
  let credito = document.querySelector("#credito").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=14698609831&text=
		*_Programa Solar de Texas_*%0A
    *Formulario de Solicitud*%0A%0A
    *¿Cuál es tu nombre completo?*%0A
    ${cliente}%0A%0A
    *¿Cuál es tu direccion de Domicilio?*%0A
    ${direccion}%0A%0A
    *¿Cuál es tu zip code?*%0A
    ${codigo}%0A%0A
    *¿Es usted el propietario de la vivienda?*%0A
    ${propietario}%0A%0A
    *Tipo de Propiedad*%0A
    ${servicio}%0A%0A
    *¿Cuál es su record crediticio?*%0A
    ${credito}`;

  if (cliente === "" || direccion === "" || codigo === "" || credito === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu solicitud, ${cliente}`;

  window.open(url);
});
