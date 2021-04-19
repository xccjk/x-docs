let name = 'xcc'
let obj = { name: 'xcc', age: 20 }

function setName() {
  name = 'xcc1'
}

function setName1() {
  obj.name = 'xcc2'
}



module.exports = {
  name,
  info: obj,
  setName,
  setName1
}