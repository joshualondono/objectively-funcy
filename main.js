// Your code here.
const getFirstName = function(obj){
  return obj.firstName
}

const getLastName = function(obj){
  return obj.lastName
}

const getFullName = function(obj){

  return obj.firstName + ' ' + obj.lastName
}

const setFirstName = function(obj, str){
  obj.firstName = str
  return obj
}

const setAge = function(obj, num){
  obj.age = num
  return obj
}

const giveBirthday = function(obj){
  obj.age = obj.age + 1
  return obj
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
