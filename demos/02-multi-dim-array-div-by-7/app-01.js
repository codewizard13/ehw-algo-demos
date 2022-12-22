/*
Program Type:     TUTWRK
Platform/Channel: YouTube/The Coding Train
Programmer:       Eric Hepperle
Date Created:     2022-12-22

Purpose: Demonstrate multidimensional arrays in JavaScript

NOTES: This is loosely inspired by the work in the tutorial.
Here are the challenge rules I created:
- Create a 2 dimensional game board using rows and cols values
- Fill every spot that is a multiple of 7 with a checkbox emoji
- Fill all other spots with the box ID of that spot

If we imagine each spot can hold one "box", each box should
either display a the box ID, or a checked checkbox.

TIME TO SOLVE: Solved in a about 30 minutes.
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

