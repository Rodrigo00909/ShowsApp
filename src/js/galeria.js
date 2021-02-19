document.addEventListener('DOMContentLoaded', function() { // Esto hace q se espere a q el documento cargue para usarse el js
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria_imagenes');
    for(let i = 1; i <= 12; i++) { // de 1 a 12 xq son 12 imagenes
        // Genero imagen
        const imagen = document.createElement('IMG'); 
        imagen.src = `build/img/thumb/${i}.webp`; // Selecciono la pos de 

        // Añadir la funcion de mostar img
        imagen.onclick  = mostrarImagen;
        // Como saber a CUAL FOTO le di clikc?
        imagen.dataset.imagenId = i; // Esto agregará un atributo html llamado data-imagen-id="i" que es como el id de cada uno

        // Mostrarla en el html:
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        // Agregar LI a galeria
        galeria.appendChild(lista);

        imagen.classList.add('galeria_imagen');
    }
}

function mostrarImagen(e) {
    // Convertir el numero q recibo como e.target en INT xq es string como predeterminado
    // Color blanco en consola = string. Color azul/violeta en consola = int
    const id = parseInt(e.target.dataset.imagenId)
    
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    // Agregar al html
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    // Boton cerrar img
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn_cerrar');
    // Agregamos el btn cerrar a overlay
    overlay.appendChild(cerrarImagen);

    // Mostrarlo
    const body = document.querySelector('body');
    body.appendChild(overlay);
}