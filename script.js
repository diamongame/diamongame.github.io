let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    slides.style.transform = 'translateX(' + (-index * 100) + '%)';
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);

function toggleMenu(burgerMenu) {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

const socialBubble = document.getElementById('socialBubble');
    const socialIcons = document.getElementById('socialIcons');

    let isDragging = false;
    let offsetX, offsetY;

    // Fungsi untuk menampilkan dan menyembunyikan ikon sosial media
    socialBubble.addEventListener('click', () => {
        socialIcons.classList.toggle('active');
        socialBubble.classList.toggle('active');
    });

    // Fungsi untuk memulai drag
    socialBubble.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - socialBubble.getBoundingClientRect().left;
        offsetY = e.clientY - socialBubble.getBoundingClientRect().top;     
        socialBubble.classList.add('dragging');
    });

    // Fungsi untuk menghentikan drag
    document.addEventListener('mouseup', () => {
        isDragging = false;
        socialBubble.classList.remove('dragging');
    });

    // Fungsi untuk menggerakkan bubble
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            socialBubble.style.left = `${x}px`;
            socialBubble.style.top = `${y}px`;
        }
    });

    const note = document.getElementById('note');
    const closeNoteBtn = document.getElementById('closeNoteBtn');
    const questionBtn = document.getElementById('questionBtn');

    closeNoteBtn.addEventListener('click', () => {
        note.classList.add('folded');
        setTimeout(() => {
            note.style.display = 'none';
            questionBtn.classList.add('visible');
        }, 500);
    });

    questionBtn.addEventListener('click', () => {
        note.style.display = 'block';
        setTimeout(() => {
            note.classList.remove('folded');
        }, 10);
        questionBtn.classList.remove('visible');
    });