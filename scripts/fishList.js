import { database } from './aquariumData.js';

export const generateFishHTML = () => {
    let fishHTML = '';

    for (const fish of database) {
        fishHTML += `
        <article class="fish">
               <img src="${fish.image}" alt="${fish.name} image" class="fish__image">
               <div class="fish__details">
                   <h2 class="fish__name">${fish.name}</h2>
                   <p class="fish__species">${fish.species}</p>
               </div>
           </article>
           `;

    }
    return fishHTML
};



