          
    function addKeyUp(e) {
        const pressedLetter = e.key;
        const currentLetter = document.getElementById('random-alpha').innerText.toLowerCase();
        if (pressedLetter === currentLetter) {

            // update score :
            //  addd new score after creating a new right click
            const currentValue = getInnerValue('current-score');
            g
            setTextElementValue('current-score',newValue)
            removeBackgroundColorById(currentLetter)
            continueGame();
        } else {
            const currentLife = getInnerValue('life-score');
            const updatedScore = currentLife - 1 ;
            setTextElementValue('life-score',updatedScore)
            
            if (updatedScore== 0) {
                gameOver()
            }
            
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
        
        // show the playground
        hideElement('home-section')
        hideElement('final-score')
        showElement('display-section')

        //set 0 on the score and 5 on the life after clicking to play new game

        setTextElementValue('current-score',0);
        setTextElementValue('life-score',5);

        continueGame()
    } 
  
    function gameOver() {
        hideElement('display-section');
        showElement('final-score')
    }
