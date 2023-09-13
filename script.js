// JavaScript para manejar la reproducción
const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoUrl = button.getAttribute('data-video-url');
        document.getElementById('video-player').src = videoUrl;
    });
});

