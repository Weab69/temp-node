const names = require('./module_names')
const sayHi = require('./module_basics')
require('./add_vals')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)