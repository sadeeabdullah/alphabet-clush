                                    


    function continueGame() {
        //setting the random alpahabet as the text on 
        const randomAlpha = randomAlphabets();

        const currentAlphabet = document.getElementById('random-alpha');
        currentAlphabet.innerText= randomAlpha;
        
       
        
        // add background to the random alphabet on keyboard
        setBackgroundColorById(randomAlpha)
    }
    function play(){     

        hideElement('home-section')
        showElement('display-section')
        continueGame()
        
    } 
  
