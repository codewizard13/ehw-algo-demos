/*
Program Name:     Demo: Create 10x10 grid with special sevens
Program Type:     DEMO
Programmer:       Eric Hepperle
Date Created:     2022-12-22

Purpose: Demonstrate multidimensional arrays in JavaScript

NOTES: These are the requirements I created:
- Create a 2 dimensional game board using rows and cols values
- Fill every spot that is a multiple of 7 with a checkbox emoji
- Fill all other spots with the box ID of that spot

If we imagine each spot can hold one "box", each box should
either display a the box ID, or a checked checkbox.

TIME TO SOLVE: Solved in a about 5 minutes.
*/

let cols = 10
let rows = 10

const filledBox = "☑️"
const emptyBox = "☐"

let rowString = ''

let boxID = 0

for (let i = 0; i < rows; i++) {

  rowString += `ROW ${i}\t| `

  // LOOP over each column
  for (let j = 0; j < cols; j++) {

    boxID++

    if (boxID % 7 === 0) {
      rowString += `${filledBox}\t`
    }
    else {
      rowString += `[${boxID}]\t`
    }

  }

  rowString += '\n'

  // PRINT row value after looping all cols
  console.log(rowString)
  rowString = ''
}

