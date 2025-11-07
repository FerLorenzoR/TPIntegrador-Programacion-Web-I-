const imagenesCarrusel = [
  "/assets/img/Portada1.jpeg",
  "/assets/img/Portada2.jpeg",
  "/assets/img/Portada3.jpeg",
  "/assets/img/Portada4.jpeg",
];

let indiceActual = 0;

const imgElement = document.getElementById("carrousel-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let mostrarImagen = () => {
  //Imagen actual
  imgElement.src = imagenesCarrusel[indiceActual];
};

//condicion ? expresionSiEsVerdadera : expresionSiEsFalsa;

let avanzar = () => {
  //La logica es que, si no es el ultimo elemento, avanza, si es el ultimo elemento, vuelvo al primero, al primer indice
  //Evaluamos si el indice actual es el final de la imagen, si es asi volvemos a la primera imagen, sino aumentamos el indie en 1
  indiceActual =
    indiceActual === imagenesCarrusel.length - 1 ? 0 : indiceActual + 1;
  //llamo a la funcion mostrarImagen()
  mostrarImagen();
};

let retroceder = () => {
  //Evaluamos si el indice es 0, osea que estamos en la primera imagen, entonces retrocedemos a la ultima imagen, sino, retrocedemos igualmente una posicion.
  indiceActual =
    indiceActual === 0 ? imagenesCarrusel.length - 1 : indiceActual - 1;
  mostrarImagen();
};

prevBtn.addEventListener("click", retroceder);
nextBtn.addEventListener("click", avanzar);

mostrarImagen();
