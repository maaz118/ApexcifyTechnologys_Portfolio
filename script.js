var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web developer"],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 30,
    loop: true
});

const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});
