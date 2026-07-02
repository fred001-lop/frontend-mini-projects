


const passwordInput = document.getElementById('password');
const message = document.getElementById('loginMsg');
const logiBtn = document.getElementById('loginBtn');


logiBtn.addEventListener('click', () => {
    if(passwordInput.value === 'admin123'){
        message.textContent = 'Login in succesfully!';
        message.className = 'success';
    }else{
        message.textContent = 'Invalid Password';
        message.className = 'error';
    }
})