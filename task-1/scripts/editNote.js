import { openModal, closeModal } from './noteModal.js';
import notes from '../data/notes.js';
import {
    addNote,
    getIconByCategory,
    extractDatesFromContent,
} from './addNote.js';
import renderNotes from './renderNotes.js';

let editingId = null;

function openEditModal(id) {
    editingId = id;
    fillEditModal(id);
    openModal();
}

function fillEditModal(id) {
    const note = notes.find((note) => note.id === id);
    document.querySelector('#note-name').value = note.name;
    document.querySelector('#note-category').value = note.category;
    document.querySelector('#note-content').value = note.content;
}

function saveNote() {
    const name = document.querySelector('#note-name').value;
    const category = document.querySelector('#note-category').value;
    const content = document.querySelector('#note-content').value;

    if (editingId !== null) {
        const editedNote = notes.find((note) => note.id === editingId);
        editedNote.name = name;
        editedNote.category = category;
        editedNote.content = content;
        editedNote.icon = getIconByCategory(category);
        editedNote.dates = extractDatesFromContent(content);
    } else {
        addNote();
    }

    closeModal();

    renderNotes();

    editingId = null;
}

export { openEditModal, saveNote };
