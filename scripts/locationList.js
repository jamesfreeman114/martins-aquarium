import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = '';

    for (const location of database.locations) {
        locationHTML += `
         <article class ="locations">
         <section class="location">${location.name}: ${location.country}, ${location.description}</section>
         </article>`;

    }
    return locationHTML
}

