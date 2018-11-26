var faker = require('faker');
var _ = require('lodash');
var data = [];
const jsonfile = require('jsonfile');
const file = './tmp/dataFontThai.json';
for (let i = 0; i <= 100; i++) {
    var obj = _.extend({
        name: faker.fake('{{name.firstName}}'),
        number: faker.random.number(),
        gender: i % 2 == 0 ? 'ชาย' : 'หญิง',
        rating: i,
        col: faker.commerce.color(),
        location: faker.address.state(),
        date: faker.date.recent(),
        currency: faker.finance.amount()
    });
    data[i] = obj;
}
json = _.extend({}, {
    data: data
});
jsonfile.writeFile(file, json, (err) => {
    if (err) console.error(err);
});