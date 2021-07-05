const faker = require('faker');
const data = []

for(let i = 0; i < 10; i++) {
    const obj = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber()
    };
    data.push(obj);
}
console.log(JSON.stringify(data));