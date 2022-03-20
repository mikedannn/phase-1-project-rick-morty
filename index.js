// hello this is the project

const URL = 'https://rickandmortyapi.com/api/character'
const card = document.getElementById('card');
const gallery = document.getElementById('character_gallery');
const selectedImage = document.getElementById('selectedImage');
const btn = document.getElementById('characterBtn');
const characterImages = [];

const renderCharacter = (character) => {
    let characterCard = document.createElement('div');
    

    characterCard.innerHTML =

    `<div class="card">
        <img src="${character.image}" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>${character.name}</b></h4> 
            <p>SPECIES: ${character.species}</p> 
            <p>GENDER: ${character.gender}</p> 
            <p>STATUS: ${character.status}</p> 
        </div>
    </div>`

    card.appendChild(characterCard);




    // characterCard.innerHTML = 
    // `
    //     <img id="${character.id}" src="${character.image}" />
    //     <li>NAME: ${character.name}</li>
    //     <li>SPECIES: ${character.species}</li>
    //     <li>GENDER: ${character.gender}</li>
    //     <li>STATUS: ${character.status}</li>
    // `;

    // gallery.appendChild(characterCard);
}

document.addEventListener('DOMContentLoaded', () => {
    for (let id = 1; id<6; id++) {
        fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(character => renderCharacter(character))
            // .then(character => renderCharacter())
            // document.getElementById('character_gallery').innerHTML = characterHTML
    }        
})


