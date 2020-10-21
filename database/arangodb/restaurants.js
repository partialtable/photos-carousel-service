const faker = require('faker');

const writer = require('csv-writer').createObjectCsvWriter;

const cuisine = ['drinks', 'food', 'menu', 'appetizer'];

const generatePhotos = () => {
  const photos = [];
  for (let i = 0; i < 10; i += 1) {
    const obj = {};
    obj.photo_id = (1 + Math.floor(Math.random() * 49));
    obj.description = faker.lorem.paragraph();
    obj.url = faker.image.imageUrl();
    obj.category = faker.random.arrayElement(cuisine);
    obj.userFullName = faker.name.findName();
    obj.username = faker.internet.userName();
    obj.userProfileImg = faker.image.people();
    photos.push(obj);
  }
  return JSON.stringify(photos);
};

let restaurant_id = 4050000;

const csvList = (start, end) => {
  const records = [];
  for (let i = start; i <= end; i += 1) {
    const record = {
      _key: restaurant_id + 1,
      name: faker.company.companyName(0),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      stars: faker.random.number(5),
      cuisine: faker.random.arrayElement(['Chinese', 'Itaian', 'Mexican', 'American', 'Breakfast', 'Thai', 'Indian', 'Dumpling', 'Vegetarian', 'French', 'Barbecue', 'Greek', 'Fusion', 'Japanese', 'Korean', 'Vietnamese', 'Soul', 'Middle Eastern', 'Street']),
      photos: generatePhotos(),
    };
    restaurant_id += 1;
    records.push(record);
  }
  return records;
};

const csvWriter = writer({
  path: 'restaurantDoc80.csv',
  header: [
    { id: '_key', title: '_key' },
    { id: 'name', title: 'name' },
    { id: 'city', title: 'city' },
    { id: 'state', title: 'state' },
    { id: 'country', title: 'country' },
    { id: 'stars', title: 'stars' },
    { id: 'cuisine', title: 'cuisine' },
    { id: 'photos', title: 'photos' },
  ],
});

const genStartEnd = csvList(1, 50000);

csvWriter.writeRecords(genStartEnd)
  .then(() => {
    console.log('CSV file created....');
  })
  .catch((err) => {
    console.log('Error while creating csv file', err);
  });
