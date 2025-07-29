import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = '<h1 class="tipTitle">Tips</h1>';

    for (const tip of database.tips) {
        tipHTML += `
         <ul class ="tips">
         <li class="tip">${tip.topic} : ${tip.text}</li>
         </ul>`;

    }
    return tipHTML
}

