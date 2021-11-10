const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Hey! Do you want to hear a joke?", function(answer){
    if (answer === "Yes") {
        console.log("Awesome!");
    }

    if (answer === "yes") {
        console.log("Awesome!");
    }

    if (answer === "y") {
        console.log("Awesome!");
    }

    if (answer === "No") {
        console.log("Well, too bad. You'll hear it anyway... Knock, Knock!")
    }

    if (answer === "no") {
        console.log("Well, too bad. You'll hear it anyway... Knock, Knock!")
    }

})