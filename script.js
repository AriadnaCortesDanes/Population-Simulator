const options = document.querySelectorAll(".options");

let numDays = 0;
const maxDays = 100;

// 0 if grass, 1 if bunny, 2 if food
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
            spawn(1,1);
            infiniteFood();
        }
        else if (pInput === "LimitedFood") {
            spawn(1,1);
            limitedFood();
        }
        else if (pInput === "Predator") {
            spawn(1,1);
            predator();
        }
    });
});

function random_in(){
    for (let l = 0; l < 64; l++) {
        document.getElementById("img-cell-" + i).src = grass;
    }
    var i=Math.floor(Math.random()*64);
    document.getElementById("img-cell-" + i).src = food;
    var j;
    while(i==j){
        j=Math.floor(Math.random()*64);
    }
    document.getElementById("img-cell-" + j).src = bunny;
}

function infiniteFood() {
    
    spawn(board,10,10);

    for(var i = 0; i < maxDays; i++) {
        paintBoard();
    }
    var i =0;
    document.getElementById("img-cell-" + i).src = redBunny;
}

function limitedFood() {

}

function spawn(board, numFood, numBunny) {
    
}

function paintBorard() {
    for(var i = 0; i < 64; ++i) {
        if(board === 1) document.getElementById("img-cell-" + i).src = food;
        else if (board === 2) document.getElementById("img-cell-" + i).src = bunny;
        else document.getElementById("img-cell-" + i).src = grass;
    }
}
