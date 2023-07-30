function generateNoteHTML(note, index) {
    return `
      <tr>
        <td class="circle-icon-flex">
          <div class="circle-icon">
            <i class="fas fa-${note.icon}"></i>
          </div>${note.name}
        </td>
        <td>${note.created}</td>
        <td>${note.category}</td>
        <td>${note.content}</td>
        <td>${note.dates}</td>
        <td>
          <i class="fas fa-edit edit-note-btn note" data-index="${index}"></i>
          <i class="fas fa-archive note"></i>
          <i class="fas fa-trash delete-note-btn note" data-index="${index}"></i>
        </td>
      </tr>
    `;
}

export default generateNoteHTML;
