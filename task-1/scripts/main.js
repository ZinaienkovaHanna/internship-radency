import renderNotes from './renderNotes.js';
import { openModal, closeModal } from './noteModal.js';
import { openEditModal, saveNote } from './editNote.js';
import deleteNote from './deleteNote.js';

renderNotes();

// main.js
// Функція для отримання даних про замітку з форми
function getNoteDataFromForm() {
    return {
        name: document.getElementById('note-name'),
        category: document.getElementById('note-category'),
        content: document.getElementById('note-content'),
    };
}

// Функція для підсвічування порожніх полів червоним фокусом
function validate(noteData) {
    const { name, content } = noteData;

    if (!name.value) {
        name.classList.add('highlight');
        setTimeout(function () {
            name.classList.remove('highlight');
        }, 500);
    }

    if (!content.value) {
        content.classList.add('highlight');
        setTimeout(function () {
            content.classList.remove('highlight');
        }, 500);
    }

    // Повертаємо true, якщо обидва поля заповнені, і false, якщо хоча б одне з них порожнє
    return name.value && content.value;
}

// Обробник події для кнопки "Create Note"
document.getElementById('create-note-btn').addEventListener('click', openModal);

// Обробник події для закриття модального вікна при натисканні на "×"
document
    .getElementById('close-modal-btn')
    .addEventListener('click', closeModal);

// Обробник події для кнопки "Save Note"
document.getElementById('save-note-btn').addEventListener('click', () => {
    const noteData = getNoteDataFromForm();

    if (validate(noteData)) {
        saveNote();
    }
});

document
    .getElementById('notes-table-body')
    .addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-note-btn')) {
            const index = event.target.getAttribute('data-index');
            openEditModal(index);
        }

        if (event.target.classList.contains('delete-note-btn')) {
            const index = event.target.getAttribute('data-index');
            deleteNote(index);
        }
    });

export default getNoteDataFromForm;
