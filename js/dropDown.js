function toggleContent(header) {
    const content = header.nextElementSibling; // Получаем следующий элемент (контент)
    const arrowDown = header.querySelector('.arrow-down');
    const arrowUp = header.querySelector('.arrow-up');

    content.classList.toggle('hidden');

    // Меняем направление стрелки
    if (content.classList.contains('hidden')) {
        arrowDown.style.display = 'inline';
        arrowUp.style.display = 'none';
    } else {
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'inline';
    }
}