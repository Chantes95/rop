// JavaScript Document
const users = [
    { email: "hola1@hola.com", password: "hola1" },
    { email: "hola2@hola.com", password: "hola2" },
    { email: "hola3@hola.com", password: "hola3" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    const isValidUser = users.some(user => user.email === email && user.password === password);

    if (isValidUser) {
        sessionStorage.setItem('loggedIn', 'true');  // Guardar estado de sesión
        window.location.href = "productos.html";
    } else {
        errorElement.textContent = "Correo o contraseña incorrectos";
    }
});

