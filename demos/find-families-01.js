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
  console.log({ fullNames })

  surnamesDict = buildNamesDict(fullNames)


  // ADD extra names to debug near bottom of output
  surnamesDict["Gillian"].push("Michael J. Gillian", "Janet Gillian", "Ann Gillian")


  // SEARCH FOR name in dict
  let needle = 'ABEL'


  for (const [surname, namesGroup] of Object.entries(surnamesDict)) {

    let lowerSurname = surname.toLowerCase()
    let lowerNeedle = needle.toLowerCase()

    // console.log(`lowerSurname:`, lowerSurname, `lowerNeedle`, lowerNeedle)
    // console.log({ namesGroup })

    // ADD key to matches if key contains needle
    if (lowerSurname.includes(lowerNeedle)) {
      console.log(`Matched: ${surname}`)
      console.log([surname, family])
    }

    // ADD names in names group that contain needle
    namesGroup.forEach(name => {
      let lowerName = name.toLowerCase()
      if (lowerName.includes(lowerNeedle)) {
        console.log(name, `matched needle`, needle)
        results.push(name)

      }


    }) // END familes


  }

  console.log()
  console.log({ results })
  console.log(`\nmatchedNames:`, matchedNames)
  console.table(surnamesDict)


} // END main

let surnamesDict = {}
const results = []
let matchedNames = []


main()


function buildNamesDict(fullNamesArray) {

  const dict = {}

  // BUILD NAMES DICTIONARY
  for (let i = 0; i < fullNamesArray.length; i++) {

    let name = fullNamesArray[i]
    let tmpArr = name.split(' ')
    let surname = tmpArr[tmpArr.length - 1]

    // ADD NAME TO DICT
    if (!(surname in dict)) {
      dict[surname] = []
    }
    dict[surname].push(name)

  }

  // console.log({ dict })
  return dict
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