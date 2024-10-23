// Хранит выбранный тип дома
let selectedType = 'all';

// Функция для фильтрации домов
function filterHouses(type, element) {
    const houses = document.querySelectorAll('.house');

    // Сбрасываем активный класс для всех кнопок
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Устанавливаем активный класс для нажатой кнопки
    element.classList.add('active');

    selectedType = type; // Сохраняем выбранный тип

    // Фильтруем дома по типу
    houses.forEach(house => {
        if (type === 'all' || house.dataset.type === type) {
            house.style.display = 'block';
        } else {
            house.style.display = 'none';
        }
    });
}

// Функция для применения фильтров
function applyFilters() {
    const numarEtaje = document.getElementById('numarEtaje').value;
    const numarCamere = document.getElementById('numarCamere').value;
    const suprafata = document.getElementById('suprafata').value;
    const pretDeLa = document.getElementById('pretDeLa').value;
    const pretPanaLa = document.getElementById('pretPanaLa').value;

    const houses = document.querySelectorAll('.house');

    houses.forEach(house => {
        const floors = house.dataset.floors;
        const rooms = house.dataset.rooms;
        const area = house.dataset.area;
        const price = parseInt(house.dataset.price);

        // Проверяем только для выбранного типа
        if (selectedType !== 'all' && house.dataset.type !== selectedType) {
            house.style.display = 'none';
            return;
        }

        const matchesFilters =
            (!numarEtaje || floors == numarEtaje) &&
            (!numarCamere || rooms == numarCamere) &&
            (!suprafata || area == suprafata) &&
            (!pretDeLa || price >= pretDeLa) &&
            (!pretPanaLa || price <= pretPanaLa);

        house.style.display = matchesFilters ? 'block' : 'none';
    });
}

// Инициализация отображения всех домов при загрузке
filterHouses('all', document.querySelector('.filter-button.active'));