export const renderTipToDOM = (tipHTML) => {
    const tipList = document.getElementById('tipList');

    if (tipList) {
        tipList.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
};

