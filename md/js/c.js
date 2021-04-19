let name = 'xcc'
let obj = { name: 'xcc', age: 20 }

function setName() {
  name = 'xcc1'
}

function setName1() {
  obj.name = 'xcc2'
}

export {
  name,
  obj,
  setName,
  setName1
}