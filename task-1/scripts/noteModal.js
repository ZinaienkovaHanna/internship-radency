function openModal() {
    const modal = document.getElementById('create-note-modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('create-note-modal');
    modal.style.display = 'none';

    document.getElementById('note-name').value = '';
    document.getElementById('note-category').value = 'Task';
    document.getElementById('note-content').value = '';
}

export { openModal, closeModal };
