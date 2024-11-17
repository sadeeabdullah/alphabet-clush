          
    function addKeyUp(e) {
        const pressedLetter = e.key;
        const currentLetter = document.getElementById('random-alpha').innerText.toLowerCase();
        console.log(pressedLetter,currentLetter)
        if (pressedLetter === currentLetter) {
            removeBackgroundColorById(currentLetter)
            continueGame();
        } else {
            alert('you have clicked the wrong letter')
        }
    } 

    document.addEventListener('keyup',addKeyUp)


    function continueGame() {
        //setting the random alpahabet as the text on 
        const randomAlpha = randomAlphabets();

        const currentAlphabet = document.getElementById('random-alpha');
        currentAlphabet.innerText= randomAlpha.toUpperCase();
        x
    
        // add background to the random alphabet on keyboard
        setBackgroundColorById(randomAlpha)
    }


    function play(){     
        hideElement('home-section')
        showElement('display-section')
        continueGame()
    } 
  
