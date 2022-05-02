const options = document.querySelectorAll(".options");

let numDays = 0;
const maxDays = 100;

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
    5, 5, 5, 5, 5, 5 ,5 , 5,
    5, 5, 5, 5, 5, 5 ,5 , 5,
    5, 5, 5, 5, 5, 5 ,5 , 5,
    5, 5, 5, 5, 5, 5 ,5 , 5,
    5, 5, 5, 5, 5, 5 ,5 , 5,
    5, 5, 5, 5, 5, 5 ,5 , 5,
    5, 5, 5, 5, 5, 5 ,5 , 5,
    5, 5, 5, 5, 5, 5 ,5 , 5,
]

let food = "https://images.vexels.com/media/users/3/185280/isolated/preview/c65ad91a19cfc6083e2a615b71ea3812-fruta-de-frambuesa-plana.png"
let redBunny = "https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025642_960_720.png";
let bunny = "https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025641_960_720.png";
let grass = "https://image.spreadshirtmedia.net/image-server/v1/designs/154210948,width=178,height=178.png";

options.forEach((option) => {
    option.addEventListener("click", function() {
        const pInput = this.id;

        /* RANDOM AND ARRAYS USEFULL INFORMATION
        const cOptions = ["recarga", "escut", "dispara", "vidas"];
        let cInput = cOptions[Math.floor(Math.random() * 4)];*/

        if (pInput === "InfiniteFood") {
            iniBoard();
            spawn(1,1);
            infiniteFood();
        }
        else if (pInput === "LimitedFood") {
            iniBoard();
            spawn(1,1);
            limitedFood();
        }
        else if (pInput === "Predator") {
            iniBoard();
            spawn(1,1);
            predator();
        }
    });
});

function infiniteFood() {
    spawn(10,10);
    recTimeout(1);
}

function recTimeout(day) {
    if(day > maxDays) return;
    var reproduceBunny = 0;

    paintBoard();
    for (var i = 0; i < 64; i++) {

        if(board[i] === 1) bunnyMoves(i);
        if(board[i] === 3) {
            //el bunny es reprodueix i el desAlimentem en 1
            reproduceBunny++;
        } 
    }

    spawn(0,reproduceBunny);
    setTimeout(recTimeout(day+1),100);
}

function limitedFood() {

}

function spawn(numFood, numBunny) {
    for (var l = 0; l < numFood; l++) {
        var i=Math.floor(Math.random()*64);
        while(board[i] > 0){
            i=Math.floor(Math.random()*64);
        }
        board[i]=1;
        document.getElementById("img-cell-" + i).src = food;
    }
    for (var l = 0; l < numBunny; l++) {
        var i=Math.floor(Math.random()*64);
        while(board[i] > 0){
            i=Math.floor(Math.random()*64);
        }
        board[i]=2;
        document.getElementById("img-cell-" + i).src = bunny;
    }
    
}

function iniBoard() {
    for(var i = 0; i < 64; i++) {
        document.getElementById("img-cell-" + i).src = grass;
        board[i]=0;
    }
}
