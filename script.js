
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");
let result = document.getElementById("result");

guessInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        guessButton.click();
    }
});

guessButton.addEventListener("click", function() {
     
    let guess = Number(guessInput.value);
    let message = document.createElement("p");
    if (guess === secretNumber) {
        message.textContent = "Congratulations! You guessed the secret number!";
    }  else if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
    }   else if (guess > secretNumber) {
        message.textContent = "Too high! Try again.";
    }
    result.prepend(message);

});