import { openModal, closeModal } from './noteModal.js';
import notes from '../data/notes.js';
import { addNote, getIconByCategory } from './addNote.js';
import renderNotes from './renderNotes.js';

let editingIndex = null;

function openEditModal(index) {
    editingIndex = index;
    fillEditModal(index);
    openModal();
}

function fillEditModal(index) {
    const note = notes[index];
    document.getElementById('note-name').value = note.name;
    document.getElementById('note-category').value = note.category;
    document.getElementById('note-content').value = note.content;
}

// Функція для збереження  даних у замітці
function saveNote() {
    // Отримання змінених значень з інпутів
    const name = document.getElementById('note-name').value;
    const category = document.getElementById('note-category').value;
    const content = document.getElementById('note-content').value;
    const created = new Date().toLocaleDateString(); // Поточна дата в форматі 'DD.MM.YYYY'

    // Зміна значень в об'єкті замітки
    if (editingIndex !== null) {
        const editedNote = notes[editingIndex];
        editedNote.name = name;
        editedNote.category = category;
        editedNote.content = content;
        editedNote.icon = getIconByCategory(category);
    } else {
        // Якщо індекс редагованої замітки === null, то це нова замітка
        addNote();
    }

    // Закриття модального вікна
    closeModal();

    // Оновлення відображення таблиці заміток
    renderNotes();

    // Очищаємо індекс редагованої замітки
    editingIndex = null;
}

export { openEditModal, saveNote };
