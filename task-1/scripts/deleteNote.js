import notes from '../data/notes.js';
import renderNotes from './renderNotes.js';

function deleteNote(index) {
    // Видалення замітки з масиву за індексом
    notes.splice(index, 1);

    // Оновлення відображення таблиці заміток
    renderNotes();
}

export default deleteNote;
