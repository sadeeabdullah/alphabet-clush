function hideElement(elementId){
    console.log('hide element triggered')
    document.getElementById(elementId).classList.add('hidden')
}
function showElement(elementId){
    console.log('show element triggered')
    document.getElementById(elementId).classList.remove('hidden')
}