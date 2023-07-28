import renderNotes from './renderNotes.js';
import { openModal, closeModal } from './noteModal.js';
import addNote from './addNote.js';
import editNote from './editNote.js';
import deleteNote from './deleteNote.js';

renderNotes();

// main.js

// Обробник події для кнопки "Create Note"
document.getElementById('create-note-btn').addEventListener('click', openModal);

// Обробник події для закриття модального вікна при натисканні на "×"
document
    .getElementById('close-modal-btn')
    .addEventListener('click', closeModal);

// Обробник події для кнопки "Save Note"
document.getElementById('save-note-btn').addEventListener('click', addNote);

document
    .getElementById('notes-table-body')
    .addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-note-btn')) {
            const index = event.target.getAttribute('data-index');
            editNote(index);
        }

        if (event.target.classList.contains('delete-note-btn')) {
            const index = event.target.getAttribute('data-index');
            deleteNote(index);
        }
    });
