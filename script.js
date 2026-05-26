// ESTRELLAS

const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 120; i++) {

    const star = document.createElement('span');

    star.classList.add('star');

    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';

    star.style.animationDuration = (Math.random() * 3 + 2) + 's';

    starsContainer.appendChild(star);
}

// CUENTA REGRESIVA

const fechaEvento = new Date("June 6, 2026 15:00:00").getTime();

const intervalo = setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    if (diferencia < 0) {

        clearInterval(intervalo);

        document.querySelector(".countdown").innerHTML =
            "<h2>🎉 ¡La fiesta ya comenzó! 🎉</h2>";
    }

}, 1000);

// 🎮 FUNCIÓN DE MÚSICA LOCAL

function playMusic() {
    const audio = document.getElementById("music");

    if (audio.paused) {
        audio.play();
        alert("🎵 ¡Música galáctica activada!");
    } else {
        audio.pause();
        alert("🔇 Música pausada");
    }
}