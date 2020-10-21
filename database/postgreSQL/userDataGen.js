const faker = require('faker');

const writer = require('csv-writer').createObjectCsvWriter;

const csvList = (start, end) => {
  const records = [];
  for (let i = start; i <= end; i += 1) {
    const record = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: faker.internet.userName(),
      avatarpic: faker.image.imageUrl(),
    };
    records.push(record);
  }
  return records;
};

const csvWriter = writer({
  path: './postgreSQL/CSV/usersTableCsv/userTable40.csv',
  header: [
    { id: 'firstname', title: 'firstname' },
    { id: 'lastname', title: 'lastname' },
    { id: 'username', title: 'username' },
    { id: 'avatarpic', title: 'avatarpic' },
  ],
});

const genStartEnd = csvList(1, 250000);

csvWriter.writeRecords(genStartEnd)
  .then(() => {
    console.log('CSV file created....');
  })
  .catch(() => {
    console.log('Error while creating csv file');
  });
