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
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        // Obtener la posición inicial del mouse
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        // Calcular la nueva posición del logo
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
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

