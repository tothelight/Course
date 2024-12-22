// Функция для проверки ответов
function checkAnswers() {
    const quizForm = document.getElementById('quizForm');
    const result = document.getElementById('result');
    const answers = {
        question1: 'a',
        question2: 'b',
        question3: 'c',
        question4: 'a'
    };
    let score = 0;
    let total = Object.keys(answers).length;

    // Перебор всех вопросов
    for (let question in answers) {
        const selected = quizForm.querySelector(`input[name="${question}"]:checked`);
        
        // Если ответ выбран и совпадает с правильным
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    // Показываем результат
    result.style.display = 'block';
    result.innerHTML = `Вы набрали ${score} из ${total} правильных ответов.`;
}

// Функция для переворота карточки
function flipCard(card) {
    card.classList.toggle("flipped");
}
