'use strict';

const Input = require('./lib/input');
const Notes = require('./lib/notes');

const input = new Input();

const notes = new Notes();

notes.execute(input.note);