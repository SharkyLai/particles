var game = {
    parti: 0,
    partiPerClick: 0.01,
    upgrade1Bought: 0,
}

function format(amount) {
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 3) return amount.toFixed(2);
    return mantissa.toFixed(2) + "e" + power
  }

function clickParticles() {
    game.parti += game.partiPerClick;
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles."
}

function buyUpgrade1() {
    if (game.parti >= 0.5) {
        // if (game.upgrade1Bought = 0) {
        game.parti -= 0.5;
        game.partiPerClick *= 2;
        game.upgrade1Bought += 1;
        document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
        document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click."
        // }
    }
}

function buyUpgrade2() {
   
}