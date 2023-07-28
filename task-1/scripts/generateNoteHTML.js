function generateNoteHTML(note, index) {
    return `
      <tr>
        <td><i class="fas fa-${note.icon}"></i>${note.name}</td>
        <td>${note.created}</td>
        <td>${note.category}</td>
        <td>${note.content}</td>
        <td>${note.dates}</td>
        <td>
          <i class="fas fa-edit edit-note-btn" data-index="${index}"></i>
          <i class="fas fa-archive"></i>
          <i class="fas fa-trash delete-note-btn" data-index="${index}"></i>
        </td>
      </tr>
    `;
}

export default generateNoteHTML;
