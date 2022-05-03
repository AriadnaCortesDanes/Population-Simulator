const options = document.querySelectorAll(".options");

let numDays = 0;
const maxDays = 100;
const food_new_bunny=10;
const gan_comer=5;
let numBunny = 0;
let numFood = 0;
let day=0;

// 0 if grass, 1 if bunny, 2 if food, 3 if feeded bunny
board = [ 
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
]

/*
si un bunny arriba a aliment 0, mor.
si un bunny s'alimenta bunny_food val 10.
bunny_food decreix un 1 cada dia.
*/
bunny_food = [ 
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
    0, 0, 0, 0, 0 ,0 ,0 , 0,
]

let food = "https://images.vexels.com/media/users/3/185280/isolated/preview/c65ad91a19cfc6083e2a615b71ea3812-fruta-de-frambuesa-plana.png"
let redBunny = "https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025642_960_720.png";
let bunny = "https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025641_960_720.png";
let grass = "https://image.spreadshirtmedia.net/image-server/v1/designs/154210948,width=178,height=178.png";

options.forEach((option) => {
    option.addEventListener("click", function() {
        const pInput = this.id;
        day=0;
        iniBoard();
        
        var infinite = document.getElementById("InfiniteFood");
        infinite.disabled = true;
        var predator = document.getElementById("Predator");
        predator.disabled = true;
        var limited = document.getElementById("LimitedFood");
        limited.disabled = true;

        if (pInput === "InfiniteFood") {
            infiniteFood();
        }
        else if (pInput === "LimitedFood") {
            limitedFood();
        }
        else if (pInput === "Predator") {
            predator();
        }
        /*
        else if (pInput === "flecha") {
            recTimeout()
        }
        */
       console.log("fin");
    });
});
function spawn(numFood, numBunny) {
    //podriem posar una variable max per a controlar que no es passi de 64
    for (var l = 0; l < numFood; l++) {
        var i=Math.floor(Math.random()*64);
        while(board[i] > 0){
            i=Math.floor(Math.random()*64);
        }
        board[i]=2;
        document.getElementById("img-cell-" + i).src = food;
    }
    for (var l = 0; l < numBunny; l++) {
        var i=Math.floor(Math.random()*64);
        while(board[i] > 0){
            i=Math.floor(Math.random()*64);
        }
        board[i]=1;
        bunny_food[i]=food_new_bunny;
        document.getElementById("img-cell-" + i).src = bunny;
        console.log("spawn Bunny");
    }
}

function iniBoard() {
    for(var i = 0; i < 64; i++) {
        document.getElementById("img-cell-" + i).src = grass;
        board[i]=0;
        bunny_food[i]=0;
    }
}

function paintBoard() {
    for(var i = 0; i < 64; i++) {
        if(board[i] === 0)document.getElementById("img-cell-" + i).src = grass;
        if(board[i] === 1)document.getElementById("img-cell-" + i).src = bunny;
        if(board[i] === 2)document.getElementById("img-cell-" + i).src = food;
        if(board[i] === 3)document.getElementById("img-cell-" + i).src = redBunny;
    }
}
function pos_val(x){
    return x>=0 && x<64 && board[x]!=1;
}
function move_conej(x,x1){
    if(board[x1]===0){
        board[x]=0;
        board[x1]=1;
        bunny_food[x1]=bunny_food[x];
        bunny_food[x]=0;
    }
    else if(board[x1] === 2){
        --numFood;
        board[x]=0;
        board[x1]=1;
        bunny_food[x1]=bunny_food[x]+gan_comer;
        bunny_food[x]=0;
    }
}
function bunnyMoves(x){
    if(pos_val(x+8) && board[x+8] === 2){
        move_conej(x,x+8);
    }
    else if(pos_val(x-8) && board[x-8] === 2){
        move_conej(x,x-8);
    }
    else if(pos_val(x-1) && x % 8 !=0 && board[x-1] === 2){
        move_conej(x,x-1);
    }
    else if(pos_val(x+1) && x % 9 !=0 &&board[x+1] === 2){
        move_conej(x,x+1);
    }
    else{
        var i=Math.floor(Math.random()*4);
        if(i===0 && pos_val(x+8)){
            move_conej(x,x+8);
        }
        else if(i===2 && pos_val(x-8)){
            move_conej(x,x-8);
        }
        else if(i===3 && pos_val(x+1) && x % 0 !=0){
            move_conej(x,x+1);
        }
        else if(i===1 && pos_val(x-1) && x % 8 !=0){
            move_conej(x,x-1);
        }

    }
}

function recTimeout_limited() {
    if(day < maxDays) {
        var reproduceBunny = 0;
        var B=[];
        for (var i = 0; i < 64; i++) {
            if(board[i] === 1) {
                B.push(i)
            }
        }
        while(B.length>0){
            var i=B.pop();
            //if(board[i] === 1) {
            bunny_food[i]--;
            if(bunny_food[i] === 0){
                board[i] = 0; //si el bunny no menja mor
            }
            else {
                
                if(bunny_food[i] > 15) {
                    //Aixo dobla el bunny pero no li treu vida!
                    reproduceBunny++;
                }
                bunnyMoves(i);
            }
            //console.log("pos");
            //console.log(i);
            //console.log("comida");
            //console.log(bunny_food[i]);
        }
        var newFood = 1;
        spawn(newFood,reproduceBunny);
        //console.log(day);
        day=day+1;
        setTimeout(recTimeout_limited,50);
    }
    else {
        numBunny = 0;
        numFood = 0;
        iniBoard();
        var infinite = document.getElementById("InfiniteFood");
        infinite.disabled = false;
        var predator = document.getElementById("Predator");
        predator.disabled = false;
        var limited = document.getElementById("LimitedFood");
        limited.disabled = false;
    }
    paintBoard();
}

function infiniteFood() {
    
}

function limitedFood() {
    numBunny = 3;
    numFood = 10;
    spawn(numFood,numBunny);
    recTimeout_limited();
}
