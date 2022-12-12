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


/**
 * Main: The main function; controller.
 */
function main() {

  console.log('*'.repeat(30), `\n`)

  const docs_path = '../' + 'data-docs/'

  // SLURP DATA FILE INTO ARRAY
  const peopleFile = docs_path + 'people2.txt'

  const fullNames = filenameToLines(peopleFile)
  console.log({ fullNames })



  console.log({ results })

} // END main

const surnamesDict = {}
const results = []

main()


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