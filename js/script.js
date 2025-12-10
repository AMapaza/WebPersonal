// Selecciona los elementos del menú y el contenido
const menuItems = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Quitar 'active' de todos los elementos del menú
    menuItems.forEach(i => i.classList.remove('active'));
    // Agregar 'active' al item clickeado
    item.classList.add('active');

    // Ocultar todas las secciones
    tabContents.forEach(content => content.classList.remove('active'));

    // Mostrar solo la sección que corresponde al tab clickeado
    const target = item.getAttribute('data-tab');
    document.getElementById(target).classList.add('active');
  });
});

// Reproductor de musica
// Varios reproductores a la vez
const players = document.querySelectorAll('.player');

players.forEach(player => {
    const audio = player.querySelector('.audio');
    const playPauseBtn = player.querySelector('.playPauseBtn');
    const progressBar = player.querySelector('.progressBar');
    const progressContainer = player.querySelector('.progressContainer');

    // Play/Pause individual
    playPauseBtn.addEventListener('click', () => {
        // Pausar otros audios cuando uno empieza
        players.forEach(p => {
            const otherAudio = p.querySelector('.audio');
            const otherBtn = p.querySelector('.playPauseBtn');

            if (otherAudio !== audio) {
                otherAudio.pause();
                otherBtn.textContent = "▶";
            }
        });

        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸";
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶";
        } 
    });

    // Barra de progreso
    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = pct + '%';
    });

    // Reset al finalizar
    audio.addEventListener('ended', () => {
        playPauseBtn.textContent = "▶";
        progressBar.style.width = '0%';
    });

    // Permitir saltar en la barra
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pct * audio.duration;
    });
});
