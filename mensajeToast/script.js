const showToastBtn = document.getElementById('showToast');
const toast = document.getElementById('toast');

showToastBtn.addEventListener('click', function(){
  /*SHOW TOAST*/
  toast.classList.remove('hidden');
  toast.classList.add('show');

/*hide after 3 seconds*/ 
setTimeout(function(){
  toast.classList.remove('show');
  toast.classList.add('hidden');
},2000)
});