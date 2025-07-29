import { database } from "./aquariumData.js"


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of database.fish) {
        if (fish.length % 3 === 0){
            holyFish.push(fish) 
        }

    }

    return holyFish
}

const holiestFish = mostHolyFish(database);
console.log(holiestFish)

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const fiveFish = []

    for (const fish of database.fish) {
        if (fish.length % 5 === 0){
            fiveFish.push(fish) 
        }

    }

    return fiveFish
}



export const regularFish = () => {
    // Any fish not a multiple of 3 or 5

    const normalFish = []

    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 &&
            fish.length % 5 !== 0
        ){
            normalFish.push(fish) 
        }

    }

    return holyFish
}
