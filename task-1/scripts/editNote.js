import { openModal, closeModal } from './noteModal.js';
import notes from '../data/notes.js';
import addNote from './addNote.js';
import renderNotes from './renderNotes.js';

function editNote(index) {
    const note = notes[index];

    // Заповнення інпутів модального вікна значеннями з замітки
    document.getElementById('note-name').value = note.name;
    document.getElementById('note-category').value = note.category;
    document.getElementById('note-content').value = note.content;

    // Встановлення обробника події для кнопки "Save Note" замість обробника для створення нової замітки
    const saveNoteBtn = document.getElementById('save-note-btn');
    saveNoteBtn.removeEventListener('click', addNote); // Видаляємо попередній обробник
    saveNoteBtn.addEventListener('click', () => saveEditedNote(index)); // Встановлюємо новий обробник

    // Відкриття модального вікна
    openModal();
}

// Функція для збереження змінених даних у замітці
function saveEditedNote(index) {
    // Отримання змінених значень з інпутів
    const name = document.getElementById('note-name').value;
    const category = document.getElementById('note-category').value;
    const content = document.getElementById('note-content').value;
    const created = new Date().toLocaleDateString(); // Поточна дата в форматі 'DD.MM.YYYY'

    // Зміна значень в об'єкті замітки
    const editedNote = notes[index];
    editedNote.name = name;
    editedNote.category = category;
    editedNote.content = content;
    editedNote.created = created;

    // Закриття модального вікна
    closeModal();

    // Оновлення відображення таблиці заміток
    renderNotes();
}

export default editNote;
