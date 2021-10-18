// this file generates a range of mock listings and saves them to a new file in sample-data/
const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const path = require('path');

var writer = csvWriter();

// assign supplied args to constants
const myArgs = process.argv.slice(2);
const start = parseInt(myArgs[0]) || 1;
const end = parseInt(myArgs[1]) || 1000;

//define utility functions and constants for mocking Listing class
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 2
  },
  wordsPerSentence: {
    max: 12,
    min: 6
  }
});

const randomLocation = ['Los Angeles, California', 'Long Beach, California', 'Brooklyn, New York', 'Cave Creek, Arizona', 'Napa, California', 'Boston, Massachusetts', 'Naples, Florida', 'Moscow, Russia', 'Boise, Idaho'];

const randomRoomType = ['Entire apartment', 'Entire home', 'Private room', 'Shared room', 'Entire guesthouse', 'Entire cottage'];

const generateRandomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomRating = function() {
  var precision = 100;
  var randomNum = Math.floor(Math.random() * (5 * precision - 3 * precision) + 3 * precision) / (1 * precision);
  return randomNum;
};

// define Listing class
class Listing {
  constructor(id) {
    this.listing_id = id;
    this.host_id = id;
    this.headline = lorem.generateSentences(1) + id.toString();
    this.price = generateRandomInteger(50, 299);
    this.type_of_room = randomRoomType[Math.round(Math.random() * (randomRoomType.length - 1))];
    this.stars = generateRandomRating();
    this.reviews = Math.round(Math.random() * 1000);
    this.superhost = Math.random() >= 0.5;
    this.sleep_arrangements = JSON.stringify({
      bedroom1: {
          exists: true,
          queenBed: 1
        },
        bedroom2: {
          exists: true,
          fullBed: 1,
        },
        bedroom3: {
          exists: Math.random() >= 0.9,
          fullBed: 1,
        },
        commonRooms: {
          exists: Math.random() >= 0.9,
          sofaBed: 1,
        }
    });
    this.location = randomLocation[Math.round(Math.random() * (randomLocation.length - 1))];
    this.total_beds = generateRandomInteger(1, 4);
    this.guest_capacity = this.total_beds + 2;
    this.total_bedrooms = generateRandomInteger(1, 3);
    this.total_baths = generateRandomInteger(1, 3);
    this.description_text = lorem.generateParagraphs(3);
    this.top_features = JSON.stringify({
        entireHome: Math.random() >= 0.6,
        selfCheckIn: Math.random() >= 0.6,
        sparklingClean: Math.random() >= 0.3,
        freeCancel: Math.random() >= 0.3,
        greatLocation: Math.random() >= 0.6
    });
    this.key_amenities = JSON.stringify({
      kitchen: Math.random() >= 0.6,
      wifi: Math.random() >= 0.3,
      cableTv: Math.random() >= 0.6,
      fireplace: Math.random() >= 0.8,
      washer: Math.random() >= 0.6,
      dryer: Math.random() >= 0.6,
      iron: Math.random() >= 0.6,
      laptopFriendlyWorkspace: Math.random() >= 0.6,
      tv: Math.random() >= 0.6,
      hangers: Math.random() >= 0.6,
      hairDryer: Math.random() >= 0.6,
      essentials: Math.random() >= 0.6,
      freeParkOnPrem: Math.random() >= 0.6,
      heating: Math.random() >= 0.3,
      airCon: Math.random() >= 0.3,
      co2Alarm: Math.random() >= 0.6,
      gym: Math.random() >= 0.6,
      hotTub: Math.random() >= 0.8,
      pool: Math.random() >= 0.8
    });
    this.all_amenities = JSON.stringify({
      basic: {
        wifi: Math.random() >= 0.6,
        cableTv: Math.random() >= 0.6,
        fireplace: Math.random() >= 0.6,
        washer: Math.random() >= 0.6,
        dryer: Math.random() >= 0.6,
        iron: Math.random() >= 0.6,
        laptopFriendlyWorkspace: Math.random() >= 0.6,
        tv: Math.random() >= 0.6,
        essentials: Math.random() >= 0.6,
        heating: Math.random() >= 0.6,
        ethernet: Math.random() >= 0.6,
        airCon: Math.random() >= 0.6,
        hotWater: true
      },
      familyFeatures: {
        outletCovers: Math.random() >= 0.6,
        bathtub: Math.random() >= 0.6,
        childDishes: Math.random() >= 0.8,
        packAndPlay: Math.random() >= 0.8,
        highChair: Math.random() >= 0.8,
        crib: Math.random() >= 0.8,
        booksAndToys: Math.random() >= 0.8,
        roomDark: Math.random() >= 0.6
      },
      facilities: {
        freeStreetPark: Math.random() >= 0.6,
        freeParkOnPrem: Math.random() >= 0.6,
        paidParkOnPrem: Math.random() >= 0.6,
        paidParkOffPrem: Math.random() >= 0.6,
        pool: Math.random() >= 0.6,
        gym: Math.random() >= 0.6,
        hotTub: Math.random() >= 0.6,
        singleLevel: Math.random() >= 0.8
      },
      dining: {
        kitchen: Math.random() >= 0.6,
        cookingBasics: Math.random() >= 0.6,
        oven: Math.random() >= 0.6,
        refrigerator: Math.random() >= 0.6,
        microwave: Math.random() >= 0.6,
        dishwasher: Math.random() >= 0.6,
        dishes: Math.random() >= 0.6,
        coffeeMaker: Math.random() >= 0.6,
        stove: Math.random() >= 0.6
      },
      guestAccess: {
        hostGreets: Math.random() >= 0.6,
        lockbox: Math.random() >= 0.6,
        privateEntrance: Math.random() >= 0.6,
        keypad: Math.random() >= 0.6
      },
      logistics: {
        longtermAllowed: Math.random() >= 0.7,
        luggageDropoff: Math.random() >= 0.6
      },
      bedAndBath: {
        hangers: Math.random() >= 0.6,
        hairDryer: Math.random() >= 0.6,
        shampoo: Math.random() >= 0.4,
        bedLinens: Math.random() >= 0.1,
        extraBedding: Math.random() >= 0.8,
        bedroomLock: true
      },
      outdoor: {
        bbqGrill: Math.random() >= 0.8,
        gardenYard: Math.random() >= 0.7,
        patioBalcony: Math.random() >= 0.5,
      },
      safetyFeatures: {
        fireExting: Math.random() >= 0.6,
        co2Alarm: Math.random() >= 0.2,
        smokeAlarm: true,
        firstAidKit: Math.random() >= 0.7,
      },
      notIncluded: {
        privateEntrance: Math.random() >= 0.8,
        washer: Math.random() >= 0.8,
        hairDryer: Math.random() >= 0.8,
        co2Alarm: Math.random() >= 0.8,
        kitchen: Math.random() >= 0.8
      }
    });
  }
}

// instantiate new Listings with a defined ranged of listingId's
const makeMocks = (rangeStart, rangeEnd) => {
  if (!rangeStart || !rangeEnd) {
    return new Error(`Please invoke this script with starting and ending ids, e.g. 'npm run db:mocks 1 1000' `);
  }
  const dataDirName = path.join(__dirname, '/seedScripts/sample-data');

  writer.pipe(fs.createWriteStream(`${dataDirName}/${rangeStart}-${rangeEnd}.csv`));
  for (let i = rangeStart; i <= rangeEnd; i++) {
    let newListing = new Listing(i);
    writer.write(newListing);
  }
  writer.end();
  console.log(`wrote ${rangeEnd - rangeStart + 1} rows to csv file`);
};

// invoke function with supplied args
makeMocks(start, end);
