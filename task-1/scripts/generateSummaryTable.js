import notes from '../data/notes.js';
import renderNotes from './renderNotes.js';
import { getIconByCategory } from './addNote.js';

function generateSummaryTable() {
    const summaryTableBody = document.getElementById('summary-table-body');
    const categories = ['Task', 'Idea', 'Random Thought', 'Quote'];

    const counts = {};

    categories.forEach((category) => {
        counts[category] = { active: 0, archived: 0 };
    });

    notes.forEach((note) => {
        if (note.category in counts) {
            note.archived
                ? counts[note.category].archived++
                : counts[note.category].active++;
        }
    });

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

    summaryTableBody.innerHTML = summaryRows.join('');

    renderNotes();
}

export default generateSummaryTable;
