const usuariosRegistrados = [
    { email: 'pepito23@gmail.com', password: '123456' },
    { email: 'juanito22@gmail.com', password: 'abcdef' }
];

// Función para manejar el login
function iniciarSesion(event) {
    event.preventDefault();  

    // Obtener los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar si el usuario está registrado
    const usuario = usuariosRegistrados.find(user => user.email === email && user.password === password);

    if (usuario) {
        window.location.href = './index.html';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
}

function registrarUsuario(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;

    // Obtener los usuarios existentes en el LocalStorage
    let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

    // Verificar si el email ya está registrado
    const existeUsuario = usuariosRegistrados.find(user => user.email === email);

    if (existeUsuario) {
        alert('Este correo electrónico ya está registrado.');
    } else {
        // Crear el nuevo usuario
        const nuevoUsuario = { nombre, apellido, email, password, fechaNacimiento };

        // Agregar el nuevo usuario al array de usuarios
        usuariosRegistrados.push(nuevoUsuario);

        // Guardar el array actualizado en el LocalStorage
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));

        // Redirigir al login o página principal
        alert('Usuario registrado con éxito. Ahora puedes iniciar sesión.');
        window.location.href = './index.html';
    }
}