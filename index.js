// hello this is the project

const URL = 'https://rickandmortyapi.com/api/character'
const card = document.getElementById('cards');
const gallery = document.getElementById('character_gallery');
const selectedImage = document.getElementById('selectedImage');
const modal = document.getElementById("myModal");
const maleBtn = document.getElementById('maleFilter');
const femaleBtn = document.getElementById('femaleFilter');
const humanBtn = document.getElementById('humanFilter');
const alienBtn = document.getElementById('alienFilter');


const renderCharacter = (character) => {
    let characterCard = document.createElement('div');
    

    characterCard.innerHTML =

    `<div class="card">
        <img src="${character.image}" alt="Avatar" style="width:100%">
        <div class="character_info">
            <h4><b>${character.name}</b></h4> 
            <button onclick="openCard(${character.id})" id="${character.id}" class="button">More about me!</button>
        </div>
    </div>`

    card.appendChild(characterCard);
}

const showMoreInfo = (character) => {
    let characterModal = document.createElement('div');

    characterModal.innerHTML = 

    `<div class="modal-content">
        <div class="modal-header">
            <h3>${character.name}</h3>
        </div>
        <div class="modal-body">
            <p>Species: ${character.species}</p> 
            <p>Gender: ${character.gender}</p> 
            <p>Status: ${character.status}</p> 
            <p>Origin: ${character.origin.name}</p> 
        </div>
        <div class="modal-footer">
            <h3>Goodbye!</h3>
        </div>
    </div>
    `
    modal.appendChild(characterModal);
    modal.style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {

    for (let id = 1; id<61; id++) {
        fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(character => renderCharacter(character))
    }
})

const openCard = (id) => {
    fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(character => showMoreInfo(character))
}

window.addEventListener('click', function(e) {
    modal.innerHTML = "";
    modal.style.display = 'none';
})

maleBtn.addEventListener('click', () => {
    console.log('return male');
})

femaleBtn.addEventListener('click', () => {
    console.log('return female');
})

humanBtn.addEventListener('click', () => {
    console.log('return human');
})

alienBtn.addEventListener('click', () => {
    console.log('return alien');
})






