const loadBtn = document.getElementById('loadBtn');
const spinner = document.getElementById('spinner');


loadBtn.addEventListener('click', function(){
    //mostrar el spinner
    spinner.classList.remove('hidden');
        //despues de 3 segundos se esconde el spinner
    setTimeout(function(){
        spinner.classList.add('hidden');
    }, 3000);
})