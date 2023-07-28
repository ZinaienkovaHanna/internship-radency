import notes from '../data/notes.js';
import generateNoteHTML from './generateNoteHTML.js';
import editNote from './editNote.js';

function renderNotes() {
    const notesTableBody = document.querySelector('#notes-table-body');
    const notesHTML = notes
        .map((note, index) => generateNoteHTML(note, index))
        .join('');
    notesTableBody.innerHTML = notesHTML;

    // Додаємо обробник події для кожної кнопки "Edit"
    const editBtns = document.querySelectorAll('.edit-note-btn');
    editBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => editNote(index));
    });
}

export default renderNotes;
