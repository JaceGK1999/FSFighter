import { renderGoblin } from './utils.js';
// import functions and grab DOM elements
const form = document.querySelector('form');
const killCount = document.getElementById('kill-count');
const toonHPEl = document.getElementById('toon-hp');
const toonImgEl = document.querySelector('#toon-img');
const goblinListEl = document.querySelector('.goblins');
// let state
let kills = 0;
let playerHP = 10;
let goblins = [
    { id: 1, name: 'Charles the Meek', hp: 1 },
    { id: 2, name: 'Biff the Buff', hp: 15 },
];
let currentId = 3;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random() * 10),
    };
    currentId++;

    goblins.push(newGoblin);

    displayGoblins();
});

function goblinClickHandler(goblinData) {
    if (playerHP <= 0) return;
    if (goblinData.hp <= 0) return;
    if (Math.random() < 0.4) {
        goblinData.hp--;
        alert('you hit ' + goblinData.name);
    } else {
        alert('you tried to hit ' + goblinData.name + ' but missed');
    }
    if (Math.random() < 0.6) {
        playerHP--;
        alert(goblinData.name + ' hit you!');
    } else {
        alert(goblinData.name + ' tried to hit you but missed!');
    }

    if (goblinData.hp === 0) {
        kills++;
    }

    if (playerHP === 0) {
        toonImgEl.classList.add('game-over');
        alert('GAME OVER!!!');
    }

    toonHPEl.textContent = playerHP;
    killCount.textContent = kills;

    const hpEl = document.getElementById(`goblin-hp-${goblinData.id}`);
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    const faceEl = document.getElementById(`goblin-face-${goblinData.id}`);
    const goblinImage = goblinData.hp > 0 ? './assets/Goblin.jpg' : './assets/Ghostie.png';
    faceEl.setAttribute('src', goblinImage);
}

function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        goblinListEl.append(goblinEl);
    }
}

displayGoblins();
