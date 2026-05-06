const form = document.getElementById('myForm');
const message = document.getElementById('emailMessage');

form.addEventListener('submit', function(event){
    event.preventDefault();
    message.textContent = "Submit Succesfully";
});