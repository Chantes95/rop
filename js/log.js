const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Credenciales preestablecidas
const user = { email: 'chantes1995@gmail.com', password: 'CUE2024' };

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Verificar si el correo y la contraseña coinciden con los preestablecidos
    if (email === user.email && password === user.password) {
        // Sesión válida
        res.json({ success: true });
    } else {
        // Sesión no válida
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
// JavaScript Document