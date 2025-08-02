import { database } from "./aquariumData.js"


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFishHTML = '<h2 class="fishTitle">Holy Fish</h2>';

    for (const fish of database.fish) {
        if (fish.length % 3 === 0){
            holyFishHTML += `
            <article class="fish">
               <img src="${fish.image}" alt="${fish.name} image" class="fish__image">
               <div class="fish__details">
                   <h2 class="fish__name">${fish.name}</h2>
                   <p class="fish__species">${fish.species}</p>
               </div>
            </article>`
        }

    }

    return holyFishHTML
}


export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFishHTML = '<h2 class="fishTitle">Soldier Fish</h2>';

    for (const fish of database.fish) {
        if (fish.length % 5 === 0){
            soldierFishHTML += `
            <article class="fish">
               <img src="${fish.image}" alt="${fish.name} image" class="fish__image">
               <div class="fish__details">
                   <h2 class="fish__name">${fish.name}</h2>
                   <p class="fish__species">${fish.species}</p>
               </div>
            </article>`
        }

    }

    return soldierFishHTML
}



export const regularFish = () => {
    // Any fish not a multiple of 3 or 5

    let normalFishHTML = '<h2 class="fishTitle">Normal Fish</h2>';

    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 &&
            fish.length % 5 !== 0){
            normalFishHTML += `
            <article class="fish">
               <img src="${fish.image}" alt="${fish.name} image" class="fish__image">
               <div class="fish__details">
                   <h2 class="fish__name">${fish.name}</h2>
                   <p class="fish__species">${fish.species}</p>
               </div>
            </article>`  
            
        }

    }

    return normalFishHTML
}


