// import functions and grab DOM elements
const form = document.querySelector('form');
import { renderGoblin } from './utils.js';

// let state
//let defeatedGoblinsCount = 0;
//let playerHP = 10;
let goblins = [{ id: 1, name: 'Charles the Meek', hp: 1 }];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //   - User has supplied a name and submitted the form
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    //   - Make a new goblin object with that user input

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;

    //   - Add that object to the array of goblins in state
    goblins.push(newGoblin);

    displayGoblins();
});
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
