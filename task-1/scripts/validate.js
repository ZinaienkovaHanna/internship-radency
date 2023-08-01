function validate(noteData) {
    const { name, content } = noteData;

    try {
        if (!name.value) {
            name.classList.add('highlight');
            setTimeout(function () {
                name.classList.remove('highlight');
            }, 500);
            throw new Error('Name is required');
        }

        if (!content.value) {
            content.classList.add('highlight');
            setTimeout(function () {
                content.classList.remove('highlight');
            }, 500);
            throw new Error('Content is required');
        }

        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

export default validate;
