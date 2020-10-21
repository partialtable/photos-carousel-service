const faker = require('faker');

const writer = require('csv-writer').createObjectCsvWriter;

const ethnics = ['Chinese', 'Itaian', 'Mexican', 'American', 'Breakfast', 'Thai', 'Indian', 'Dumpling', 'Vegetarian', 'French', 'Barbecue', 'Greek', 'Fusion', 'Japanese', 'Korean', 'Vietnamese', 'Soul', 'Middle Eastern', 'Street', 'French', 'Spanish'];

const csvList = (start, end) => {
  const records = [];
  for (let i = start; i <= end && i < ethnics.length - 1; i += 1) {
    const record = {
      categories: faker.random.arrayElement(ethnics),
    };
    records.push(record);
  }
  return records;
};

const csvWriter = writer({
  path: './postgreSQL/CSV/categoriesTableCsv/categoriesTable.csv',
  header: [
    { id: 'categories', title: 'categories' },
  ],
});

const genStartEnd = csvList(1, 1000000);

csvWriter.writeRecords(genStartEnd)
  .then(() => {
    console.log('CSV file created....');
  })
  .catch(() => {
    console.log('Error while creating csv file');
  });
