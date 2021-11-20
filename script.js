// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, 
// il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. 
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.


//Creare Array di oggetti

const team = [
    {
        'pic': 'img/wayne-barnett-founder-ceo.jpg'
        'name': 'Wayne Barnett',
        'position': 'Founder & CEO',
        
    },
    {
        'pic': 'img/angela-caroll-chief-editor.jpg'
        'name': 'Angela Caroll',
        'position': 'Chief Editor',
        
    },
    {
        'pic': 'img/walter-gordon-office-manager.jpg'
        'name': 'Walter Gordon',
        'position': 'Office Manager',
        
    },
    {
        'pic': 'img/angela-lopez-social-media-manager.jpg'
        'name': 'Angela Lopez',
        'position': 'Social Media Manager',
        
    },
    {
        'pic': 'img/scott-estrada-developer.jpg'
        'name': 'Scott Estrada',
        'position': 'Developer',
        
    },
    {
        'pic': 'img/barbara-ramos-graphic-designer.jpg'
        'name': 'Barbara Ramos',
        'position': 'Graphic Designer',
        
    },
]

console.log(team);

//Creazione card

// function addCard (card) {
    
//     let team = '';

//     for (let i = 0; i < card.length; i++) {

//         team += 
//         `
//         <div class="team-card">
//             <div class="card-image">
//                 <img src=${array[i]['image']} alt=${card[i]['name']}/>
//             </div>
//             <div class="card-text">
//                 <h3>${card[i]['name']}</h3>
//                 <p>${card[i]['position']}</p>
//             </div>
//         </div>
//         `;
//     }
   

//     document.querySelector('.team-container').innerHTML = addCard(team);
}