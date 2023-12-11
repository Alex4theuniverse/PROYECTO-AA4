// Obtiene los elementos necesarios
const btnDetalles1 = document.getElementById("mostrarDetalles1");
const btnDetalles2 = document.getElementById("mostrarDetalles2");
const btnDetalles3 = document.getElementById("mostrarDetalles3");
const btnDetalles4 = document.getElementById("mostrarDetalles4");
const btnDetalles5 = document.getElementById("mostrarDetalles5");
const btnDetalles6 = document.getElementById("mostrarDetalles6");
const btnDetalles7 = document.getElementById("mostrarDetalles7");
const btnDetalles8 = document.getElementById("mostrarDetalles8");
const btnDetalles9 = document.getElementById("mostrarDetalles9");
const btnDetalles10 = document.getElementById("mostrarDetalles10");
const btnDetalles11 = document.getElementById("mostrarDetalles11");
const btnDetalles12 = document.getElementById("mostrarDetalles12");

const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar");
const imagenModal = document.getElementById("imagenModal");
const informacionModal = document.getElementById("informacionModal");

// Agrega eventos de clic a los botones de "Más información"
btnDetalles1.addEventListener("click", mostrarModal.bind(null, "/imagenes/el diario greg.jpg",
"Para Greg las vacaciones de invierno están siendo un poco duras, tras quedarse atrapado con su familia en la nieve y preocupado por conseguir una nueva consola." ));
btnDetalles2.addEventListener("click", mostrarModal.bind(null, "./imagenes/5nights.jpg",
"Un guardia de seguridad con problemas comienza a trabajar en Freddy Fazbear's Pizza. Mientras pasa su primera noche en el trabajo, se da cuenta de que el turno de noche en Freddy's no será tan fácil de superar."));
btnDetalles3.addEventListener("click", mostrarModal.bind(null, "./imagenes/wonka.jpg",
"Basado en el extraordinario personaje de Charlie y la fábrica de chocolate, el libro infantil más emblemático de Roald Dahl y uno de los libros infantiles más vendidos de todos los tiempos, Wonka cuenta la maravillosa historia de cómo el mayor inventor, mago y el chocolatero se convirtió en el querido Willy Wonka que conocemos hoy."));
btnDetalles4.addEventListener("click", mostrarModal.bind(null, "./imagenes/capitanaM.jpg",
"Cuando sus obligaciones la envían a un agujero de gusano vinculado a un revolucionario kree, los poderes de Carol Danvers, la capitana Marvel, se entremezclan con los de Kamala Khan, también conocida como la Sra. Marvel y la sobrina de Carol, ahora astronauta de S.A.B.E.R., Monica Rambeau. Juntas, deberán salvar el universo como The Marvels."));
btnDetalles5.addEventListener("click", mostrarModal.bind(null, "./imagenes/oppenheimer.jpg",
"La película está protagonizada por Cillian Murphy como J. Robert Oppenheimer y Emily Blunt como su esposa, la bióloga y botánica Katherine Kitty Oppenheimer. El ganador del Oscar® Matt Damon interpreta al general Leslie Groves Jr. director del Proyecto Manhattan, y Robert Downey, Jr. interpreta a Lewis Strauss, comisionado fundador de la Comisión de Energía Atómica de EE. UU."));
btnDetalles6.addEventListener("click", mostrarModal.bind(null, "../imagenes/napoleon.jpg",
"Napoleón es un espectáculo lleno de épica y acción que detalla el enrevesado ascenso y caída del icónico Emperador francés Napoleón Bonaparte, interpretado por el ganador del Oscar® Joaquim Phoenix. Tras un rodaje orquestado por el legendario director Ridley Scott sobre un deslumbrante telón de fondo a gran escala, la película muestra la incesante carrera de Bonaparte hasta el poder, a través del prisma de la adictiva y volátil relación con Josefina, la que fue su único amor verdadero, presentando sus visionarias tácticas políticas y militares a través de algunas de las secuencias prácticas de batallas más dinámicas jamás filmadas."));
btnDetalles7.addEventListener("click", mostrarModal.bind(null, "../imagenes/leo.jpg",
"El actor y comediante Adam Sandler («Hotel Transylvania»; «La mejor de mis bodas») te hará morir de risa con esta comedia musical que relata el último año de primaria de una clase en su transición a la adolescencia... desde la perspectiva de una mascota. El lagarto Leo (Sandler), de 74 años, está harto de llevar décadas en el mismo salón de clases en la Florida compartiendo su terrario con una tortuga (Bill Burr). Cuando Leo descubre que le queda solo un año de vida, decide escapar, pero se ve envuelto en los problemas de los ansiosos estudiantes y de la malvada maestra sustituta. Igual, la lista de deseos de Leo termina siendo la más extraña y gratificante del mundo."));
btnDetalles8.addEventListener("click", mostrarModal.bind(null, "../imagenes/assasinlunajpg.jpg",
"Ambientada en la Oklahoma de la década de 1920, narra los asesinatos en serie de los miembros de la nación indígena Osage, que era muy rica en petróleo; una serie de crímenes brutales que más tarde se conocería como el Reinado del Terror."));
btnDetalles9.addEventListener("click", mostrarModal.bind(null, "../imagenes/megalodón.jpg",
"Prepárate para la máxima descarga de adrenalina en agosto con Megalodón 2: el gran abismo, una emocionante atracción que supera al éxito de taquilla de 2018 y lleva la acción a alturas más altas y profundidades aún mayores, ¡con múltiples Megs gigantes y mucho más! Sumérgete en aguas desconocidas con Jason Statham y el ícono de acción global Wu Jing, mientras lideran un audaz equipo de investigación en una inmersión exploratoria en las profundidades más oscuras del océano. Su viaje se convierte en un caos cuando una operación minera malévola amenaza su misión y los obliga a una batalla de alto riesgo por la supervivencia. Enfrentados a colosales Megs e implacables saqueadores ambientales, nuestros héroes deben correr, ser más astutos y nadar más rápido que sus depredadores despiadados en una trepidante carrera contra el tiempo. Sumérgete en la experiencia cinematográfica más electrizante del año con Megalodón 2: el gran abismo, ¡donde las profundidades del océano solo se comparan con las alturas de una emoción pura e imparable!"));
btnDetalles10.addEventListener("click", mostrarModal.bind(null, "../imagenes/saw.jpg",
"Entre los acontecimientos de 'Saw' y 'Saw II', un enfermo y desesperado John Kramer viaja a México para someterse a un procedimiento médico arriesgado y experimental con la esperanza de encontrar una cura milagrosa para su cáncer, sólo para descubrir que toda la operación es una estafa para robar a los más vulnerables. Armado con un nuevo propósito, el infame asesino en serie regresa a su trabajo, dándole la vuelta a los estafadores en su forma visceral característica a través de trampas tortuosas, trastornadas e ingeniosas."));
btnDetalles11.addEventListener("click", mostrarModal.bind(null, "../imagenes/noche de paz.jpg",
"Un padre atormentado es testigo de la muerte de su hijo cuando éste queda atrapado en un fuego cruzado entre bandas. Roto de dolor y sin voz, debido a una herida profunda que afecta sus cuerdas vocales, decidirá someterse a un estricto entrenamiento para vengar su muerte."));
btnDetalles12.addEventListener("click", mostrarModal.bind(null, "../imagenes/avatar2.jpg",
"Ambientada más de una década después de los acontecimientos de la primera película, Avatar: El sentido del agua empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.  "));
// Función para cerrar el modal
function cerrarModalFunc() {
    modal.style.display = "none";

}

// Agrega evento de clic al botón de cerrar modal
cerrarModal.addEventListener("click", cerrarModalFunc);



// Función para mostrar el modal
function mostrarModal(imagenSrc, informacion) {
   // Configura la imagen y la información
    imagenModal.src = imagenSrc;
    informacionModal.textContent = informacion;

   // Calcula la posición de centrado
    const ventanaAncho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const ventanaAlto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const modalAncho = modal.offsetWidth;
    const modalAlto = modal.offsetHeight;

    const leftPos = (ventanaAncho - modalAncho) / 1;
    const topPos = (ventanaAlto - modalAlto) / 1;

   // Aplica la posición al modal
    modal.style.left = leftPos + "px";
    modal.style.top = topPos + "px";

   // Muestra el modal
    modal.style.display = "flex";
}