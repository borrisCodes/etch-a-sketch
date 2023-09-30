const grid = document.querySelector(".grid-container");
const gridSelector = document.querySelector('#set-grid');

gridSelector.addEventListener('click', () => {
    const size = prompt("Set size (limit 100)");

    changeSize(size);
});
function createDivs(numPerSide){
    for(i = 0; i < numPerSide ** 2; i++){
        let gridSquare = document.createElement('div');
        let randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        gridSquare.className = "grid-square";
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = randomColor
        });
        grid.appendChild(gridSquare);
    } 
}

function removeDivs(){
    document.querySelectorAll('.grid-square').forEach(e => e.remove());
};

function changeSize(num){
    removeDivs();
    createDivs(num);
    grid.style.setProperty("grid-template-columns", `repeat(${num}, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${num}, 2fr)`);
};

createDivs(16);