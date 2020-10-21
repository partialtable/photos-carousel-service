const faker = require('faker');

const writer = require('csv-writer').createObjectCsvWriter;

const csvList = (start, end) => {
  const records = [];
  for (let i = start; i <= end; i += 1) {
    const record = {
      url: faker.image.imageUrl(),
      description: faker.commerce.productName(),
      userid: Math.floor(Math.random() * (10000000 - 1)) + 1,
      categoryid: Math.floor(Math.random() * (12 - 1)) + 1,
      restaurantid: Math.floor(Math.random() * (1249995 - 1)) + 1,
    };
    records.push(record);
  }
  return records;
};

const csvWriter = writer({
  path: './photosTable5.csv',
  header: [
    { id: 'url', title: 'url' },
    { id: 'description', title: 'description' },
    { id: 'userid', title: 'userid' },
    { id: 'categoryid', title: 'categoryid' },
    { id: 'restaurantid', title: 'restaurantid' },
  ],
});

const genStartEnd = csvList(1, 2000000);

csvWriter.writeRecords(genStartEnd)
  .then(() => {
    console.log('CSV file created....');
  })
  .catch((err) => {
    console.log('Error while creating csv file', err);
  });
