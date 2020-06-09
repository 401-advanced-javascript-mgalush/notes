'use strict';

function Notes() {
  
}

Notes.prototype.execute = function(operation) {
  if (!operation) {
    console.error('error: operation not specified');
    return;
  } 
  if (operation.action === 'add') {
    this.add(operation.payload);
  } else {
    console.error('error: unknown operation');
  }
}

Notes.prototype.add = function(payload) {
  if (payload) {
    console.log(`adding ${payload}`);
  } else {
    console.error('error: cannot add empty note')
  }
}

module.exports = Notes;
