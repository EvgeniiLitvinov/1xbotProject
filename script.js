document.querySelectorAll('.audio-player').forEach(player => {
    const audio = player.querySelector('.audio-element');
    const playPauseBtn = player.querySelector('.play-pause img');
    const currentTimeElem = player.querySelector('.current-time');
    const durationElem = player.querySelector('.duration');
    const seekBar = player.querySelector('.seek-bar');
    const volumeBtn = player.querySelector('.volume-btn');
    const volumeSlider = player.querySelector('.volume-slider');
    const volumeControl = player.querySelector('.volume-control');

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.src = '.img/Btn-pause.svg'; // Замена на иконку Pause
            playPauseBtn.alt = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.src = './img/Button-Play.svg'; // Замена на иконку Play
            playPauseBtn.alt = 'Play';
        }
    });

    // Update current time and duration
    audio.addEventListener('timeupdate', () => {
        const currentMinutes = Math.floor(audio.currentTime / 60);
        const currentSeconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
        currentTimeElem.textContent = `${currentMinutes}:${currentSeconds}`;
        seekBar.value = audio.currentTime;
    });

    audio.addEventListener('loadedmetadata', () => {
        const durationMinutes = Math.floor(audio.duration / 60);
        const durationSeconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
        durationElem.textContent = `${durationMinutes}:${durationSeconds}`;
        seekBar.max = audio.duration;
    });

    // Seek functionality
    seekBar.addEventListener('input', () => {
        audio.currentTime = seekBar.value;
    });

    // Volume control toggle
    volumeBtn.addEventListener('click', () => {
        volumeControl.classList.toggle('active');
    });

    // Adjust volume
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value;
    });
});


// ФОРМА ОБРАТНОЙ СВЯЗИ

const openBtn = document.querySelector('.header__btn')
const mainBtn = document.querySelector('.main-button')
const modalWindow = document.querySelector('.modal')


openBtn.addEventListener('click', function () {
    modalWindow.classList.add('open')
})

mainBtn.addEventListener('click', function () {
    modalWindow.classList.add('open')
})



window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        modalWindow.classList.remove('open')
    }
})

document.querySelector('#my-modal .modal-form').addEventListener('click', function(event) {
    event._isClickWithInModal = true
})

document.querySelector('#my-modal').addEventListener('click', function(event) {
    if (event._isClickWithInModal) return
    event.currentTarget.classList.remove('open')
})

// Скрытие формы по клику на кнопку в форме
const formBtn = document.querySelector('.form-button')

formBtn.addEventListener('click', function () {
    modalWindow.classList.remove('open')
})

// Плавный скролл

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Предотвращаем стандартное поведение

      // Получаем ID целевого элемента
        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

      // Выполняем плавную прокрутку
        targetElement.scrollIntoView({
            behavior: 'smooth', // Плавное поведение
            block: 'start'      // Прокрутка к началу секции
        });
        });
    });

// Отступ для скролла 

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
      const offset = 100; // Отступ сверху
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    });
});


// BURGER

const burgerMenu = document.querySelector('.burger')
const nav = document.querySelector('.header__nav')
const links = document.querySelectorAll('li')

burgerMenu.addEventListener('click', function() {
    this.classList.toggle('active')
    nav.classList.toggle('open')
} )

links.forEach(function(link) {
    link.addEventListener('click', function() {
        burgerMenu.classList.remove('active')
        nav.classList.remove('open')
    }) 
})


