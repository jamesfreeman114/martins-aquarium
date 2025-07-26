import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = '';

    for (const tip of database.tips) {
        tipHTML += `
         <ul="tips">
              <li> ${tip.text}</li>
           </ul>
           `;

    }
    return tipHTML
}

