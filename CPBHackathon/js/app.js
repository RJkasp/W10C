// User will see homepage where they can pick between 3 different Pokemon- index.html
// After they make their selection, they will be taken to the battle page-Cookie function that saves the information and uses a href to bring you to next page refer to line 5 in app.js on project 10B
// On the battle page, the user will see:

//from lines 5-15 cookies and loops need to be made in battle.js
// The Pokemon they selected  - from the function on app.js
// Their Pokemon health points - new function on battle.js that contains max health with a loop that decreces health everytime computer attacks user
// Their Pokemon attack options - function attached to attack button that attacks and decreases the computers health
// The enemy Pokemon - needs a cookie to store health and every time he is attacked he loses health 
// The enemy Pokemon health points - attached to above cookie and loop
// The user should be able to select an attack which will "do damage" to the enemy - 
// The computer player should attack after any time the user attacks
// Once either Pokemon reaches 0 health points the match is over and a winner is declared
// Use cookies to save the state of the battle. If the user exits the browser and comes back, they should be able to resume their battle
// Don't over complicate things at first! The Pokemon can all have the same attacks that do the same amount of damage at first. Some pointers to get you going:



// You will need to track the following with variables and cookies for saving state
// userMaxHealth
// userCurrentHealth
// computerCurrentHelath
// computerMaxHealth
// userPokemonSelection
// computerPokemonSelection
// The process of a battle is as follows:
// User clicks attack
// Computer health is decreased
// if the computer health is <= 0 user wins
// Otherwise the computer player attacks
// User health decreases
// if the user health <= 0 computer wins
// Otherwise user clicks attack and the whole thing happens again
 

// There are things you can add to the functionality of this game to make it more complicated.

// Each Pokemon could have a unique set of attacks
// The attacks could do a range of randomized damage rather than the same amount each time
// You could add moves that weaken the opponent or strengthen yourself
// You could add items that allow for healing
// You could add moves that make the other Pokemon skip their move
// You could make each move only be usable a certain amount of times (like the real Pokemon games)
// You could add a "catch" mechanism that allows you to throw a Pokeball when the enemy has low health and try to catch it.
 

function makeSelection(makeSelections){     // selcted pokemon with health and value of health location send them to the battle page as soon as selected.
    Cookies.set("pokemon", makeSelections);
    location.href = "pages/battle.html";
    Cookies.set('health', '100')
}

