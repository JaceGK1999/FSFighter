export { renderGoblin };

function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('img');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.id = `goblin-hp-${goblinData.id}`;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    faceEl.id = `goblin-face-${goblinData.id}`;
    const goblinImage = goblinData.hp > 0 ? './assets/Goblin.jpg' : './assets/Ghostie.png';
    console.log(goblinImage, 'img');
    faceEl.setAttribute('src', goblinImage);

    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    }

    goblinEl.append(nameEl, faceEl, hpEl);

    return goblinEl;
}
