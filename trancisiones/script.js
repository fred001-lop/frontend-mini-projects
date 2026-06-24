const toggleBtn = document.getElementById('toggleBtn');
const fadeBox = document.getElementById('fadeBox');

toggleBtn.addEventListener('click', function(){
    fadeBox.classList.toggle('hidden');
})