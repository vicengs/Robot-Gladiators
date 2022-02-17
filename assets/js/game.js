// Variables
var playerName   = window.prompt("What is your robot's name?");
var playerHealth;
var playerAttack;
var playerMoney;
var numRound;
var enemyHealth;
var enemyAttack;
// Array
var enemyNames   = ["Roborto","Amy Android","Robo Trumble","AMLOoser"];
// Function fight
var fight = function(enemyName, lastEnemy) {
    while(enemyHealth > 0 && playerHealth > 0){
        // Ask to FIGHT
        var promptFight = window.prompt("Would you like to FIGHT with " + enemyName + " the round " + numRound + " or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // Fight or not Fight that is the question
        promptFight = promptFight.toUpperCase();
        if (promptFight === "FIGHT"){
            numRound = numRound + 1;
            // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = Math.max(0, enemyHealth - (randomValue(playerAttack-3, playerAttack)));
           // Log a resulting message to the console so we know that it worked.
           //console.log(playerName + " Attacked " + enemyName + " and now " + enemyName + " has " + enemyHealth + " health remaining.");
           // Condition to check enemy health
            if (enemyHealth <= 0){
                window.alert(enemyName + " has died!");
                window.alert(playerName + " wins and has " + playerHealth + " health");
                playerMoney = playerMoney + 20;
                break;
            }else{
               window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = Math.max(0, playerHealth - (randomValue(enemyAttack-3, enemyAttack)));
            // Log a resulting message to the console so we know that it worked.
            //console.log(enemyName + " Attacked " + playerName + " and now " + playerName + " has " + playerHealth + " health remaining.");
            // Condition to check player health
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
                break;
            }else{
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }else if (promptFight === "SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                if (lastEnemy){
                    window.alert(playerName + " can't leave the last battle!");
                    fight(enemyName, lastEnemy);
                }else{
                    if (playerMoney > 0){
                        window.alert(playerName + " has chosen to skip the fight!");
                        playerMoney = playerMoney - 10;
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
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
var shop = function(){
    var shopOption = window.prompt("Welcome to the shop. Would you like REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    shopOption = shopOption.toUpperCase();
    switch (shopOption){
        case "REFILL":
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            break;
        case "UPGRADE":
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            break;
        case "LEAVE":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You need to choose a valid option. Try again!");
            shop();
            break;
    }
}
window.alert(playerName + " Welcome to Robot Gladiators!");
// Function to get random value
var randomValue = function(minValue, maxValue){
    var toRandom = (maxValue - minValue) + 1 ;
    var randomNumber = Math.floor(Math.random() * toRandom) + minValue ;
    return randomNumber;
}
// Function start and re-start the game
var startGame = function(){
    // Reset variables
    playerHealth = 10;
    playerAttack = 10;
    playerMoney  = 20;
    // Loop to enemies
    for (var i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0){
            var pickedEnemyName = enemyNames[i];
            var lastPickedEnemy = false;
            if(enemyNames.length-1 === i){
                lastPickedEnemy = true;
            }else{
                if (playerMoney >= 7){
                    var shopConfirm = window.confirm("Do you want visit the store before the next fight?");
                    if (shopConfirm){
                        shop();
                    }
                }else{
                    window.alert("You have just " + playerMoney + " dollars not enough to shop!")
                }
            }
        }
        numRound     = 1;
        enemyHealth  = randomValue(40,60);
        enemyAttack  = randomValue(10,15);
        fight(pickedEnemyName, lastPickedEnemy);
    }
    window.alert("Game Over");
    var reStartConfirm = window.confirm("Would you like to play again?");
    if (reStartConfirm){
        startGame();
    }else{
        endGame();
    }
}
startGame();