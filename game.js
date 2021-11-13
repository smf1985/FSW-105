/*The year is 1985. Your job is to build a text-based (console) RPG game.
Project Requirements:
Console must greet player with a fun message
Console must ask for the player's name and store it
Walking:
The console will ask the user to enter a "w" to walk
Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared 
(A 1/3 or 1/4 chance of being attacked)
If a wild enemy appears:
The enemy is random (can be chosen out of a minimum of 3 different enemy names)
The user can decide to attack or run
If attacking, you will choose a random attack power between a min and max
If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
After the player attacks or runs the enemy attacks back for a random damage amount
If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
If the enemy kills the player the console prints a cool death message and the game ends
Inventory:
When the player kills enemies, they are awarded with items
If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory*/

const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');

readlineSync.question('Hello ' + name + ', Are you ready to fight some evil? Lets begin, push enter.');

const badGuys = ['Freddy Krueger', 'Michael Meyers', 'Candy Man', 'Jason'];
const treasure = ['Health', 'Body Armor', 'Adaptable Weapon', 'Shield'];
var prize = [];
let userHealth = 40;
const options = ['Walk', 'Print', 'Exit'];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (10 - 8 + 1) + 1);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 40;
    const badGuysPower = Math.floor(Math.random() * (20 / 5) + 0);

    const index = readlineSync.keyInSelect(options, 'What do you want to do next?');
   
    if (options[index] == 'Exit'){
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \nHealth:'  + userHealth + '\nTreasure: ' + pickUp);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .4){
            console.log('Lets Walk...');
        } else if (key >= .4){
            console.log(badGuy + ' has arrived!');
        }
            
            while (badGuysHealth > 0 && userHealth > 0){
                
                const user = readlineSync.question('Time to make a decision. Enter "f" to fight or "e" for escape: ');
                
                switch (user){
                    case 'e':
                        const escape = Math.random();
                        if (escape < .5){
                            console.log('Before you could escape ' + badGuy + 'attacked you with: ' + badGuysPower);
                        } else {
                            console.log('You made your escape!');
                            break;
                        }
                    case 'f':
                        badGuysHealth -= attackPower;
                        console.log('You attacked ' + badGuy + ' with ' + attackPower + ' attck power' );
                        
                        userHealth -= badGuysPower;
                        console.log('You were attacked with ' + badGuysPower + ' attack power.');

                        if (badGuysHealth <= 0){
                            console.log('You killed ' + badGuy + 'for the win.\n' + badGuy + 'left behind: ' + pickUp);
                            let loot = Math.random();
                            if (loot <= .4){
                                prize.push(pickUp);                    
                            } else if (userHealth <= 0){
                                console.log(badGuy + ' won by killing you. Game over!');
                            }
                        }     
                    
                    }
                }    
        }
    
}
while (userHealth > 0){
    game();
}
