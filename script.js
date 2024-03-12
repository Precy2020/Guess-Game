function result() {
    let playerChoice = parseInt(document.getElementById("try").value);
    console.log("Player's choice: " + playerChoice);
    
    const computerChoice = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
    console.log("Computer's choice: " + computerChoice);
    
    if (isNaN(playerChoice)) {
        alert("Please enter a valid number.");
    } else {
        if (playerChoice === computerChoice) {
            alert("Congratulations! You guessed it right.");
        } else {
            alert("Sorry, wrong guess. Try again.");
        }
    }
}