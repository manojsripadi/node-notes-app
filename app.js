const validator = require('validator'); // used for validations like checking email or urls etc..
const yargs = require('yargs'); // used to give us the args in meaningful manner like "{title="this is to buy"}"
const chalk = require('chalk'); // used to transform data like colors chalk.green('turn me to green');
const notes = require('./notes.js');


yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'adding a new note',
    builder: {                       // this talks about the parameter properties like defineproperty in javascript
        title: {
            describe:'Note a title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        console.log('title:' + chalk.green(argv.title), 'desc:'+ chalk.green(argv.body));
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'removing a new note',
    builder: {
        title:{
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
           notes.removeNote(argv.title)
    }
});

yargs.command({
    command:'list',
    describe:'list down the animals',
    handler: () => {
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    describe:'read the newspaper',
    builder: {
        title:{
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
           notes.readNote(argv.title);
    }
})

yargs.argv;
// console.log(yargs.argv);





// const utils = require('./utils.js');
// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'Ny name is Manoj.');
// console.log('written in notes.txt');
// fs.appendFileSync('notes.txt', 'Last name is Kumar');
// const result = utils.add(1,2);
// console.log(validator.isEmail('@examle.com'));
// console.log(chalk.blue('Hello World!!'));
// if(process.argv[2] === 'add') {
//     console.log('adding notes')
// }
