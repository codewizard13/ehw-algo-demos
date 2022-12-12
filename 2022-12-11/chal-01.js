/*
Jessica McKellar challenges - 2022-12-11

Challenge:

There is at least one country name that contains another country name. Find all of these cases.


--- --- ---
TIME COMPLEXITY:

Eric Hepperle
2022-12-11

V1

*/

const fs = require('fs')

/**
 * Return lines array from file
 * 
 * @args: {string} filename
 * @return: {array} lines
 */
function filenameToLines(filename) {

  const buffer = fs.readFileSync(filename)
  const fileStr = buffer.toString()
  const lines = fileStr.split('\n') // make array

  return lines

}


/**
 * Main: The main function; controller.
 */
function main() {

  console.log('*'.repeat(30), `\n`)

  // SLURP FILE DATA INTO ARRAYS
  const babyNames1880File = '../../../docs/baby_names_1880_short.txt'
  const babyNames2020File = '../../../docs/baby_names_2020_short.txt'
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const countriesFile = '../../../docs/countries.txt'

  const babyNames1880 = filenameToLines(babyNames1880File)
  const babyNames2020 = filenameToLines(babyNames2020File)
  const scrabbleWords = filenameToLines(scrabbleWordsFile)
  const countries = filenameToLines(countriesFile)

  // console.log({ babyNames1880 })
  // console.log({ babyNames2020 })
  // console.log({ scrabbleWords })
  // console.log({ countries })


  for (let i = 0; i < countries.length; i++) {

    let includedCountry = countries[i].toLowerCase()

    for (let j = 0; j < countries.length; j++) {

      let containingCountry = countries[j].toLowerCase()

      // console.log({ includedCountry })
      // console.log({ containingCountry })

      if (containingCountry.includes(includedCountry)
        && includedCountry !== containingCountry
      ) {
        // console.log('hi')
        results.push([containingCountry, includedCountry])
      }

    }

  }

  console.log({ results })

} // END main

const results = []

main()


/*
ALGORITHM

DEFINE GLOBAL set foundCountries

SLURP country file contents into array (countries)

LOOP through countries

  ADD currentCountry to foundCountries


  








END loop




*/