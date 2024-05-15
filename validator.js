import validator from 'validator'
var email='test@gmail.com'
console.log(validator.isEmail(email))
var email1='@test'
console.log(validator.isEmail(email1))
