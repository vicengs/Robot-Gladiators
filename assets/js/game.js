// Variables
var getPlayerName = function(){
    var playerName = null;
    playerName = window.prompt("What is your robot's name?").replace(/ /g, "");
    
    while(playerName === null || playerName === ""){
        playerName = window.prompt("Please type a valid robot's name?").replace(/ /g, "");
    }
    return playerName;
};
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 20,
    reset: function(){
        this.health = 100;
        this.attack = 10;
        this.money  = 20;
    },
    refill: function(){
        this.health += 20;
        this.money -= 7;
    },
    upgrade: function(){
        this.attack += 6;
        this.money -=7;
    }
};
var numRound;
var enemyHealth;
var enemyAttack;
// Array
var enemyNames   = ["Roborto","Amy Android","Robo Trumble","AMLOoser"];
// Function fight
var fight = function(enemyName, lastEnemy) {
    while(enemyHealth > 0 && playerInfo.health > 0){
        // Ask to FIGHT
        var promptFight = window.prompt("Would you like to FIGHT with " + enemyName + " the round " + numRound + " or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // Fight or not Fight that is the question
        promptFight = promptFight.toUpperCase();
        if (promptFight === "FIGHT"){
            var rivalDefeated = false;
            var isPlayerTurn  = false;
            if (Math.random() > 0.5){
                isPlayerTurn = true;
            }
            numRound = numRound + 1;
            var playerTurn = function(){
                // Subtract the value of `playerInfo.attack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
                enemyHealth = Math.max(0, enemyHealth - (randomValue(playerInfo.attack-3, playerInfo.attack)));
                // Log a resulting message to the console so we know that it worked.
                //console.log(playerInfo.name + " Attacked " + enemyName + " and now " + enemyName + " has " + enemyHealth + " health remaining.");
                // Condition to check enemy health
                if (enemyHealth <= 0){
                    window.alert(enemyName + " has died!");
                    window.alert(playerInfo.name + " wins and has " + playerInfo.health + " health");
                    playerInfo.money = playerInfo.money + 20;
                    rivalDefeated = true;
                    //break;
                }else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
            }
            var enemyTurn = function(){
                // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
                playerInfo.health = Math.max(0, playerInfo.health - (randomValue(enemyAttack-3, enemyAttack)));
                // Log a resulting message to the console so we know that it worked.
                //console.log(enemyName + " Attacked " + playerInfo.name + " and now " + playerInfo.name + " has " + playerInfo.health + " health remaining.");
                // Condition to check player health
                if (playerInfo.health <= 0){
                    window.alert(playerInfo.name + " has died!");
                    rivalDefeated = true;
                    //break;
                }else{
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                }
            }
            if (isPlayerTurn){
                playerTurn();
                if (rivalDefeated){
                    break;
                }
                enemyTurn();
            }else{
                enemyTurn();
                if (rivalDefeated){
                    break;
                }
                playerTurn();
            }
        }else if (promptFight === "SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                if (lastEnemy){
                    window.alert(playerInfo.name + " can't leave the last battle!");
                    fight(enemyName, lastEnemy);
                }else{
                    if (playerInfo.money > 0){
                        window.alert(playerInfo.name + " has chosen to skip the fight!");
                        playerInfo.money = playerInfo.money - 10;
                        break;
                    }else{
                        window.alert("You haven't enough money to skip the battle");
                        fight(enemyName, lastEnemy);
                    }
                }
            }else{
                fight(enemyName);
            }
        }else{
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};
var endGame = function(){
    var highScore = localStorage.getItem("highscore");
    if (highScore === null){
        highScore = 0;
    }
    console.log("Score -> " + highScore);
    if (playerInfo.money > highScore){
        localStorage.setItem("highscore",playerInfo.money);
        localStorage.setItem("name",playerInfo.name);
        window.alert(playerInfo.name + " now has the high score of " + playerInfo.money + " !");
    }else{
        window.alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
    window.alert("Game Over");
    var reStartConfirm = window.confirm("Would you like to play again?");
    if (reStartConfirm){
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
var shop = function(){
    var shopOption = window.prompt("Welcome to the shop. Would you like REFILL (type 1) your health, UPGRADE (type 2) your attack or LEAVE (type 3) the store? Please enter a number to make your choose.");
    shopOption = parseInt(shopOption);
    switch (shopOption){
        case 1:
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerInfo.refill();
            break;
        case 2:
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerInfo.upgrade();
            break;
        case 3:
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You need to choose a valid option. Try again!");
            shop();
            break;
    }
}
window.alert(playerInfo.name + " Welcome to Robot Gladiators!");
// Function to get random value
var randomValue = function(minValue, maxValue){
    var toRandom = (maxValue - minValue) + 1 ;
    var randomNumber = Math.floor(Math.random() * toRandom) + minValue ;
    return randomNumber;
}
// Function start and re-start the game
var startGame = function(){
    // Reset variables
    playerInfo.reset();
    // Loop to enemies
    for (var i = 0; i < enemyNames.length; i++){
        if (playerInfo.health > 0){
            var pickedEnemyName = enemyNames[i];
            var lastPickedEnemy = false;
            if(enemyNames.length-1 === i){
                lastPickedEnemy = true;
            }else{
                if (playerInfo.money >= 7){
                    var shopConfirm = window.confirm("Do you want visit the store before the next fight?");
                    if (shopConfirm){
                        shop();
                    }
                }else{
                    window.alert("You have just " + playerInfo.money + " dollars not enough to shop!")
                }
            }
        }
        numRound     = 1;
        enemyHealth  = randomValue(40,60);
        enemyAttack  = randomValue(10,15);
        fight(pickedEnemyName, lastPickedEnemy);
    }
}
startGame();
endGame();