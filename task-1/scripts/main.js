import renderNotes from './renderNotes.js';
import { openModal, closeModal } from './noteModal.js';
import validate from './validate.js';
import { openEditModal, saveNote } from './editNote.js';
import { getNoteDataFromForm } from './addNote.js';
import deleteNote from './deleteNote.js';
import toggleNote from './archiveNote.js';
import generateSummaryTable from './generateSummaryTable.js';

renderNotes();
generateSummaryTable();

const activeNoteBtn = document.querySelector('#active-note-btn');
const archivedNoteBtn = document.querySelector('#archived-note-btn');
const createNoteBtn = document.querySelector('#create-note-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const saveNoteBtn = document.querySelector('#save-note-btn');
const notesTableBody = document.querySelector('#notes-table-body');

activeNoteBtn.addEventListener('click', () => renderNotes('active'));
archivedNoteBtn.addEventListener('click', () => renderNotes('archived'));

createNoteBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

saveNoteBtn.addEventListener('click', () => {
    const noteData = getNoteDataFromForm();

    if (validate(noteData)) {
        saveNote();
        generateSummaryTable();
    }
});

notesTableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-note-btn')) {
        const id = event.target.getAttribute('data-id');
        openEditModal(id);
    }

    if (event.target.classList.contains('archive-note-btn')) {
        const id = event.target.getAttribute('data-id');
        toggleNote(id);
        generateSummaryTable();
    }

    if (event.target.classList.contains('delete-note-btn')) {
        const id = event.target.getAttribute('data-id');
        deleteNote(id);
        generateSummaryTable();
    }
});
