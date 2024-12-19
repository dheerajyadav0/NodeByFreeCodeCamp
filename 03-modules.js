// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//require
const names = require('./04-names')
// console.log(names);

const sayHi = require('./05-utils')
// console.log(sayHi);

require('./07-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
