const mongoose = require('mongoose') 

const { dbURI } = require('../config/environment')
const Mushroom = require('../models/mushroom')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: false }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: '1',
          email: 'one@email.com',
          password: '1',
          passwordConfirmation: '1'
        },
        {
          username: '2',
          email: 'two@email.com',
          password: '2',
          passwordConfirmation: '2'
        }
      ])
    })
    .then((createdUsers) => {
      return Mushroom.create([
        {
          name: 'portobello',
          scientificName: 'Agaricus bisporus',
          edible: true,
          image: '../assets/portobello.jpg',
          description: 'The pileus or cap of the original wild species is a pale grey-brown in color, with broad, flat scales on a paler background and fading toward the margins. It is first hemispherical in shape before flattening out with maturity, and 5–10 centimetres (2–4 inches) in diameter. The narrow, crowded gills are free and initially, pink, then red-brown and finally a dark brown with a whitish edge from the cheilocystidia.',
          user: createdUsers[0] 
        }, 
        {
          name: 'shiitake',
          scientificName: 'Lentinula edodes',
          edible: true,
          image: '../assets/shiitake.jpg',
          description: 'The mushroom\'s Japanese name shiitake (椎茸) is composed of shii (椎, shī, Castanopsis), for the tree Castanopsis cuspidata that provides the dead logs on which it is typically cultivated, and take (茸, "mushroom") The specific epithet edodes is the Latin word for "edible" It is also commonly called "sawtooth oak mushroom", "black forest mushroom", "black mushroom", "golden oak mushroom", or "oakwood mushroom"',
          user: createdUsers[0] 
        }, 
        {
          name: 'destroying angel',
          scientificName: 'Amanita virosa',
          edible: false,
          image: '../assets/destroying-angel.jpg',
          description: 'A pure white, deadly poisonous mushroom. Apparently, just a piece of destroying angel in a soup made from otherwise edible species is enough to kill everyone who eats the soup.',
          user: createdUsers[1] 
        }, 
        {
          name: 'panther cap',
          scientificName: 'Amanita pantherina',
          edible: false,
          image: '../assets/panther-cap.jpg',
          description: 'A beautiful but poisonous mushroom that’s uncommon in the UK. It contains similar toxins to those in fly agaric. Intense sickness can occur after ingestion but the main effects are on the central nervous system. They include vivid hallucinations, confusion, visual distortion, a feeling of greater strength, delusions and convulsions. It can be fatal in rare cases',
          user: createdUsers[1] 
        }, 
        {
          name: 'angel\'s wings',
          scientificName: 'Pleurocybella porrigens',
          edible: false,
          image: '../assets/angels-wings.jpg',
          description: 'This distinctive pure white bracket-like fungus grows in clusters on decaying conifer wood. It’s quite common in the Scottish Highlands and in Cumbria but it’s rare elsewhere. Just appreciate it for its beauty.',
          user: createdUsers[1] 
        }

      ])
    })
    .then(createdMushrooms => console.log(`${'🍄 '.repeat(createdMushrooms.length)} mushrooms created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})