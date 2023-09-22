const boxes = document.querySelectorAll('.container .box');

let userInput = Array.from(document.getElementsByClassName('tick'));
const radioContainer = document.querySelector('.user-input');

console.log(userInput);

/**
 * TODO
 * Automate reset section by making victory & draw cases
 */

//Reset Section
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', () => {
    radioContainer.style.visibility = 'visible';
    boxes.forEach(box => {
        Array.from(box.children).forEach(img => {
            img.style.visibility = '';
        });
        computerTurn = false;
    });
});

//Play Section
let computerTurn = false;
boxes.forEach(element => {
    element.addEventListener('click', () => {
        let userMark = element.querySelector(`img[alt=\"${userInput.find((radio) => radio.checked).value}\"]`);
        radioContainer.style.visibility = 'hidden';
    if(!computerTurn)
    {
        const images = Array.from(element.children);
    
        if(!images.every((item)=> item.style.visibility === ''))
        {
            console.log("You are trying to tick an already ticked box!");
        }
        else
        {
            userMark.style.visibility = 'visible';
            computerTurn = true;
        }
    }
    else
    {
        computerPlay(boxes, userMark);
        computerTurn = false;
    }

    });
    
});

function computerPlay(grid, otherMark) {
    let randomCell = Math.floor(Math.random() * 9);

    while (Array.from(grid[randomCell].children)
        .some((img)=> img.style.visibility === 'visible'))
    {
        randomCell = Math.floor(Math.random() * 9);   
    }

    let targetCell = document.querySelector(`.container .box:nth-child(${randomCell+1})`);

    if(otherMark.getAttribute('alt') === targetCell.firstElementChild.getAttribute('alt'))
    {
        targetCell.lastElementChild.style.visibility = 'visible';
    }
    else if(otherMark.getAttribute('alt') === targetCell.lastElementChild.getAttribute('alt'))
    {
        targetCell.firstElementChild.style.visibility = 'visible';
    }
    else{console.log("Images elements Values are unrelated");}

}

console.log(boxes);