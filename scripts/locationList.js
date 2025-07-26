import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = '';

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

//MORE ADVANCED LOCATIONS HTML

{/* <article class="locations">
               <div class="location__details">
                   <h2 class="location__name">${location.name}</h2>
                   <h3 class="location___country">${location.country}</h3>
                   <p class="location__description">${location.description}</p>
               </div>
           </article>
           ` */}

//BASIC LOCATIONS HTML

//    <article class ="locations">
//  <section class="location">${location.name}: ${location.country}, ${location.description}</section>
//  </article>