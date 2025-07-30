import { database } from "./aquariumData.js"


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFishHTML = '<h2 class="holyFishTitle">Holy Fish</h2>';

    for (const fish of database.fish) {
        if (fish.length % 3 === 0){
            holyFishHTML += `
            <article class="holyFish">
               <img src="${fish.image}" alt="${fish.name} image" class="holyFish__image">
               <div class="holyFish__details">
                   <h2 class="holyFish__name">${fish.name}</h2>
                   <p class="holyFish__species">${fish.species}</p>
               </div>
            </article>`
        }

    }

    return holyFishHTML
}


export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFishHTML = '<h2 class="soldierFishTitle">Soldier Fish</h2>';

    for (const fish of database.fish) {
        if (fish.length % 5 === 0){
            soldierFishHTML += `
            <article class="soldierFish">
               <img src="${fish.image}" alt="${fish.name} image" class="soldierFish__image">
               <div class="soldierFish__details">
                   <h2 class="soldierFish__name">${fish.name}</h2>
                   <p class="soldierFish__species">${fish.species}</p>
               </div>
            </article>`
        }

    }

    return soldierFishHTML
}



export const regularFish = () => {
    // Any fish not a multiple of 3 or 5

    let normalFishHTML = '<h2 class="normalFishTitle">Normal Fish</h2>';

    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 &&
            fish.length % 5 !== 0){
            normalFishHTML += `
            <article class="normalFish">
               <img src="${fish.image}" alt="${fish.name} image" class="normalFish__image">
               <div class="normalFish__details">
                   <h2 class="normalFish__name">${fish.name}</h2>
                   <p class="normalFish__species">${fish.species}</p>
               </div>
            </article>`  
            
        }

    }

    return normalFishHTML
}


