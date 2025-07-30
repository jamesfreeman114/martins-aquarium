import { generateFishHTML } from './fishList.js'
import { tipList } from './tipList.js'
import { renderTipToDOM } from './tipRender.js'
import { locationList } from './locationList.js'
import { renderFishToDOM } from './fishRender.js'
import { renderLocationToDOM } from './locationRender.js'
import { mostHolyFish, soldierFish, regularFish } from './fishFilter.js'

// Generate the fish list
const fishHTML = generateFishHTML();
renderFishToDOM(fishHTML);


// // Generate the care tips
const tipHTML = tipList();
renderTipToDOM(tipHTML);


// // Generate the location list
const locationHTML = locationList();
renderLocationToDOM(locationHTML);

// Render each HTML string to the correct DOM element

const holiestFish = mostHolyFish();
const fiveFish = soldierFish()
const basicFish = regularFish()


const newFishHTML = document.getElementById('fishList');
newFishHTML.innerHTML = `${holiestFish}${fiveFish}${basicFish}`;

