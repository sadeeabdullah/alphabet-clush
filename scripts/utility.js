function hideElement(elementId){
    console.log('hide element triggered')
    document.getElementById(elementId).classList.add('hidden')
}
function showElement(elementId){
    console.log('show element triggered')
    document.getElementById(elementId).classList.remove('hidden')
}


function randomAlphabets() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random()*alphabets.length)
    const randomAlp = alphabets[randomIndex]
    return randomAlp;
}

function addBg(elementId){
    console.log(elementId)
    document.getElementById(elementId).classList.add('bg-orange-400')
}