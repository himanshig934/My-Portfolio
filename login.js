

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginbtn = document.querySelector('#loginbtn');
let invalidCred = document.querySelector('.invalidCred');
let loginCred = document.querySelector('.loginCred');
let closebtn = document.querySelectorAll('.closebtn');
let errorbox= document.querySelector('.errorbox');
let loginbox = document.querySelector('.loginbox');

loginbtn.addEventListener('click', (e) => {
e.preventDefault();

if(username.value === 'admin@himanshi' && password.value === '123'){
  invalidCred.style.display = 'none';
  loginCred.style.display = 'block';
}else{
    invalidCred.style.display = 'block';
    loginCred.style.display = 'none';
}

username.value = '';
password.value = '';

})

closebtn.forEach(btn => {
  btn.addEventListener('click', () => {
    loginCred.style.display = 'none';
    invalidCred.style.display = 'none';
  });
});

