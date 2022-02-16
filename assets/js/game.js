// Variables
var playerName   = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney  = 10;
// Array
var enemyNames   = ["Roborto","Amy Android","Robo Trumble","AMLOoser"];

var enemyHealth  = 50;
var enemyAttack  = 12;

// Function fight
var fight = function(enemyName) {
    window.alert("Your enemy is " + enemyName);
    while(enemyHealth > 0){
        // Ask to FIGHT
        var promptFight = window.prompt("Would you like to FIGHT round " + numRound + " or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // Fight or not Fight that is the question
        promptFight = promptFight.toUpperCase();
        if (promptFight === "FIGHT"){
            numRound = numRound + 1;
            // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
           // Log a resulting message to the console so we know that it worked.
           console.log(playerName + " Attacked " + enemyName + " and now " + enemyName + " has " + enemyHealth + " health remaining.");
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
            playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " Attacked " + playerName + " and now " + playerName + " has " + playerHealth + " health remaining.");
            // Condition to check player health
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
                window.alert("Game Over");
                exit;
            }else{
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }else if (promptFight === "SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                window.alert(playerName + " has chosen to skip the fight!");
                playerMoney = playerMoney - 10;
                break;
            }else{
                fight(enemyName);
            }
        }else{
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};
window.alert(playerName + " Welcome to Robot Gladiators!");
// Loop to enemies
for (var i = 0; i < enemyNames.length; i++){
    // Call function
    var pickedEnemyName = enemyNames[i];
    var numRound = 1;
    fight(pickedEnemyName);
    enemyHealth = 30;
}
if (playerMoney < 0){
    window.alert("")
}else{
    window.alert("Congrats! You defeated all combatans!!! The End");
}