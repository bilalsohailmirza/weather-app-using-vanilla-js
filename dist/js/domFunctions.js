
export const addSpinner = (element) => {
    animateButton(element);
    setTimeout(animateButton, 1000, element);
}

const animateButton = (element) => {
    element.classList.toggle("none");
    element.nextElementSibling.classList.toggle("block");
    element.nextElementSibling.classList.toggle("none");
    
}

export const displayError = (headerMsg, srMsg) => {
    updateWeatherLocationHeader(headerMsg);
    updateScreenReaderConifguration(srMsg);

}

const updateWeatherLocationHeader = (message) => {
    const h1 = document.getElementById("currentForecast_locatoin");
    h1.textContent = message;
}

const updateScreenReaderConifguration = (message) => {
    document.getElementById("confirmation").textContent = message;
}

