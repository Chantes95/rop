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

