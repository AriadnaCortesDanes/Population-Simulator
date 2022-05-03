const options = document.querySelectorAll(".options");

let numDays = 0;
const maxDays = 100;
const food_new_bunny=10;
const gan_comer=6;
const energ_repro=15;
const food_new_wolf=10;
const gan_comer_wolf=6;
const energ_repro_wolf=15;
let numWolf = 0; 
let numBunny = 0;
let numFood = 0;
let day=0;

// 0 if grass, 1 if bunny, 2 if food, 3 if feeded bunny, 4 if wolf
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
/*
si un wolf arriba a aliment 0, mor.
si un wolf s'alimenta wolf_food val 10.
wolf_food decreix un 1 cada dia.
*/
wolf_food = [ 
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
let wolf = "https://www.clipartmax.com/png/full/59-598213_wolf-puppy-howling-drawing-download-cute-baby-wolf-drawing.png";

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
            predators();
        }
        /*
        else if (pInput === "flecha") {
            recTimeout()
        }
        */
       console.log("fin");
    });
});
function spawn(numeroFood, numeroBunny) {
    //podriem posar una variable max per a controlar que no es passi de 64
    for (var l = 0; l < numeroBunny; l++) {
        if(numBunny+numFood+numWolf<64){
            var i=Math.floor(Math.random()*64);
            while(board[i] > 0){
                i=Math.floor(Math.random()*64);
            }
            board[i]=1;
            numBunny=numBunny+1;
            bunny_food[i]=food_new_bunny;
            document.getElementById("img-cell-" + i).src = bunny;
            console.log("spawn Bunny");
        }
    }

    for (var l = 0; l < numeroFood; l++) {
        if(numBunny+numFood+numWolf<64){
            var i=Math.floor(Math.random()*64);
            while(board[i] > 0){
                i=Math.floor(Math.random()*64);
            }
            numFood=numFood+1;
            board[i]=2;
            document.getElementById("img-cell-" + i).src = food;
        }
    }
}
function spawn_wolfs(numeroWolf) {
    //podriem posar una variable max per a controlar que no es passi de 64
    for (var l = 0; l < numeroWolf; l++) {
        if(numBunny+numFood+numWolf<64){
            var i=Math.floor(Math.random()*64);
            while(board[i] > 0){
                i=Math.floor(Math.random()*64);
            }
            board[i]=4;
            bunny_food[i]=food_new_wolf;
            numWolf=numWolf+1;
            document.getElementById("img-cell-" + i).src = wolf;
            console.log("spawn wolf");
        }
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
        if(bunny_food[x1]>(energ_repro+1)){
            board[x1]=3;
        }
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
            if(board[i] === 1 || board[i] === 3) {
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
                
                if(bunny_food[i] > energ_repro) {
                    //Aixo dobla el bunny pero no li treu vida!
                    reproduceBunny++;
                    bunny_food[i]=bunny_food[i]-food_new_bunny;
                    board[i] =1;
                }
                bunnyMoves(i);
            }
            console.log("pos");
            console.log(i);
            console.log("comida");
            console.log(bunny_food[i]);
        }
        var newFood = 1;
        spawn(newFood,reproduceBunny);
        //console.log(day);
        day=day+1;
        setTimeout(recTimeout_limited,40);
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
function recTimeout_infinite() {
    if(day < maxDays) {
        var reproduceBunny = 0;
        var B=[];
        for (var i = 0; i < 64; i++) {
            if(board[i] === 1 || board[i] === 3) {
                B.push(i);
            }
        }
        while(B.length>0){
            var i=B.pop();
            //if(board[i] === 1) {
            bunny_food[i]--;
            if(bunny_food[i] === 0){
                board[i] = 0; //si el bunny no menja mor
                numBunny--;
            }
            else {
                
                if(bunny_food[i] > energ_repro) {
                    //Aixo dobla el bunny pero no li treu vida!
                    reproduceBunny++;
                    bunny_food[i]=bunny_food[i]-food_new_bunny;
                    board[i] =1;
                }
                bunnyMoves(i);
            }
            console.log("pos");
            console.log(i);
            console.log("comida");
            console.log(bunny_food[i]);
        }
        var newFood = 64;
        spawn(newFood,reproduceBunny);
        //console.log(day);
        day=day+1;
        setTimeout(recTimeout_infinite,400);
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
function recTimeout_predator() {
    if(day < maxDays) {
        var reproduceBunny = 0;
        var reproduceWolf = 0;
        var B=[];
        var W =[];
        for (var i = 0; i < 64; i++) {
            if(board[i] === 1 || board[i] === 3) {
                B.push(i);
            }
            if(board[i] === 4) {
                W.push(i);
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
                
                if(bunny_food[i] > energ_repro) {
                    //Aixo dobla el bunny pero no li treu vida!
                    reproduceBunny++;
                    bunny_food[i]=bunny_food[i]-food_new_bunny;
                    board[i] =1;
                }
                bunnyMoves(i);
            }
            console.log("pos");
            console.log(i);
            console.log("comida");
            console.log(bunny_food[i]);
        }

        while(W.length>0){
            var i= W.pop();
            //if(board[i] === 1) {
            bunny_food[i]--;
            if(bunny_food[i] === 0){
                board[i] = 0; //si el bunny no menja mor
            }
            else {
                
                if(bunny_food[i] > energ_repro_wolf) {
                    //Aixo dobla el bunny pero no li treu vida!
                    reproduceWolf++;
                    bunny_food[i]=bunny_food[i]-food_new_wolf;
                    board[i] = 4;
                }
                wolfMoves(i);
            }
            console.log("pos");
            console.log(i);
            console.log("comida");
            console.log(bunny_food[i]);
        }

        var newFood = 2;
        spawn(newFood,reproduceBunny);
        spawn_wolfs(reproduceWolf);
        //console.log(day);
        day=day+1;
        setTimeout(recTimeout_predator,400);
    }
    else {
        numBunny = 0;
        numWolf = 0;
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
    initialBunnies = 3;
    initialFood = 10;
    spawn(initialFood,initialBunnies);
    recTimeout_infinite();
}

function limitedFood() {
    initialBunnies = 3;
    initialFood = 10;
    spawn(initialFood,initialBunnies);
    recTimeout_limited();
}

function predators() {
    initialBunnies = 5;
    initialFood = 15;
    initialWolfs = 1;
    spawn(initialFood,initialBunnies);
    spawn_wolfs(initialWolfs);
    recTimeout_predator();
}
