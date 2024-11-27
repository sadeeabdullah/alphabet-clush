function hideElement(elementId){
    document.getElementById(elementId).classList.add('hidden')
}
function showElement(elementId){
    document.getElementById(elementId).classList.remove('hidden')
}


function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getInnerValue(elementId) {
    const element = document.getElementById(elementId);
    const innerValue = parseInt(element.innerText)
    return innerValue;
}

function setTextElementValue(elementId,value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function randomAlphabets() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}




