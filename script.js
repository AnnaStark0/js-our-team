// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, 
// il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. 
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.


// -- Creare Array di oggetti --

const team = [
    {
        image: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
    },

    {
        image: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        position: 'Chief Editor',
    },

    {
        image: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        position: 'Office Manager',
    },

    {
        image: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        position: 'Social Media Manager',
    },

    {
        image: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        position: 'Developer',
    },

    {
        image: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
    },
]

console.log(team);

// -- Creazione card --

function addCard (array) {
   
    let cardContent = '';

    for (let i = 0; i < array.length; i++) {

        cardContent += 
        `
        <div class="team-card">
            <div class="card-image">
                <img src=${array[i]['image']} alt=${array[i]['name']}/>
            </div>
            <div class="card-text">
                <h3>${array[i]['name']}</h3>
                <p>${array[i]['position']}</p>
            </div>
        </div>
        `;
    }

    return cardContent;

}

document.querySelector('.team-container').innerHTML = addCard(team);


