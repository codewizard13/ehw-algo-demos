/*
File Name: find-families.js

Programming:  Eric Hepperle
Date Created: 2022-12-11
Version:      0.0.1

App Type:     Algo Demo

Purpose: Gien a list of full names of people, determine possible family members. Group results by last name

--- --- ---
TIME COMPLEXITY:


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

/*
ALGORITHM

SLURPT names file into array (fullNames)

DEFINE GLOBAL hashmap (surnamesDict)

LOOP through fullnames

  STORE current name (name)

  // GET SURNAME FROM NAME
  SPLIT name at spaces into array (tmpArr)
  STORE last element of tmpArr (surname)

  // HANDLE SURNAME
  CHECK IF SURNAME is KEY in surnamesDict, IF NO

    ADD surname as key to surnamesDict
    INITIALIZE value to empty array
  
  ELSE

    PUSH current name onto surnamesDict.surname

  END


END

RETURN surnamesDict

*/
const bar = '*'.repeat(30)

/**
 * Main: The main function; controller.
 */
function main() {

  console.log(bar)

  const docs_path = '../' + 'data-docs/'

  // SLURP DATA FILE INTO ARRAY
  const peopleFile = docs_path + 'people2.txt'

  const fullNames = filenameToLines(peopleFile)
  // console.log({ fullNames })


  // BUILD NAMES DICTIONARY
  for (let i = 0; i < fullNames.length; i++) {

    let name = fullNames[i]
    let tmpArr = name.split(' ')
    let surname = tmpArr[tmpArr.length - 1]
    // console.log(name.split(' '))
    // console.log({ surname })

    // console.log(`name.length: `, name.length)

    // ADD NAME TO DICT
    if (!(surname in surnamesDict)) {
      surnamesDict[surname] = []
    }
    surnamesDict[surname].push(name)

  }

  // ADD extra names to debug near bottom of output
  surnamesDict["Gillian"].push("Michael J. Gillian", "Janet Gillian", "Ann Gillian")

  // console.log({ surnamesDict })


  // SEARCH FOR name in dict
  let needle = 'ABEL'

  // for (const [key, value] of Object.entries(surnamesDict)) {
  //   console.log(`${key}:`, value)
  // }

  // results = getValueByKey(surnamesDict, needle)
  // console.log({ results })

  let surnames = Object.keys(surnamesDict)
  let families = Object.values(surnamesDict)
  console.log(`Unique surnames:`, surnames.length)
  console.log(`families:`, families)
  // LOOP THROUGH EACH SURNAME
  // for (let i = 0; i < surnames.length; i++) {

  // If current key contains
  // let results = Object.entries(surnamesDict)
  //   .find(([key, value]) => key.toLowerCase().includes(needle.toLowerCase()) || value.toLowerCase().indexOf(needle.toLowerCase()) !== -1)

  for (const [surname, family] of Object.entries(surnamesDict)) {

    let lowerSurname = surname.toLowerCase()
    let lowerNeedle = needle.toLowerCase()

    console.log(`lowerSurname:`, lowerSurname, `lowerNeedle`, lowerNeedle)
    console.log({ family })

    if (lowerSurname.includes(lowerNeedle)) {
      console.log(`Matched: ${surname}`)
      console.log([surname, family])
    }
    // LOOP through each family group
    families.forEach(family => {
      // console.info('FAMILY: ', family)
      console.log(bar)
      // LOOP through each fullname in group
      family.forEach(name => {

        let lowerName = name.toLowerCase()
        // console.log(lowerName.includes(lowerNeedle))
        // console.log({ lowerName })
        if (lowerName.includes(lowerNeedle)) {
          console.log(name, `matched needle`, needle)
          results.push(name)
        }

      })

    }) // END familes


    console.log(`\nmatchedNames:`, matchedNames)
    results.push(matchedNames)
  }

  console.log()
  console.log({ results })


} // END main

const surnamesDict = {}
const results = []
let matchedNames = []


main()


function getValueByKey(obj, key) {

  if (!(key in obj)) {
    return false
  } else {
    let found = obj[key]
    return found
  }

}
