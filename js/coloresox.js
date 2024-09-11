// Función para cargar el primer logo
document.getElementById('uploadLogo1').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('logoImg1');
            img.src = e.target.result;
            document.getElementById('logoContainer1').style.display = 'block'; // Mostrar el logo 1
        }
        reader.readAsDataURL(file);
    }
});

// Función para cargar el segundo logo
document.getElementById('uploadLogo2').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('logoImg2');
            img.src = e.target.result;
            document.getElementById('logoContainer2').style.display = 'block'; // Mostrar el logo 2
        }
        reader.readAsDataURL(file);
    }
});

// Hacer ambos logos arrastrables
dragElement(document.getElementById("logoContainer1"));
dragElement(document.getElementById("logoContainer2"));

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Asignar eventos para el mouse
    elmnt.addEventListener('mousedown', dragMouseDown);
    // Asignar eventos para touch en móviles
    elmnt.addEventListener('touchstart', dragTouchStart, { passive: false });

    // Funciones para eventos del mouse
    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.addEventListener('mouseup', closeDragElement);
        document.addEventListener('mousemove', elementDrag);
    }

    // Funciones para eventos táctiles
    function dragTouchStart(e) {
        e.preventDefault(); // Previene el comportamiento predeterminado de desplazamiento en móviles
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        document.addEventListener('touchend', closeDragElement, { passive: false });
        document.addEventListener('touchmove', elementTouchDrag, { passive: false });
    }

    // Movimiento con el mouse
    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    // Movimiento con el toque táctil
    function elementTouchDrag(e) {
        e.preventDefault(); // Previene el comportamiento predeterminado de desplazamiento en móviles
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    // Finaliza el arrastre para ambos (mouse y toque táctil)
    function closeDragElement() {
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('mousemove', elementDrag);
        document.removeEventListener('touchend', closeDragElement);
        document.removeEventListener('touchmove', elementTouchDrag);
    }
}

// Escalar el tamaño del primer logo
const logoSizeSlider1 = document.getElementById('logoSize1');
const logoContainer1 = document.getElementById('logoContainer1');

logoSizeSlider1.addEventListener('input', function() {
    const newSize = logoSizeSlider1.value;
    logoContainer1.style.width = newSize + 'px';
    logoContainer1.style.height = newSize + 'px';
});

// Escalar el tamaño del segundo logo
const logoSizeSlider2 = document.getElementById('logoSize2');
const logoContainer2 = document.getElementById('logoContainer2');

logoSizeSlider2.addEventListener('input', function() {
    const newSize = logoSizeSlider2.value;
    logoContainer2.style.width = newSize + 'px';
    logoContainer2.style.height = newSize + 'px';
});

// Cambiar el color de la prenda sin perder los logos
const colorOptions = document.querySelectorAll('.color-option');

colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        const newImageSrc = option.getAttribute('data-image');
        
        // Cambia solo la imagen de la prenda, no afecta los logos
        document.getElementById('prenda').src = newImageSrc;
    });
});
// Selección de color para Logo 1
document.querySelectorAll('.colorPalette .color-btn').forEach(button => {
    button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        const logo = document.getElementById('logoImg1');
        applyColorFilter(logo, color);
    });
});
// Selección de color para Logo 2
document.querySelectorAll('.colorPalette .color-btn').forEach(button => {
    button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        const logo = document.getElementById('logoImg2');
        applyColorFilter(logo, color);
    });
});

// Selección de color para ambos logos
document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        
        // Cambia el color del logo 1 si está cargado
        const logo1 = document.getElementById('logoImg1');
        if (logo1 && logo1.src) {
            applyColorFilter(logo1, color);
        }

        // Cambia el color del logo 2 si está cargado
        const logo2 = document.getElementById('logoImg2');
        if (logo2 && logo2.src) {
            applyColorFilter(logo2, color);
        }
    });
});
// Aplicar el filtro de color a las imágenes de los logos
function applyColorFilter(logo, color) {
    switch(color) {
        case 'white':
            logo.style.filter = 'brightness(0) saturate(100%) invert(100%)'; // Blanco
            break;
        case 'black':
            logo.style.filter = 'brightness(0) saturate(100%)'; // Negro
            break;
        case 'blue':
            logo.style.filter = 'brightness(2.0) saturate(250%) sepia(100%) hue-rotate(175deg)'; // Azul Cielo más claro y brillante
            break;
        case 'navy':
            logo.style.filter = 'brightness(0.7) saturate(100%) sepia(100%) hue-rotate(190deg) saturate(300%)'; // Azul Marino ajustado
            break;
        case 'gray':
            logo.style.filter = 'brightness(0.9) saturate(0%) grayscale(100%)'; // Gris
            break;
        default:
            logo.style.filter = 'none';
            break;
    }
}



