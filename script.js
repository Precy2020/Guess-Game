let playerChoice = document.getElementById("input").value;
console.log(playerChoice);

const computerChoice = Math.floor(Math.random() * 3);

console.log(computerChoice);

function result() {
    if (playerChoice == computerChoice) {
        alert("You Won")
    }
    
    else{
        alert("try again")
    }
  
}

let btn = document.getElementById("try");

