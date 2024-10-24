function showContent(contentId) {
    // Скрываем все блоки контента
    const contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach(block => {
        block.classList.remove('active');
    });

    // Убираем активный класс у всех кнопок
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Показываем выбранный блок и добавляем активный класс к кнопке
    const activeBlock = document.getElementById(contentId);
    if (activeBlock) {
        activeBlock.classList.add('active');
    }

    const activeButton = Array.from(buttons).find(button => button.onclick.toString().includes(contentId));

    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Инициализация: показываем первый блок контента
document.addEventListener('DOMContentLoaded', () => {
    showContent('fațade');
});