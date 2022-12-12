
const pathDocs = '../docs'

const fileCountries = `${pathDocs}/countries.txt`
const fileScrabble = `${pathDocs}/sowpods.txt`
const fileAnimals = `${pathDocs}/animals.txt`
const fileBabyNames2020 = `${pathDocs}/baby_names_2020_short.txt`
const fileBabyNames1880 = `${pathDocs}/baby_names_1880_short.txt`

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const vowels = ["A", "E", "I", "O", "U"]

const months = {
  1: { fullName: "January", abbrev: "Jan" },
  2: { fullName: "February", abbrev: "Feb" },
  3: { fullName: "March", abbrev: "Mar" },
  4: { fullName: "April", abbrev: "Apr" },
  5: { fullName: "May", abbrev: "May" },
  6: { fullName: "June", abbrev: "Jun" },
  7: { fullName: "July", abbrev: "Jul" },
  8: { fullName: "August", abbrev: "Aug" },
  9: { fullName: "September", abbrev: "Sep" },
  10: { fullName: "October", abbrev: "Oct" },
  11: { fullName: "November", abbrev: "Nov" },
  12: { fullName: "December", abbrev: "Dec" },
}

const msgStyles = {
  error:
    `color: red;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  correct:
    `color: green;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  warn:
    `color: orange;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  bgYellow:
    `background: #ffffb3;` +
    `padding: 1em;` +
    `font-weight: bold;`
  ,
  bgAlice:
    `background: aliceblue;` +
    `padding: 1em;` +
    `font-weight: bold;`
  ,
}

// console.log(fileCountries)

const init = {
  filePaths: {
    countries: fileCountries,
    scrabble: fileScrabble,
    animals: fileAnimals,
    babyNames1880: fileBabyNames1880,
    babyNames2020: fileBabyNames2020
  },
  abc, months,

  // slurpFile: (filename) => {
  //   console.log(filename)

  //   const fs = require('fs')


  //   const buffer = fs.readFileSync(filename)
  //   const fileStr = buffer.toString()
  //   const wordsArray = fileStr.split('\n') // make array

  //   return wordsArray

  // }

}

export default init