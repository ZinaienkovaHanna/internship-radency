import generateNoteHTML from './generateNoteHTML.js';
import notes from '../data/notes.js';

function renderNotes(showOption = 'active') {
    const notesTableBody = document.querySelector('#notes-table-body');

    const filteredNotes = notes.filter((note) => {
        if (showOption === 'active') {
            return !note.archived;
        } else if (showOption === 'archived') {
            return note.archived;
        }
    });

    const notesHTML = filteredNotes
        .map((note) => generateNoteHTML(note))
        .join('');
    notesTableBody.innerHTML = notesHTML;
}

export default renderNotes;
