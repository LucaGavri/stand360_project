const start = document.querySelector('.start');
const body = document.querySelector('body');

setTimeout(() => {
    start.classList.add('maximize');
}, 2000);

setTimeout(() => {
    start.classList.add('out');
    body.style.overflow = 'auto'
}, 3000);