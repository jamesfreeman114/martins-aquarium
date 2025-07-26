import { generateFishHTML } from './fishList.js'
import { tipList } from './tipList.js'
import { renderTipToDOM } from './tipRender.js'
// import { locationList } from './locationList.js'
import { renderFishToDOM } from './fishRender.js'

// Generate the fish list
const fishHTML = generateFishHTML();
renderFishToDOM(fishHTML);

const tipHTML = tipList();
renderTipToDOM(tipHTML);

// // Generate the care tips
// const tipHTML = tipList()

// // Generate the location list
// const locationHTML = locationList()

// Render each HTML string to the correct DOM element

