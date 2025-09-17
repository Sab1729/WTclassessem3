async function bloodyhell(){
    document.writeln("this");
    let prom = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("done!"), 1000)
    }
    );
    let result = await prom;
    alert(result);
}
bloodyhell();

//making john conway's game of life

let rows = 20;
let cols = 20;
let grid = new Array(rows); 
for(let i=0; i<rows; i++){
    grid[i] = new Array(cols);
    for(let j=0; j<cols; j++){
        grid[i][j] = Math.random() < 0.5 ? 1 : 0;
    }
}
console.table(grid);

function countNeighbors(grid, x, y){
    let sum = 0;
    for(let i=-1; i<=1; i++){
        for(let j=-1; j<=1; j++){
            let row = (x + i + rows) % rows;
            let col = (y + j + cols) % cols;
            sum += grid[row][col];
        }
    return sum;
}
sum -= grid[x][y];
return sum;
}
function updateGrid(grid){
    let newGrid = new Array(rows);
    for(let i=0; i<rows; i++){
        newGrid[i] = new Array(cols);
        for(let j=0; j<cols; j++){
            let neighbors = countNeighbors(grid, i, j);
            if(grid[i][j] == 1 && (neighbors < 2 || neighbors > 3)){
                newGrid[i][j] = 0;
            }
            else if(grid[i][j] == 0 && neighbors == 3){
                newGrid[i][j] = 1;
            }   
            else{
                newGrid[i][j] = grid[i][j];
            }
        }
    }
    return newGrid;
}
setInterval(()=>{
    grid = updateGrid(grid);
    console.clear();
    console.table(grid);
}, 1000);

// let newGrid = updateGrid(grid);
// console.table(newGrid);  
// let newerGrid = updateGrid(newGrid);
// console.table(newerGrid);
// let newnewerGrid = updateGrid(newerGrid);
// console.table(newnewerGrid);
// let newnewnewerGrid = updateGrid(newnewerGrid);
// console.table(newnewnewerGrid);

// let newnewnewnewerGrid = updateGrid(newnewnewerGrid);
// console.table(newnewnewnewerGrid);   
// let newnewnewnewnewerGrid = updateGrid(newnewnewnewerGrid);
// console.table(newnewnewnewnewerGrid);
// let newnewnewnewnewnewerGrid = updateGrid(newnewnewnewnewerGrid);
// console.table(newnewnewnewnewnewerGrid);
// let newnewnewnewnewnewnewerGrid = updateGrid(newnewnewnewnewnewerGrid);
// console.table(newnewnewnewnewnewnewerGrid);

//runing the game
// setInterval(()=>{
//     grid = updateGrid(grid);
//     console.clear();
//     console.table(grid);
// }, 1000);
