const screen = document.querySelector('.gameScreen');
boxCreate();

function boxCreate (n){
    if(n == undefined){
        n = 100;
        gridSizing(10);
    }
    for(let i = 0; i < n; i++){
        const box = document.createElement('button');
        screen.appendChild(box);
        box.classList.add('box');
    }
    colorChange();
}

const grid = document.querySelector('.size');
grid.addEventListener('click', ()=> {
    let size = prompt('Grid size? pick a number 2-100');
    if(isNaN(size)){
        alert('Invalid input! Input a number 2-100');
    }else if(size < 2 || size > 100){
        alert('Invalid input! Input a number 2-100');
    }else{
        let gridSquares = size * size;
        remove();
        boxCreate(gridSquares);
        gridSizing(size);
    }
})

function remove(){
    let child = screen.lastElementChild;
    while(child){
        screen.removeChild(child);
        child = screen.lastElementChild;
    }
}

function gridSizing(n){
    screen.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${n}, 1fr)`;
}

function colorChange(){
    const allBoxes = document.querySelectorAll('.box');
    let boxTotal = allBoxes.length;
    for(let i = 0; i < boxTotal; i++){
        allBoxes[i].addEventListener('click', ()=>{
            allBoxes[i].style.backgroundColor = 'black';
        })
    }
}