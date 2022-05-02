const options = document.querySelectorAll(".options");

let numDays = 0;

options.forEach((option) => {
    option.addEventListener("click", function() {
        const pInput = this.id;

        /* RANDOM AND ARRAYS USEFULL INFORMATION
        const cOptions = ["recarga", "escut", "dispara", "vidas"];
        let cInput = cOptions[Math.floor(Math.random() * 4)];*/

        if (pInput === "InfiniteFood") {
            random_in();
            infiniteFood();
        }
        else if (pInput === "LimitedFood") {
            random_in();
            limitedFood();
        }
        else if (pInput === "Predator") {
            random_in();
            predator();
        }
    });
});
function random_in(){
    for (let l = 0; l < 64; l++) {
        document.getElementById("img-cell-" + i).src = "https://image.spreadshirtmedia.net/image-server/v1/designs/154210948,width=178,height=178.png";
    }
    var i=Math.floor(Math.random()*64);
    document.getElementById("img-cell-" + i).src = "https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025642_960_720.png";
    var j;
    while(i==j){
        j=Math.floor(Math.random()*64);
    }
    document.getElementById("img-cell-" + j).src = "https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025642_960_720.png";
}
function infiniteFood() {
    var i =0;
    document.getElementById("img-cell-" + i).src = "https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025642_960_720.png";
}

function limitedFood() {

}
