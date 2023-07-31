function generateNoteHTML(note) {
    const isArchived = note.archived ? 'isArchived' : '';

    return `
    <tr class="${isArchived}">
      <td >
        <div class="circle-icon">
          <i class="fas fa-${note.icon}"></i>
        </div>
      </td>
      <td >${note.name}</td> 
      <td>${note.created}</td>
      <td>${note.category}</td>
      <td>${note.content}</td>
      <td>${note.dates}</td>
      <td>
        <i class="fas fa-edit edit-note-btn note" data-id="${note.id}"></i>
        <i class="fas fa-archive note archive-note-btn" data-id="${note.id}"></i>
        <i class="fas fa-trash delete-note-btn note" data-id="${note.id}"></i>
      </td>
    </tr>
  `;
}

export default generateNoteHTML;
