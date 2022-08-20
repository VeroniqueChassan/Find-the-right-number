//choisi un numéro entre 0 et 100

let number = document.getElementById("number");
let randomNumber = Math.floor(Math.random () * 100);
let result = document.getElementById("result");
let button = document.querySelector("button");
// confetti();

//creation d'un random number

//onclick event sur bouton verifier
button.addEventListener("click", (e) => {
    e.preventDefault();

    if (number.value > randomNumber) {
        result.value = "Your number is too high, try again";
    } else if (number.value < randomNumber) {
        result.value = "Your number is too low, try again";
    } else {
        result.value = "You WON !!! CONGRATULATION !!";
        confetti();
    }
})



    //creation d'un random number
    //comparaison du numéro choisir avec le random number
        //si au-dessus => dire au-dessus
        //si au-dessous => dire au-dessous
        //sinon => vous avez gagné

