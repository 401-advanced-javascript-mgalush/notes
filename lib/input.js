'use strict';

const minimist = require('minimist');

function Input() {
  const args = minimist(process.argv.slice(2),{alias: {'a': 'add'}});
  this.note = this.getNote(args.a);
}

Input.prototype.getNote = function(note) {
  if (typeof note === 'string' && note.length) {
    return { action : 'add', payload : note };
  }
}

module.exports = Input;
