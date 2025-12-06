// Получаем все кнопки вопросов
const questions = document.querySelectorAll('.question');

// Добавляем обработчик клика на каждый вопрос
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Добавляем класс для зачёркивания
        question.classList.add('struck');
        
        // Дополнительно: можно добавить всплывающее окно с вопросом
        alert(`Выбран вопрос на ${question.dataset.value} баллов из категории "${question.closest('.category').querySelector('h2').textContent}"`);
    });
});
