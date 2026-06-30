const button = document.getElementById('animatedButton');

button.addEventListener('click', function() {
  // Add a class for the click effect
    button.classList.add('button-clicked');
  
  // Remove the class after animation completes
  setTimeout(function() {
    button.classList.remove('button-clicked');
  }, 600);
});
