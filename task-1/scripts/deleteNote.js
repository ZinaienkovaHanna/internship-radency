import notes from '../data/notes.js';
import renderNotes from './renderNotes.js';

function deleteNote(id) {
    const index = notes.findIndex((note) => note.id === id);
    notes.splice(index, 1);

    renderNotes();
}

export default deleteNote;
