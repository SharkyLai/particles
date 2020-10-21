var game = {
    parti: 0,
    partiPerClick: 0.01,
    clicks: 0,
    upgrade1Bought: 0,
    u2mult: 1,
    u3mult: 1,
    upgrade2Bought: 0,
    upgrade3Bought: 0,
}

function format(amount) {
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 3) return amount.toFixed(2);
    return mantissa.toFixed(2) + "e" + power
  }

function clickParticles() {
    game.parti += game.partiPerClick;
    game.clicks++;
    if (game.upgrade2Bought = 1) {
    game.u2mult = Math.sqrt(game.clicks * 2) / 5;
    }
    if (game.upgrade3Bought = 1) {
    game.u3mult = Math.log10(game.parti) + 2;
    }
    
    updatePartiPerClick();
    document.getElementById("clickAmount").innerHTML = "You've clicked " + format(game.clicks) + " times.";
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles."
}

function buyUpgrade1() {
    if (game.parti >= 0.5) {
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