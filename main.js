

// Menu
let togglebtn = document.querySelector('#togglebtn');
let showhead = document.querySelector('.showhead');
let closebtn = document.querySelector('.closebtn');
let navbar= document.querySelector('.navbar');

togglebtn.addEventListener('click', () => {
    showhead.style.display = 'block';
})

closebtn.addEventListener('click', () => {
    showhead.style.display = 'none';
})

navbar.addEventListener('click', () => {
    showhead.style.display = 'none';
});
