// Lista de usuarios y contraseñas
const users = [{
        email: "ventas@cueuniformes.com",
        password: "j.angel"
    },
    {
        email: "ventas@",
        password: "j.angel"
    },
    {
        email: "aidee.medina@cueuniformes.com",
        password: "aidee.medina"
    },
    {
        email: "aidee.medina@",
        password: "aidee.medina"
    },
    {
        email: "ana.avila@cueuniformes.com",
        password: "ana.avila"
    },
    {
        email: "ana.avila@",
        password: "ana.avila"
    },{
        email: "c.tagle@cueuniformes.com",
        password: "c.tagle"
    },
    {
        email: "c.tagle@",
        password: "c.tagle"
    },
    {
        email: "ernesto.tagle@cueuniformes.com",
        password: "ernesto.tagle"
    },
    {
        email: "ernesto.tagle@",
        password: "ernesto.tagle"
    },
    {
        email: "thalia.avila@cueuniformes.com",
        password: "thalia.avila"
    },
    {
        email: "thalia.avila@",
        password: "thalia.avila"
    }
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir comportamiento predeterminado del formulario

    // Obtener los valores ingresados por el usuario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    // Aceptar "ventas@" como un email válido
    if (email.includes('@')) {
        const isValidUser = users.some(user => user.email === email && user.password === password);

        if (isValidUser) {
            sessionStorage.setItem('loggedIn', 'true'); // Guardar el estado de sesión
            window.location.href = "productos.html"; // Redirigir al usuario
        } else {
            errorElement.textContent = "Correo o contraseña incorrectos";
        }
    } else {
        errorElement.textContent = "Formato de correo inválido.";
    }
});
