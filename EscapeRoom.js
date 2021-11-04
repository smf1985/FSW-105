/*Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape 
the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in 
the room. If your character puts his hand in the hole, he dies.
Tell the user their options: Put hand in hole, Find the key, or Open the door
They can't open the door unless they find the key first.
They die if they put their hand in the hole.*/

var readlineSync = require("readline-sync");

var playerName = readlineSync.question('What is your name? ');

const welcomeMessage = `Welcome, ${playerName}, to the Escape Room Simulation!`;
console.log(welcomeMessage);

var hasKey = false;
var isAlive = true;

while(isAlive == true){
    const menuSelection = readlineSync.keyIn('Enter 1 to put your hand in the hole, Enter 2 to find the key, or Enter 3 to open the door. ', {limit: '$<1-3>'});
    if (menuSelection == 1){
        console.log(`Oh no, ${playerName}, it appears you have put your hand in the hole. Unfortunately you are DEAD! GAME OVER. `);
        isAlive = false;
    } else if (menuSelection == 2 && hasKey == false){
        console.log(`Great job, ${playerName}, you have found the key. Please proceed. `);
        hasKey = true;
    } else if (menuSelection == 2 && hasKey == true){
        console.log(`${playerName}, you don't get extra points for standing around! You have the key, please proceed. `);
    } else if (menuSelection == 3 && hasKey == false){
        console.log(`${playerName}, you must find the key to move on to the next step. `);
    } else if (menuSelection == 3 && hasKey == true){
        console.log(`Great job, ${playerName}, you found the key and open the door. `);
        console.log(`CONGRATULATIONS, ${playerName}, you have successfully ESCAPED! `);
        isAlive = false;
    }
}
