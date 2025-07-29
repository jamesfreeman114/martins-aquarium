import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = '<h1 class="locationTitle">Locations</h1>';

    for (const location of database.locations) {
        locationHTML += `
        <article class="locations">
               <section class="location">
                   <h2 class="location__name">${location.name}</h2>
                   <h3 class="location___country">${location.country}</h3>
                   <p class="location__description">${location.description}</p>
               </section>
           </article>`;

    }
    return locationHTML
}

