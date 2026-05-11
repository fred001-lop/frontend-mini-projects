
const fomular = document.getElementById("myForm");
const tost = document.getElementById("toast");

fomular.addEventListener("submit", function(event){
    event.preventDefault();
    tost.classList.add("show");
    tost.classList.remove("hidden");


    setTimeout(function(){
        tost.classList.add('hidden');
        tost.classList.remove('show')
    },3000);
});