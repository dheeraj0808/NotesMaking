class Note {
    constructor() {
        this.notes = [];
    }

    getAll() {
        return this.notes;
    }

    create(noteData) {
        const note = {
            id: Date.now().toString(),
            ...noteData,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.notes.push(note);
        return note;
    }

    update(index, updateData) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index] = { 
                ...this.notes[index], 
                ...updateData, 
                updatedAt: new Date() 
            };
            return this.notes[index];
        }
        return null;
    }

    delete(index) {
        if (index >= 0 && index < this.notes.length) {
            const deleted = this.notes.splice(index, 1)[0];
            return deleted;
        }
        return null;
    }
}

module.exports = new Note();
