const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'sammy' && password === '19/03') {
        // Redirigir a la página principal
        window.location.href = 'principal.html'; // Reemplaza con el nombre de tu archivo principal
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
});

// Obtener el elemento de audio
const myAudio = document.getElementById('myAudio');

// Pausar o reanudar la reproducción con un botón "Play/Pause"
function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
}

// Controlar el volumen
myAudio.onvolumechange = function() {
    console.log('Volumen actual: ' + myAudio.volume);
}

