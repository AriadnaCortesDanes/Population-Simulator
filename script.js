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
            infiniteFood();
        }
        else if (pInput === "LimitedFood") {
            limitedFood();
        }
        else if (pInput === "Predator") {
            predator();
        }
    });
});

function infiniteFood() {
    
    spawn(board,10,10);

    paintBoard();
    for (var i = 0; i < 64; i++) {
        if(board[i] === 1);
    }
    setTimeout(recTimeout(day+1),100);
}

function limitedFood() {

}

function spawn(numFood, numBunny) {
    /*
    for (let l = 0; l < 64; l++) {
        document.getElementById("img-cell-" + l).src = grass;
    }
    */
    for (let l = 0; l < numFood; l++) {
        var i=Math.floor(Math.random()*64);
        while(board[i]===0){
            bord[i]=1;
            document.getElementById("img-cell-" + i).src = food
        }
    }
    for (let l = 0; l < numBunny; l++) {
        var i=Math.floor(Math.random()*64);
        while(board[i]===0){
            bord[i]=2;
            document.getElementById("img-cell-" + i).src = bunny;
        }
    }
    
}

function paintBoard() {
    for(var i = 0; i < 64; i++) {
        if(board[i] === 1) document.getElementById("img-cell-" + i).src = bunny;
        else if (board[i] === 2) document.getElementById("img-cell-" + i).src = food;
        else if (board[i] === 3) document.getElementById("img-cell-" + i).src = redBunny;
        else document.getElementById("img-cell-" + i).src = grass;
    }
}
