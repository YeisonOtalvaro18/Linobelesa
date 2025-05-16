// Array para almacenar usuarios registrados
const usersDatabase = [];

// Expresión regular para validar contraseñas
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
const PASSWORD_ERROR_MSG = 'La contraseña debe tener entre 8 y 15 caracteres, incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.';

// Función para validar contraseña
function isValidPassword(password) {
    return PASSWORD_REGEX.test(password);
}

// Función para limpiar formularios
function clearForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
    }
}

// Modal de Login
function openModal() {
    closeSignupModal();
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    clearForm('loginForm');
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Modal de Registro
function openSignupModal() {
    closeModal();
    document.getElementById('signupModal').style.display = 'block';
    document.getElementById('signupOverlay').style.display = 'block';
    clearForm('signupForm');
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
    document.getElementById('signupOverlay').style.display = 'none';
}

// Manejador de registro de usuario
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value;
    const email = document.getElementById('email').value.trim();

    // Validar contraseña
    if (!isValidPassword(newPassword)) {
        alert(PASSWORD_ERROR_MSG);
        return;
    }

    // Verificar si el usuario ya existe
    const userExists = usersDatabase.some(user => user.username === newUsername || user.email === email);
    if (userExists) {
        alert('El nombre de usuario o correo electrónico ya está registrado.');
        return;
    }

    // Registrar nuevo usuario
    usersDatabase.push({
        username: newUsername,
        password: newPassword, // En producción, usar hash
        email: email
    });

    console.log('Usuario registrado:', { username: newUsername, email: email });
    console.log('Base de datos actual:', usersDatabase);
    
    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    closeSignupModal();
    clearForm('signupForm');
    openModal(); // Redirigir automáticamente al login
});

// Manejador de inicio de sesión

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Validar contraseña
    if (!isValidPassword(password)) {
        alert(PASSWORD_ERROR_MSG);
        return;
    }

    // Buscar usuario en la base de datos
    const user = usersDatabase.find(u => u.username === username && u.password === password);
    
    if (user) {
        alert('¡Inicio de sesión exitoso! Bienvenido ' + username);
        closeModal();
        clearForm('loginForm');
        
        // Redirigir al usuario a index.html
        window.location.href = 'index.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});


// Cerrar modales con Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closeSignupModal();
    }
});

 
 document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-search");
    const searchBar = document.getElementById("search-bar");

    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault(); 
      searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
    });
  });


  function buscarEnPagina() {
  const input = document.getElementById("search-bar").value.toLowerCase();
  const items = document.querySelectorAll("#lista-productos li");

  items.forEach(item => {
    const texto = item.textContent.toLowerCase();
    item.style.display = texto.includes(input) ? "" : "none";
  });
}