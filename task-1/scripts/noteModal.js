// Функція для відкриття модального вікна
function openModal() {
    const modal = document.getElementById('create-note-modal');
    modal.style.display = 'block';
}

// Функція для закриття модального вікна
function closeModal() {
    const modal = document.getElementById('create-note-modal');
    modal.style.display = 'none';

    // Очищення значень інпутів
    document.getElementById('note-name').value = '';
    document.getElementById('note-category').value = '';
    document.getElementById('note-content').value = '';
}

export { openModal, closeModal };
