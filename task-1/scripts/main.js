import renderNotes from './renderNotes.js';
import { openModal, closeModal } from './noteModal.js';
import { openEditModal, saveNote } from './editNote.js';
import { getNoteDataFromForm } from './addNote.js';
import deleteNote from './deleteNote.js';
import toggleNote from './archiveNote.js';

renderNotes();

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

    return name.value && content.value;
}

document.getElementById('create-note-btn').addEventListener('click', openModal);

document
    .getElementById('close-modal-btn')
    .addEventListener('click', closeModal);

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
            const id = event.target.getAttribute('data-id');
            openEditModal(id);
        }

        if (event.target.classList.contains('archive-note-btn')) {
            const id = event.target.getAttribute('data-id');
            toggleNote(id);
        }

        if (event.target.classList.contains('delete-note-btn')) {
            const id = event.target.getAttribute('data-id');
            deleteNote(id);
        }
    });
