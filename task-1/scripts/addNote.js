import notes from '../data/notes.js';
import { closeModal } from './noteModal.js';
import renderNotes from './renderNotes.js';

function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

function getNoteDataFromForm() {
    return {
        name: document.getElementById('note-name'),
        category: document.getElementById('note-category'),
        content: document.getElementById('note-content'),
    };
}

function addNote() {
    const noteData = getNoteDataFromForm();

    const dates = extractDatesFromContent(noteData.content.value);

    const newNote = {
        id: generateUniqueId(),
        icon: getIconByCategory(noteData.category.value),
        name: noteData.name.value,
        created: new Date().toLocaleDateString(),
        category: noteData.category.value,
        content: noteData.content.value,
        dates: dates,
    };

    notes.push(newNote);

    closeModal();

    renderNotes();
}

function getIconByCategory(category) {
    switch (category) {
        case 'Task':
            return 'tasks';
        case 'Random Thought':
            return 'comment';
        case 'Idea':
            return 'lightbulb';
        case 'Quote':
            return 'quote-right';
        default:
            return '';
    }
}

function extractDatesFromContent(content) {
    const regex =
        /\b\d{1,2}\/\d{1,2}\/\d{4}\b|\b\d{2}\.\d{2}\.\d{4}\b|\b\w+ \d{1,2}, \d{4}\b/g;
    const datesArray = content.match(regex);
    return datesArray ? datesArray.join(', ') : '';
}

export {
    addNote,
    getIconByCategory,
    extractDatesFromContent,
    getNoteDataFromForm,
};
