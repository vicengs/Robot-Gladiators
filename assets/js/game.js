// Variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(playerName);
// Function fight
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " Attacked " + enemyName + " and now " + enemyName + " has " + enemyHealth + " health remaining.");
    // Condition to check enemy health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
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
    }else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
fight();