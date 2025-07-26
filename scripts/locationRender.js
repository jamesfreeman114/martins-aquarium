export const renderLocationToDOM = (locationHTML) => {
    const locationList = document.getElementById('locationList');

    if (locationList) {
        locationList.innerHTML = locationHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
};

