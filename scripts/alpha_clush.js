          
    function addKeyUp(e) {
        const pressedLetter = e.key;
        const currentLetter = document.getElementById('random-alpha').innerText.toLowerCase();
        console.log(pressedLetter,currentLetter)
        if (pressedLetter === currentLetter) {

            // update score :
            //  addd new score after creating a new right click
            // getInnerValue('life-score')
            console.log('adding new point to the score')
            const currentValue = getInnerValue('current-score');
            const updatedValue = currentValue + 1;
            console.log(updatedValue)
            console.log(currentValue)
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
        
    
        // add background to the random alphabet on keyboard
        setBackgroundColorById(randomAlpha)
    }


    function play(){     
        hideElement('home-section')
        showElement('display-section')
        continueGame()
    } 
  
