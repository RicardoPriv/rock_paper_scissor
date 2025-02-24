const choices = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
};

const results = {
    0: "Draw",
    1: "Lose",
    2: "Win"
};

function get_ai_choice() {
    let choice = (Math.trunc(Math.random() * 10) % 3);
    return choice    
}

function who_wins(user_choice, ai_choice) {
    if (ai_choice == user_choice) {
        return 0;
    }
    else if ((ai_choice - user_choice == 1) || (user_choice - ai_choice == 2)) {
        return 1;
    }
    else {
        return 2;
    }
}

function show_results(user_choice) {
    let ai_choice = get_ai_choice();
    let result = who_wins(user_choice, ai_choice);
    console.log(choices[user_choice]);
    console.log(choices[ai_choice]);
    console.log(results[result]);

    document.getElementById("user-choice").innerHTML = "You chose " + choices[user_choice]
    document.getElementById("ai-choice").innerHTML = "The ai chose " + choices[ai_choice];
    document.getElementById("results").innerHTML = "You " + results[result];

    document.getElementById("user-choice").style.border = "2px solid black";
    document.getElementById("ai-choice").style.border = "2px solid black";
    document.getElementById("results").style.border = "2px solid black";
}

document.getElementById("rock-button").addEventListener("click", function() {
    show_results(0);
})
document.getElementById("paper-button").addEventListener("click", function() {
    show_results(1);
})
document.getElementById("scissors-button").addEventListener("click", function() {
    show_results(2);
})
