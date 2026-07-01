

const question = document.getElementById('question');
const answer = document.querySelector('.faq-answer');

question.addEventListener('click', () => {
    answer.classList.toggle('show');
});