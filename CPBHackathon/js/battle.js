// The Pokemon they selected
let pokemon = Cookies.get("pokemon");
let health = Cookies.get("health");

if (pokemon.length) {
    let selectedPokemon = document.getElementById('selectedPokemon');
    selectedPokemon.innerHTML += `<h2>${pokemon}</h2>`;  //+= will not delete old value it will add the old and the new value REMEMBER this attack button wouldnt show up because it was just+.

    image = document.createElement("img")
    selectedPokemon.append(image);

    if (pokemon === "Pikachu") {
        image.setAttribute("src", "../img/pika.png");
    } else if (pokemon === "Charmander") {
        image.setAttribute("src", "../img/char.png");
    } else if (pokemon === "Squirtle") {
        image.setAttribute("src", "../img/squirtle.png")
    }
}
else{
    document.write('NightNight')
}
//function attached to attack button that attacks and decreases the computers health
//The enemy Pokemon - needs a cookie to store health and every time he is attacked he loses health 
function decreaseHealth(){   //function meant to bring down health of compHealth 
    let oldHealth = Cookies.get('compHealth');   //stores comps health 
    let newHealth = oldHealth - 30;   //brings health of comp down by 25%
    let compProgress = document.getElementById('compHealth');   //connects comps health to progress bar
    compProgress.value = newHealth;
    decreasUserHealth();   //adds function below to 
    // Once either Pokemon reaches 0 health points the match is over and a winner is declared
    if(newHealth <= 0){
        winner();
    }
    Cookies.set('compHealth', newHealth);
}
Cookies.set ('compHealth', '100');

function winner(){
    document.write('Winner');
}
// The computer player should attack after any time the user attacks
//  Their Pokemon health points 
function decreasUserHealth(){   //function meant to bring down health of user 
    let oldHealth = Cookies.get('health');   //stores users health
    let newHealth = oldHealth - 20;   //brings health of user down by 20%
    let userHealth = document.getElementById('userHealth');   //connects user health to progress bar
    userHealth.value = newHealth;
  // Once either Pokemon reaches 0 health points the match is over and a winner is declared
    if(newHealth <= 0){   //if health reaches 0 game over page pops up
        gameOver();
    }
    Cookies.set('health', newHealth);
}
function gameOver(){
    document.write('Loser');  //when gameover page pops up it says loser 
}


