function hideElement(elementId){
    console.log('hide element triggered')
    document.getElementById(elementId).classList.add('hidden')
}
function showElement(elementId){
    console.log('show element triggered')
    document.getElementById(elementId).classList.remove('hidden')
}

function randomAlphabets() {
    console.log('heelo')
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.round(Math.random()*alphabets.length)
    const randomAlp = alphabets[randomIndex]
    return randomAlp;
}