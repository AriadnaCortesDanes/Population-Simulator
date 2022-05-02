const options = document.querySelectorAll(".options");

let numDays = 0;

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
    var i =0;
    document.getElementById("img-cell-" + i).src = "https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025642_960_720.png";
}

function limitedFood() {

}
