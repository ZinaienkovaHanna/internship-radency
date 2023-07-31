import notes from '../data/notes.js';
import getNoteDataFromForm from './main.js';
import { closeModal } from './noteModal.js';
import renderNotes from './renderNotes.js';

// Функція для збереження замітки
function addNote() {
    const noteData = getNoteDataFromForm();

    // Створення об'єкта з збереженими даними
    const newNote = {
        icon: getIconByCategory(noteData.category.value),
        name: noteData.name.value,
        created: new Date().toLocaleDateString(),
        category: noteData.category.value,
        content: noteData.content.value,
        dates: '', // Пустий рядок поки що, додайте функціонал для отримання дат
    };
    // Додавання замітки до масиву notes
    notes.push(newNote);
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

export { addNote, getIconByCategory };
