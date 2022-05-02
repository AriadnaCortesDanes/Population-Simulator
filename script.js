const options = document.querySelectorAll(".options");

let numDays = 0;

options.forEach((option) => {
    option.addEventListener("click", button)
});

function button() {
        const pInput = this.id;

        /* random and arrays
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
}

function infiniteFood() {
    var i =0;
    document.getElementById("img-cell" + i+ "-" + i).src = ".red-bunny.png";
}

function limitedFood() {

}
