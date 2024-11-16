function conitinueGame(params) {
    //setting the random alpahabet as the text on 
    document.getElementById('random-alpha').innerText=randomAlphabets();
    const alpahabet=randomAlphabets()
    console.log(alpahabet)

    // add background to the random alphabet on keyboard
    addBg(alpahabet.toLowerCase())
}
function play(){              
    // const homeSection = document.getElementById('home-section')
    // const displaySection = document.getElementById('display-section')
    // homeSection.classList.add('hidden')
    // displaySection.classList.remove('hidden')
    hideElement('home-section')
    showElement('display-section')
    
    
     //setting the random alpahabet as the text on 
     const randomAlpha = randomAlphabets();
     const newText =document.getElementById('random-alpha').innerText= randomAlpha
     
    

     // add background to the random alphabet on keyboard
     addBg(randomAlpha.toLowerCase())
}                                     
