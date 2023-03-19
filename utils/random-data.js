const faker = require('faker');

function fakeFirstName() {
    return faker.name.firstName();
}

function fakeLastName() {
    return faker.name.lastName();
}

function fakeEmail() {
    return faker.internet.email();
}

function fakePassword() {
    return faker.internet.password();
}

function fakeRandomNum(min,max){
    return faker.datatype.number({ min: min, max: max});
}

function fakeText(){
    return faker.lorem.sentence();
}

module.exports = {
    fakeFirstName,
    fakeLastName,
    fakeEmail,
    fakePassword,
    fakeRandomNum,
    fakeText
}