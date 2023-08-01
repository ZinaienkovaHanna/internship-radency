import notes from '../data/notes.js';
import renderNotes from './renderNotes.js';

function toggleNote(id) {
    const note = notes.find((note) => note.id === id);
    note.archived = !note.archived;

    renderNotes();
}
export default toggleNote;
