const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const authentication = document.querySelector('.authentication');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    authentication.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });
});
