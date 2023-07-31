import notes from '../data/notes.js';
import renderNotes from './renderNotes.js';
import { getIconByCategory } from './addNote.js';

function generateSummaryTable() {
    const summaryTableBody = document.getElementById('summary-table-body');
    const categories = ['Task', 'Idea', 'Random Thought', 'Quote'];

    // Лічильники для активних і архівованих заміток для кожної категорії
    const counts = {};

    // Ініціалізуємо лічильники заміток для кожної категорії
    categories.forEach((category) => {
        counts[category] = { active: 0, archived: 0 };
    });

    // Підрахунок активних і архівованих заміток
    notes.forEach((note) => {
        if (note.category in counts) {
            note.archived
                ? counts[note.category].archived++
                : counts[note.category].active++;
        }
    });

    // Генерування рядків таблиці зі статистикою
    const summaryRows = categories.map((category) => {
        const { active, archived } = counts[category];
        const icon = getIconByCategory(category);

        return `
        <tr>
          <td><div class="circle-icon">
          <i class="fas fa-${icon}"></i>
        </div></td>
          <td>${category}</td>
          <td>${active}</td>
          <td>${archived}</td>
        </tr>
      `;
    });

    // Вставка рядків у вміст таблиці
    summaryTableBody.innerHTML = summaryRows.join('');

    renderNotes();
}

// Виклик функції для створення таблиці зі статистикою при завантаженні сторінки або зміні даних

export default generateSummaryTable;
