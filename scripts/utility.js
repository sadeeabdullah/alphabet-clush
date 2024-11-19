function hideElement(elementId){
    console.log('hide element triggered')
    document.getElementById(elementId).classList.add('hidden')
}
function showElement(elementId){
    console.log('show element triggered')
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
    console.log(innerValue)

}

function randomAlphabets() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}




