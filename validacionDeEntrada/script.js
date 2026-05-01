const emailInput = document.getElementById("email");
emailInput.addEventListener("input", function(){
    if(emailInput.value.includes('@')){
        emailInput.style.border = "2px solid rgb(0, 250, 0)";
    }else{
        emailInput.style.border = "2px solid rgb(250, 0, 0)";
    }
});