var display = document.querySelector('.display');
var currentInput = '0';

function updateDisplay(){
    const displayedText = currentInput.replace(/\*\*2/g, '²');
    display.textContent = displayedText;
}

function clearDisplay(){
    currentInput = '0';
    updateDisplay();
}

function appendCharacter(char){ 
    if(currentInput === '0' && char!=='.')
        currentInput = char;
    // else if(char === '**2')
    //     currentInput += '²';
    else
        currentInput += char;
    updateDisplay();
}

function calculate(){
    try{
        currentInput = eval(currentInput).toString();
        updateDisplay();
    }
    catch(error){
        currentInput = 'Error';
        updateDisplay();
    }
}
