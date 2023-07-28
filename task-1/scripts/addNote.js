import notes from '../data/notes.js';
import { closeModal } from './noteModal.js';
import renderNotes from './renderNotes.js';

// Функція для збереження замітки
function addNote() {
    const name = document.getElementById('note-name').value;
    const category = document.getElementById('note-category').value;
    const content = document.getElementById('note-content').value;
    const created = new Date().toLocaleDateString(); // Поточна дата в форматі 'DD.MM.YYYY'

    // Створення об'єкта з збереженими даними
    const newNote = {
        icon: getIconByCategory(category),
        name: name,
        created: created,
        category: category,
        content: content,
        dates: '', // Пустий рядок поки що, додайте функціонал для отримання дат
    };
    console.log(notes);
    // Додавання замітки до масиву notes
    notes.push(newNote);
    console.log(notes);
    // Закриття модального вікна
    closeModal();

    // Оновлення відображення таблиці заміток
    renderNotes();
}

// Функція для визначення іконки за категорією
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

export default addNote;
