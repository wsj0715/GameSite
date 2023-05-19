const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.menu');
const search = document.querySelector('.search-container');
const icon = document.querySelector('.user');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    search.classList.toggle('active');
    icon.classList.toggle('active');
});