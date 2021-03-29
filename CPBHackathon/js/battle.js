let pokemon = Cookies.get("pokemon");
let health = Cookies.get("health");

if (pokemon.length) {
    let selectedPokemon = document.getElementById('selectedPokemon');
    selectedPokemon.innerHTML += `<h2>FIGHT ${pokemon}</h2>`;  //+= will not delete old value it will add the old and the new value REMEMBER this attack button wouldnt show up because it was just+.

    image = document.createElement("img")
    selectedPokemon.appendChild(image);

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

function decreaseHealth(){   //function meant to bring down health of compHealth 
    let oldHealth = Cookies.get('compHealth');
    let newHealth = oldHealth - 25;
    let compProgress = document.getElementById('compHealth');
    compHealth.value = newHealth;
    if(newHealth <= 0){
        winner();
    }
    Cookies.set('compHealth', newHealth);
}
Cookies.set ('compHealth', '100');

function winner(){
    document.write('Winner');
}

