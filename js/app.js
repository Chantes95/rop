// JavaScript Document
// JavaScript Document
document.getElementById('removeBgButton').addEventListener('click', function() {
    const fileInput = document.getElementById('imageInput');
    const outputDiv = document.getElementById('output');
    const downloadBtn = document.getElementById('downloadBtn');

    if (fileInput.files.length === 0) {
        alert("Por favor, selecciona una imagen.");
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    // API key de Remove.bg (reemplaza con tu clave)
    const apiKey = 'ufL8exj2QU4F96TmWx5AfiVA';

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': apiKey
        },
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const imgUrl = URL.createObjectURL(blob);
        outputDiv.innerHTML = `<img src="${imgUrl}" alt="Resultado">`;

        // Hacer que el botón de descarga sea visible
        downloadBtn.style.display = 'inline-block';
        downloadBtn.href = imgUrl;  // Establecer el enlace de descarga
        downloadBtn.download = 'imagen_sin_fondo.png';  // Nombre del archivo descargado
        downloadBtn.textContent = 'Descargar Imagen';  // Texto del botón
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error al eliminar el fondo. Verifica tu API key.");
    });
});