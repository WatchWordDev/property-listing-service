require('dotenv').config();
const S3_URL = process.env.S3_URL;

const featureData = [
  {
    idString: 'entireHome',
    featureTitle: 'Entire home',
    featureDescr: 'You’ll have the space to yourself.',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'selfCheckIn',
    featureTitle: 'Self check-in',
    featureDescr: 'Check yourself in with the lockbox.',
    iconUrl: S3_URL + '/assets/selfCheckIn.svg'
  },
  {
    idString: 'sparklingClean',
    featureTitle: 'Sparkling clean',
    featureDescr: '8 recent guests said this place was sparkling clean.',
    iconUrl: S3_URL + '/assets/sparklingClean.svg'
  },
  {
    idString: 'freeCancel',
    featureTitle: 'Free cancellation for 48 hours',
    featureDescr: 'After that, cancel up to 24 hours before check-in and get a full refund, minus the service fee.',
    iconUrl: S3_URL + '/assets/freeCancel.svg'
  },
  {
    idString: 'superHost',
    featureTitle: 'HOSTNAME is a Superhost',
    featureDescr: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
    iconUrl: S3_URL + '/assets/superHost.svg'
  },
  {
    idString: 'experiencedHost',
    featureTitle: 'Experienced host',
    featureDescr: 'HOSTNAME has 66 reviews for other places.',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'greatLocation',
    featureTitle: 'Great location',
    featureDescr: '95% of recent guests gave the location a 5-star rating.',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'wifi',
    featureTitle: 'Wifi',
    featureDescr: 'Continuous access in the listing',
    iconUrl: S3_URL + '/assets/wifi.svg'
  },
  {
    idString: 'cableTv',
    featureTitle: 'Cable TV',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/cableTv.svg'
  },
  {
    idString: 'fireplace',
    featureTitle: 'Indoor fireplace',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'washer',
    featureTitle: 'Washer',
    featureDescr: 'In the building, free or for a fee',
    iconUrl: S3_URL + '/assets/washer.svg'
  },
  {
    idString: 'dryer',
    featureTitle: 'Dryer',
    featureDescr: 'In the building, free or for a fee',
    iconUrl: S3_URL + '/assets/dryer.svg'
  },
  {
    idString: 'iron',
    featureTitle: 'Iron',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/iron.svg'
  },
  {
    idString: 'laptopFriendlyWorkspace',
    featureTitle: 'Laptop-friendly workspace',
    featureDescr: 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
    iconUrl: S3_URL + '/assets/laptopFriendlyWorkspace.svg'
  },
  {
    idString: 'tv',
    featureTitle: 'TV',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/tv.svg'
  },
  {
    idString: 'essentials',
    featureTitle: 'Essentials',
    featureDescr: 'Towels, bed sheets, soap, and toilet pap',
    iconUrl: S3_URL + '/assets/essentials.svg'
  },
  {
    idString: 'heating',
    featureTitle: 'Heating',
    featureDescr: 'Central heating or a heater in the listing',
    iconUrl: S3_URL + '/assets/heating.svg'
  },
  {
    idString: 'ethernet',
    featureTitle: 'Ethernet connection',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'airCon',
    featureTitle: 'Air conditioning',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/aircon.svg'
  },
  {
    idString: 'hotWater',
    featureTitle: 'Hot water',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'outletCovers',
    featureTitle: 'Outlet covers',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'bathtub',
    featureTitle: 'Bathtub',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'childDishes',
    featureTitle: 'Children’s dinnerware',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'packAndPlay',
    featureTitle: 'Pack ’n Play\/travel crib',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'highChair',
    featureTitle: 'High chair',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'crib',
    featureTitle: 'Crib',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'booksAndToys',
    featureTitle: 'Children’s books and toys',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'roomDark',
    featureTitle: 'Room-darkening shades',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'freeStreetPark',
    featureTitle: 'Free street parking',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'freeParkOnPrem',
    featureTitle: 'Free parking on premises',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/freeParkOnPrem.svg'
  },
  {
    idString: 'paidParkOnPrem',
    featureTitle: 'Paid parking on premises',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'paidParkOffPrem',
    featureTitle: 'Paid parking off premises',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'pool',
    featureTitle: 'Pool',
    featureDescr: 'Private or shared',
    iconUrl: S3_URL + '/assets/pool.svg'
  },
  {
    idString: 'gym',
    featureTitle: 'Gym',
    featureDescr: 'Free, in the building or nearby',
    iconUrl: S3_URL + '/assets/gym.svg'
  },
  {
    idString: 'hotTub',
    featureTitle: 'Hot tub',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'singleLevel',
    featureTitle: 'Single level home',
    featureDescr: 'No stairs in home',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'kitchen',
    featureTitle: 'Kitchen',
    featureDescr: 'Space where guests can cook their own meals',
    iconUrl: S3_URL + '/assets/kitchen.svg'
  },
  {
    idString: 'cookingBasics',
    featureTitle: 'Cooking basics',
    featureDescr: 'Pots and pans, oil, salt and pepper',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'oven',
    featureTitle: 'Oven',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'refrigerator',
    featureTitle: 'Refrigerator',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'microwave',
    featureTitle: 'Microwave',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'dishwasher',
    featureTitle: 'Dishwashe',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'dishes',
    featureTitle: 'Dishes and silverware',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'coffeeMaker',
    featureTitle: 'Coffee maker',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'stove',
    featureTitle: 'Stove',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'hostGreets',
    featureTitle: 'Host greets you',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'lockbox',
    featureTitle: 'Lockbox',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'privateEntrance',
    featureTitle: 'Private entrance',
    featureDescr: 'Separate street or building entrance',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'keypad',
    featureTitle: 'Keypad',
    featureDescr: 'Check yourself into the home with a door code',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'longtermAllowed',
    featureTitle: 'Long term stays allowed',
    featureDescr: 'Allow stay for 28 days or more',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'luggageDropoff',
    featureTitle: 'Luggage dropoff allowed',
    featureDescr: 'For guests’ convenience when they have early arrival or late departure',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'hangers',
    featureTitle: 'Hangers',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'hairDryer',
    featureTitle: 'Hair dryer',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/hairDryer.svg'
  },
  {
    idString: 'shampoo',
    featureTitle: 'Shampoo',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'bedLinens',
    featureTitle: 'Bed linens',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'extraBedding',
    featureTitle: 'Extra pillows and blankets',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'bedroomLock',
    featureTitle: 'Lock on bedroom door',
    featureDescr: 'Private room can be locked for safety and privacy',
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'bbqGrill',
    featureTitle: 'BBQ grill',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'gardenYard',
    featureTitle: 'Garden or backyard',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'patioBalcony',
    featureTitle: 'Patio or balcony',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'fireExting',
    featureTitle: 'Fire extinguisher',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'co2Alarm',
    featureTitle: 'Carbon monoxide alarm',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/co2Alarm.svg'
  },
  {
    idString: 'smokeAlarm',
    featureTitle: 'Smoke alarm',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  },
  {
    idString: 'firstAidKit',
    featureTitle: 'First aid kit',
    featureDescr: null,
    iconUrl: S3_URL + '/assets/entireHome.svg'
  }
];

module.exports = featureData;
