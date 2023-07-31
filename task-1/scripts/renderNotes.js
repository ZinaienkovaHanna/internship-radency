import notes from '../data/notes.js';
import generateNoteHTML from './generateNoteHTML.js';

function renderNotes() {
    const notesTableBody = document.querySelector('#notes-table-body');
    const notesHTML = notes.map((note) => generateNoteHTML(note)).join('');
    notesTableBody.innerHTML = notesHTML;
}

export default renderNotes;
