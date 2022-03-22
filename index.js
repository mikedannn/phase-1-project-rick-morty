// hello this is the project

const URL = 'https://rickandmortyapi.com/api/character'
const card = document.getElementById('cards');
const gallery = document.getElementById('character_gallery');
const selectedImage = document.getElementById('selectedImage');



const renderCharacter = (character) => {
    let characterCard = document.createElement('div');
    

    characterCard.innerHTML =

    `<div class="card">
        <img src="${character.image}" alt="Avatar" style="width:100%">
        <div class="character_info">
            <h4><b>${character.name}</b></h4> 
            <p>SPECIES: ${character.species}</p> 
            <p>GENDER: ${character.gender}</p> 
            <p>STATUS: ${character.status}</p> 
            <button onclick="openCard()" id="${character.id}" class="button">More about me!</button>
        </div>
    </div>`

    card.appendChild(characterCard);

}

document.addEventListener('DOMContentLoaded', () => {

    for (let id = 1; id<31; id++) {
        fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(character => renderCharacter(character))
            // .then(character => renderCharacter())
            // document.getElementById('character_gallery').innerHTML = characterHTML
    }
    
})

const openCard = () => {
    console.log(`hello`)
}







