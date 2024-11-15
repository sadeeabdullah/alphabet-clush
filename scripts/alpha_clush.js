function play(){
    console.log('play start now')
    const homeSection = document.getElementById('home-section')
    const displaySection = document.getElementById('display-section')
    homeSection.classList.add('hidden')
    displaySection.classList.remove('hidden')
}