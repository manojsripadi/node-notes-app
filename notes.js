const fs = require('fs');
const chalk = require('chalk');

const addNote =  (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((elem) => elem.title === title);
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNote(notes);
    }
}

const saveNote = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));

const loadNotes =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const data = JSON.parse(dataBuffer.toString());
        return data
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
const notes = loadNotes();
const notesToKeep = notes.filter((elem,index) => {
    return elem.title !== title
});
saveNote(notesToKeep);
if(notes.length === notesToKeep.length){
    console.log(chalk.green.inverse('No Note removed'));
} else {
    console.log(chalk.red('Note removed'))
}
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.red.inverse('Your Titles:'))
    notes.forEach(note => {
        console.log(chalk.green(note.title));
    });
}

const readNote = title => {
    const notes = loadNotes();
    const getNote = notes.find((elem) => elem.title === title);
    if(getNote) {
        console.log(chalk.italic.green(getNote.title), getNote.body);
    } else {
        console.log(chalk.inverse.red('Note not Found'));
    }
}

module.exports = { addNote, removeNote, listNotes, readNote };