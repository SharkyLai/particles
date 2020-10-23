// Variables

var game = {
    parti: 0,
    partiPerClick: 0.01,
    clicks: 0,
    u2mult: 1,
    u3mult: 1,
    upgrade1Bought: 0,
    upgrade2Bought: 0,
    upgrade3Bought: 0,
    power: 0,
    gen1: {
        cost: 10,
        costMult: 2,
        amount: 0,
        bought: 0,
        mult: 1,
        production: 0,
        productionMult: 1,
    },
    powergen1: {
        cost: 50,
        costMult: 4,
        amount: 0,
        bought: 0,
        mult: 1,
        production: 0,
        productionMult: 1,
    },
    genSpeed: 1000,
}

function format(amount) { // Formatting
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 3) return amount.toFixed(2);
    return mantissa.toFixed(2) + "e" + power
}

function clickParticles() { // Click Function
    game.parti += game.partiPerClick;
    game.clicks++;
   /* if (game.upgrade2Bought = 1) {
    game.u2mult = Math.sqrt(game.clicks * 2) / 5;
    }
    if (game.upgrade3Bought = 1) {
    game.u3mult = Math.log10(game.parti) + 2;
    } */
    
    updatePartiPerClick();
    document.getElementById("clickAmount").innerHTML = "You've clicked " + format(game.clicks) + " times.";
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles."
}

function buyUpgrade1() {
    if (game.parti >= 0.5) {
        if (game.upgrade1Bought = 1) return;
        // if (game.upgrade1Bought = 0) {
        game.parti -= 0.5;
        // game.partiPerClick *= 2;
        game.upgrade1Bought = 1;
        updatePartiPerClick();
        document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
        document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click."
        // }
    }
}

function buyUpgrade2() {
   if (game.parti >= 1.5) {
       game.parti -= 1.5;
       game.u2mult = Math.sqrt(game.clicks * 2) / 5;
      /*  if (game.u2mult < 10) {
           for (i = 0; i = game.clicks; i++) {
           updatePartiPerClick();
           }
       } */
       updatePartiPerClick();
       if (game.u2mult > 10) {
          game.u2mult = 10;
       } else if (game.u2mult < 1) {
           game.u2mult = 1;
       }
       game.upgrade2Bought = 1;
       document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
       document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click."
   }
}

function buyUpgrade3() {
    if (game.parti >= 4) {
        game.parti -= 4;
        game.u3mult = Math.log10(game.parti) + 2;
       /* if (game.u3mult < 10) {
            for (i = 0; i = game.clicks; i++) {
               updatePartiPerClick();
            }
        } */
        updatePartiPerClick();
        if (game.u3mult > 10) {
            game.u3mult = 10;
        } else if (game.u3mult < 1) {
            game.u3mult = 1;
        }
        game.upgrade3Bought = 1;
        document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
        document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click."
    }
}

function buyGenerator1() {
    if (game.parti >= game.gen1.cost) {
        game.parti -= game.gen1.cost;
        game.gen1.amount++;
        game.gen1.bought++;
        game.gen1.cost *= game.gen1.costMult;
        game.gen1.production = 0.05 * game.gen1.amount * game.gen1.productionMult;
        // game.parti += game.gen1.production;
        document.getElementById("gen1").innerHTML = "1st Particle Generator " + format(game.gen1.mult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
        document.getElementById("gen1Buy").innerHTML = "Cost: " + format(game.gen1.cost);
        document.getElementById("displayPartiPerSecond").innerHTML = "You gain " + format(game.gen1.production) + " Particles per tick passively."
    }
}

function buyPowerGenerator1() {
    if (game.parti >= game.powergen1.cost) {
        game.parti -= game.powergen1.cost;
        game.powergen1.amount++;
        game.powergen1.bought++;
        game.powergen1.cost *= game.powergen1.costMult;
        game.powergen1.production = 0.01 * game.powergen1.amount * game.powergen1.productionMult;
        // game.parti += game.gen1.production;
        document.getElementById("powergen1").innerHTML = "1st Particle Generator " + format(game.powergen1.mult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
        document.getElementById("powergen1Buy").innerHTML = "Cost: " + format(game.powergen1.cost);
        document.getElementById("displayPowerPerSecond").innerHTML = "You gain " + format(game.powergen1.production) + " Power per tick."
    }
}

function generateParti() {
    if (game.gen1.amount >= 1) {
    game.parti += game.gen1.production;
    }
}

function generatePower() {
    if (game.powergen1.amount >= 1) {
        game.power += game.powergen1.production;
    }
}

var gameLoop = window.setInterval(function() {
    generateParti();
    generatePower();
    document.getElementById("powerCount").innerHTML = "You have " + format(game.power) + " Power."
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
  }, game.genSpeed)
  

/* if (game.u2mult < 10) {
    for (i = 0; i = game.clicks; i++) {
        updatePartiPerClick();
    }
}

if (game.u3mult < 10) {
    for (i = 0; i = game.clicks; i++) {
        updatePartiPerClick();
    }
} */

function updatePartiPerClick() {
    game.partiPerClick = 0.01 * (game.upgrade1Bought + 1) * game.u2mult * game.u3mult;
}

function tab(tab) {
  document.getElementById("Generators").style.display = "none"
  document.getElementById("Upgrades").style.display = "none"
  document.getElementById("Options").style.display = "none"
  document.getElementById("Stats").style.display = "none"
  document.getElementById("Achievements").style.display = "none"
  document.getElementById("Quarks").style.display = "none"
  document.getElementById(tab).style.display = "inline"
}

tab("Upgrades")