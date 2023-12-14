// JavaScript logic for calculator functionality

// initializing display variable with element 
var display = document.querySelector('.display');
var currentInput = '0';

// Function to update the display with the current input
function updateDisplay(){
    const displayedText = currentInput.replace(/\*\*2/g, '²');
    display.textContent = displayedText;
}


// Function to clear the display
function clearDisplay(){
    currentInput = '0';
    updateDisplay();
}

// Function to append a character to the current input
function appendCharacter(char){ 
    if(currentInput === 'Error')
        currentInput ='';
    if(currentInput === '0' && char!=='.')
        currentInput = char;
    else
        currentInput += char;
    updateDisplay();
}

// Function to perform the calculation
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
