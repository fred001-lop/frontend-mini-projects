function validateEmail(inputId, errorId){
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(errorId);

    inputElement.addEventListener('input', function(){
        const emailValue = this.value;
        if(emailValue.includes('@')){
            errorElement.textContent = 'Looks Good!';
        }else{
            errorElement.textContent = "Please enter a valid email address"
        }
    });

};
validateEmail('email', 'emailError');

