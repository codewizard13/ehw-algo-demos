/*
File Name: find-families.js

Programming:  Eric Hepperle
Date Created: 2022-12-11
Version:      0.0.1

App Type:     Algo Demo

Purpose: Given a list of full names of people, determine possible family members.
Group results by last name.

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


// Define a visual horizonal rule (bar) to use in console:
//   ******************************
const bar = '*'.repeat(30)

/**
 * Main: The main function; controller.
 */
function main() {

  console.log(bar)

  // DEFINE people file path
  const docs_path = '../' + 'data-docs/'
  const peopleFile = docs_path + 'people2.txt'
  
  // SLURP DATA FILE INTO ARRAY
  const fullNames = filenameToLines(peopleFile)
  // console.log({ fullNames })
  
  // BUILD NAMES DICT: Determines surname and groups full names by surname
  surnamesDict = buildNamesDict(fullNames)
  
  // HOW TO OPTIONALLY ADD EXTRA NAMES the fullNames array
  //  external to slurping the file. This appends more names to the array:
  surnamesDict["Gillian"].push("Michael J. Gillian", "Janet Gillian", "Ann Gillian")

  // DEFINE what you want to search for in surnamesDict. Can be any case
  //  (upper, lower, mixed) search string (needle) is converted
  //  for comparison in the code.
  let needle = 'ABEL'

  let matchedNames = searchStrInDict(needle, surnamesDict)

  

  console.log()
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


function searchStrInDict(needle, dict) {

  const matches = []

  for (const [surname, namesGroup] of Object.entries(dict)) {

    let lowerSurname = surname.toLowerCase()
    let lowerNeedle = needle.toLowerCase()
  
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
        matches.push(name)
  
      }
  
    }) // END familes
  
  
  }

  return matches

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