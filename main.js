// Variables

var game = {
    parti: 0,
    energy: 0,
    quarks: 0,
    partiPerClick: 0.01,
    clicks: 0,
    u2mult: 1,
    u3mult: 1,
    u4mult: 1,
    u5mult: 1,
    u6mult: 1,
    u7mult: 1,
    u8mult: 1,
    u15mult: 1,
    upgrade1Bought: 0,
    upgrade2Bought: 0,
    upgrade3Bought: 0,
    upgrade4Bought: 0,
    upgrade5Bought: 0,
    upgrade6Bought: 0,
    upgrade7Bought: 0,
    upgrade8Bought: 0,
    upgrade9Bought: 0,
    upgrade10Bought: 0,
    upgrade11Bought: 0,
    upgrade12Bought: 0,
    upgrade13Bought: 0,
    upgrade14Bought: 0,
    upgrade15Bought: 0,
    power: 0,
    totalParti: 0,
    partiPerSecond: 0,
    powerPerSecond: 0,
    gen1: {
        cost: 10,
        costMult: 1.5,
        amount: 0,
        bought: 0,
        mult: 1,
        production: 0,
        productionMult: 1,
    },
    gen2: {
        cost: 1e4,
        costMult: 1.5,
        amount: 0,
        bought: 0,
        mult: 1,
        production: 0,
        productionMult: 1,
    },
    powergen1: {
        cost: 50,
        costMult: 2,
        amount: 0,
        bought: 0,
        mult: 1,
        production: 0,
        productionMult: 1,
    },
    genSpeed: 1000,
    version: 0.2,
    playTime: 0,
    currentChallenge: "none",
    caps: {
        firstRow: 10,
        secondRow: 20,
    },
    clickCap: 10000,
    clickCapCost: 1000,
}

var opts = {
    selectedTheme: "normal",
    defaultTab: "upgrades",
}

function format(amount) { // Formatting
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 3) return amount.toFixed(2);
    return mantissa.toFixed(2) + "e" + power
}

function clickParticles() { 
    if (game.clicks < game.clickCap) { // Click Function
    game.parti += game.partiPerClick;
    game.clicks++;
    updatePartiPerClick();
    document.getElementById("clickAmount").innerHTML = "You've clicked " + format(game.clicks) + " times.";
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles."
   } else if (game.clicks > game.clickCap) {
    alert("Cheated particles are corruptive. Beware!")
   } else if (game.clicks >= game.clickCap && (game.partiPerSecond = 0)) {
    alert("Uh oh, you've been softlocked. Try buying a generator now!")
   } else if (game.clicks = game.clickCap && (game.partiPerSecond > 0)) {
    alert("You've reached the click cap! This is to prevent autoclicking abuse. From now on, you'll have to rely on generators. Don't worry though, there'll be upgrades later on to increase this cap!")
   } 
}

function buyUpgrade1() {
    if (game.parti >= 0.25) {
    if (game.upgrade1Bought != 0) return;
    // if (game.upgrade1Bought = 0) {
    game.parti -= 0.25;
    // game.partiPerClick *= 2;
    document.getElementById("buttonupgrade1").style.backgroundColor = "lightgrey"
    updatePartiPerClick();
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
    document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click."
    game.upgrade1Bought = 1;
    // }
    }
}


function buyUpgrade2() {
   if (game.parti >= 1.5) {
    if (game.upgrade2Bought != 0) return;
       game.parti -= 1.5;
       game.u2mult = Math.sqrt(game.clicks * 2) / 5;
       document.getElementById("buttonupgrade2").style.backgroundColor = "lightgrey"
       updatePartiPerClick();
       if (game.u2mult > game.caps.firstRow) {
          game.u2mult = game.caps.firstRow;
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
        if (game.upgrade3Bought != 0) return;
        game.parti -= 4;
        game.u3mult = Math.log10(game.parti) + 2;
        document.getElementById("buttonupgrade3").style.backgroundColor = "lightgrey"
        updatePartiPerClick();
        if (game.u3mult > game.caps.firstRow) {
            game.u3mult = game.caps.firstRow;
        } else if (game.u3mult < 1) {
            game.u3mult = 1;
        }
        game.upgrade3Bought = 1;
        document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
        document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click."
    }
}

function buyUpgrade4() {
    if (game.parti >= 15) {
        if (game.upgrade4Bought != 0) return;
        game.parti -= 15;
       // game.gen1.productionMult *= 2;
        game.u4mult = 2;
        document.getElementById("buttonupgrade4").style.backgroundColor = "lightgrey"
        updatePartiPerSecond();
        game.upgrade4Bought = 1;
    }
}

function buyUpgrade5() {
    if (game.parti >= 30) {
        if (game.upgrade5Bought != 0) return;
        game.parti -= 30;
        game.u5mult = Math.sqrt(game.gen1.bought * 2);
        if (game.u5mult > game.caps.firstRow) {
            game.u5mult = game.caps.firstRow;
        } else if (game.u5mult < 1) {
            game.u5mult = 1;
        }
        document.getElementById("buttonupgrade5").style.backgroundColor = "lightgrey"
        updatePartiPerSecond();
        game.upgrade5Bought = 1;
    }
}

function buyUpgrade6() {
    if (game.parti >= 50) {
        if (game.upgrade6Bought != 0) return;
        game.parti -= 50;
        game.u6mult = 2;
        document.getElementById("buttonupgrade6").style.backgroundColor = "lightgrey"
        updatePowerPerSecond();
        game.upgrade6Bought = 1;
    }
}

function buyUpgrade7() {
    if (game.parti >= 100) {
        if (game.upgrade7Bought != 0) return;
        game.parti -= 100;
        game.u7mult = Math.log10(Math.pow(game.power, 4));
        if (game.u7mult > 20) {
            game.u7mult = 20;
        } else if (game.u7mult < 1) {
            game.u7mult = 1;
        }
        document.getElementById("buttonupgrade7").style.backgroundColor = "lightgrey"
        updatePartiPerClick();
        game.upgrade7Bought = 1;
    }

}

function buyUpgrade8() {
    if (game.parti >= 250) {
        if (game.upgrade8Bought != 0) return;
        game.parti -= 250;
        game.u8mult = Math.log10(Math.pow(game.power, 4));
        if (game.u8mult > 20) {
            game.u8mult = 20;
        } else if (game.u8mult < 1) {
            game.u8mult = 1;
        }
        document.getElementById("buttonupgrade8").style.backgroundColor = "lightgrey"
        updatePartiPerSecond();
        game.upgrade8Bought = 1;
    }
}

function buyUpgrade9() {
    if (game.parti >= 600) {
        if (game.upgrade9Bought != 0) return;
        game.parti -= 600;
        game.u2mult = Math.sqrt(game.clicks ^ 2);
        if (game.u2mult > game.caps.firstRow) {
            game.u2mult = game.caps.firstRow;
         } else if (game.u2mult < 1) {
             game.u2mult = 1;
         }
         updatePartiPerClick();
        document.getElementById("buttonupgrade9").style.backgroundColor = "lightgrey"
        game.upgrade9Bought = 1;
    }
}

function buyUpgrade10() {
    if (game.parti >= 1000) {
        if (game.upgrade10Bought != 0) return;
        game.parti -= 1000;
        if (game.u3mult > game.caps.firstRow) {
            game.u3mult = game.caps.firstRow;
        } else if (game.u3mult < 1) {
            game.u3mult = 1;
        }
        updatePartiPerClick();
        document.getElementById("buttonupgrade10").style.backgroundColor = "lightgrey"
        game.upgrade10Bought = 1;
    }
}

function buyUpgrade11() {
    if (game.parti >= 2500) {
       if (game.upgrade11Bought != 0) return;
       game.parti -= 2500;
       game.caps.firstRow = 100;
       updatePartiPerClick();
       updatePartiPerSecond();
       document.getElementById("buttonupgrade11").style.backgroundColor = "lightgrey"
       game.upgrade11Bought = 1;
    }
}

function buyUpgrade12() {
    if (game.parti >= 6000) {
        if (game.upgrade12Bought != 0) return;
        game.parti -= 6000;
        if (game.powergen1.bought % 5 == 0) {
            game.powergen1.productionMult = Math.pow(2, game.powergen1.bought / 5);
        }
        updatePowerPerSecond();
        document.getElementById("buttonupgrade12").style.backgroundColor = "lightgrey"
        game.upgrade12Bought = 1;
    }
}

function buyUpgrade13() {
    if (game.parti >= 15000) {
        if (game.upgrade13Bought != 0) return;
        game.parti -= 15000;
        game.u7mult = Math.sqrt(Math.pow(game.power, 4));
        if (game.u7mult > 20) {
            game.u7mult = 20;
        } else if (game.u7mult < 1) {
            game.u7mult = 1;
        }
        updatePartiPerClick();
        document.getElementById("buttonupgrade13").style.backgroundColor = "lightgrey"
        game.upgrade13Bought = 1;
    }
}

function buyUpgrade14() {
    if (game.parti >= 40000) {
        if (game.upgrade14Bought != 0) return;
        game.parti -= 40000;
        game.u8mult = Math.sqrt(Math.pow(game.power, 4));
        if (game.u8mult > 20) {
            game.u8mult = 20;
        } else if (game.u8mult < 1) {
            game.u8mult = 1;
        }
        updatePartiPerSecond();
        document.getElementById("buttonupgrade14").style.backgroundColor = "lightgrey"
        game.upgrade14Bought = 1;
    }
}

function buyUpgrade15() {
    if (game.parti >= 80000) {
        if (game.upgrade15Bought != 0) return;
        document.getElementById("buttonupgrade15").style.backgroundColor = "lightgrey"
        game.parti -= 80000;
        game.u15mult = Math.cbrt(game.gen1.bought);
        if (game.u15mult < 1) {
            game.u15mult = 1;
        }
        game.upgrade15Bought = 1;
    }
}

function clickCapUpgrade() {
    if (game.parti >= game.clickCapCost) {
        game.parti -= game.clickCapCost;
        game.clickCap *= 5;
        game.clickCapCost *= 10;
        document.getElementById("clickCap").innerHTML = "You can only clickc" + format(game.clickCap) + " times."
    }
}

function buyGenerator1() {
    if (game.parti >= game.gen1.cost) {
        game.parti -= game.gen1.cost;
        game.gen1.amount++;
        game.gen1.bought++;
        game.gen1.cost *= game.gen1.costMult;
        game.gen1.production = 0.2 * game.gen1.amount * game.gen1.productionMult;
        /* if (game.upgrade12Bought != 0) {
            if (game.gen1.bought % 5 == 0) {
                game.gen1.mult = Math.pow(2, game.gen1.bought / 5);
            }
        } */
        updatePartiPerSecond();
        document.getElementById("gen1").innerHTML = "1st Particle Generator x" + format(game.gen1.productionMult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
        document.getElementById("gen1Buy").innerHTML = "Cost: " + format(game.gen1.cost);
        document.getElementById("displayPartiPerSecond").innerHTML = "You gain " + format(game.gen1.production) + " Particles per tick passively."
    }
}

function buyGenerator2() {
    if (game.parti >= game.gen2.cost) {
        game.parti -= game.gen2.cost;
        game.gen2.amount++;
        game.gen2.bought++;
        game.gen2.cost *= game.gen2.costMult;
        game.gen2.production = 0.2 * game.gen2.amount * game.gen2.productionMult;
        updatePartiPerSecond();
        document.getElementById("gen2").innerHTML = "2nd Particle Generator x" + format(game.gen2.productionMult) + " (" + format(game.gen2.amount) + ") " + format(game.gen2.production) + " Generators/tick"
        document.getElementById("gen2Buy").innerHTML = "Cost: " + format(game.gen2.cost);
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
        if (game.upgrade12Bought != 0) {
            if (game.powergen1.bought % 5 == 0) {
                game.powergen1.productionMult = Math.pow(2, game.powergen1.bought / 5);
            }
        }
        document.getElementById("powergen1").innerHTML = "1st Power Generator x" + format(game.powergen1.productionMult) + " (" + format(game.powergen1.amount) + ") " + format(game.powergen1.production) + " Power/tick"
        document.getElementById("powergen1Buy").innerHTML = "Cost: " + format(game.powergen1.cost);
        document.getElementById("displayPowerPerSecond").innerHTML = "You gain " + format(game.powergen1.production) + " Power per tick."
    }
}

function buyPowerGenerator2() {

}

function generateParti() {
    if (game.gen1.amount >= 1) {
        game.parti += game.gen1.production;
    }
    if (game.gen2.amount >= 1) {
        game.parti += game.gen2.production;
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
    generate1stGen();
    document.getElementById("powerCount").innerHTML = "You have " + format(game.power) + " Power."
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
}, game.genSpeed)
  
var updateLoop = window.setInterval(function() {
    updatePartiPerClick();
    updatePartiPerSecond();
    updatePowerPerSecond();
    update1stGenPerSecond();
}, 100)

function updatePartiPerSecond() {
    game.partiPerSecond = game.gen1.production;
    // Upgrade 5
    if (game.upgrade5Bought != 0) {
    game.u5mult = Math.sqrt(game.gen1.bought * 2);
    }
    if (game.u5mult > game.caps.firstRow) {
        game.u5mult = game.caps.firstRow;
    } else if (game.u5mult < 1) {
        game.u5mult = 1;
    }
    // Upgrade 8
    if (game.upgrade14Bought != 0) {
        game.u8mult = Math.sqrt(Math.pow(game.power, 4));
    } else if (game.upgrade8Bought != 0) {
        game.u8mult = Math.log10(Math.pow(game.power, 4));
    }
    if (game.u8mult > 20) {
        game.u8mult = 20;
    } else if (game.u8mult < 1) {
        game.u8mult = 1;
    }
    game.gen1.productionMult = game.u4mult * game.u5mult * game.u8mult;
    game.gen1.production = 0.2 * game.gen1.amount * game.gen1.productionMult;
    document.getElementById("gen1").innerHTML = "1st Particle Generator x" + format(game.gen1.mult * game.gen1.productionMult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
    document.getElementById("displayPartiPerSecond").innerHTML = "You gain " + format(game.partiPerSecond) + " Particles per tick passively."
}

function updatePowerPerSecond() {
    game.powerPerSecond = game.powergen1.production;
    game.u15mult = Math.cbrt(game.gen1.bought);
    if (game.u15mult < 1) {
        game.u15mult = 1;
    }
    game.powergen1.productionMult = game.u6mult * game.u15mult;
    game.powergen1.production = 0.01 * game.powergen1.amount * game.powergen1.productionMult;
    document.getElementById("powergen1").innerHTML = "1st Power Generator x" + format(game.powergen1.productionMult) + " (" + format(game.powergen1.amount) + ") " + format(game.powergen1.production) + " Power/tick"
    document.getElementById("displayPowerPerSecond").innerHTML = "You gain " + format(game.powerPerSecond) + " Power per tick."
}

function updatePartiPerClick() {
    // Upgrade 2
    if (game.upgrade9Bought != 0) {
        game.u2mult = Math.sqrt(game.clicks ^ 2);
    } else if (game.upgrade2Bought != 0) {
        game.u2mult = Math.sqrt(game.clicks * 2) / 5;
    } 
    if (game.u2mult > game.caps.firstRow) {
        game.u2mult = game.caps.firstRow;
     } else if (game.u2mult < 1) {
         game.u2mult = 1;
     }
    // Upgrade 3
    if (game.upgrade10Bought != 0) {
        game.u3mult = Math.sqrt(game.parti) + 2;
    } else if (game.upgrade3Bought != 0) {
        game.u3mult = Math.log10(game.parti) + 2;
    }
    if (game.u3mult > game.caps.firstRow) {
        game.u3mult = game.caps.firstRow;
    } else if (game.u3mult < 1) {
        game.u3mult = 1;
    }
    // Upgrade 7
    if (game.upgrade13Bought != 0) {
        game.u7mult = Math.sqrt(Math.pow(game.power, 4));
    } else if (game.upgrade7Bought != 0) {
        game.u7mult = Math.log10(Math.pow(game.power, 4));
    } 
    if (game.u7mult > 20) {
        game.u7mult = 20;
    } else if (game.u7mult < 1) {
        game.u7mult = 1;
    }
    game.partiPerClick = 0.01 * (game.upgrade1Bought + 1) * game.u2mult * game.u3mult * game.u7mult;
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
    document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click.";
}

function update1stGenPerSecond() {
    game.gen2.productionMult = 1;
    game.gen2.production = 0.2 * game.gen2.amount * game.gen2.productionMult;
}

function generate1stGen() {
    game.gen1.amount += game.gen2.production;
    document.getElementById("gen1").innerHTML = "1st Particle Generator x" + format(game.gen1.mult * game.gen1.productionMult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
}

function tab(tab) {
  document.getElementById("Generators").style.display = "none"
  document.getElementById("Upgrades").style.display = "none"
  document.getElementById("Options").style.display = "none"
  document.getElementById("Stats").style.display = "none"
  document.getElementById("Achievements").style.display = "none"
  document.getElementById("Challenges").style.display = "none"
  document.getElementById("Quarks").style.display = "none"
  document.getElementById(tab).style.display = "inline"
}

tab("Upgrades");

function challengeReset() {

}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("gameSave", JSON.stringify(game))
  }, 15000)
  
var savegame = JSON.parse(localStorage.getItem("gameSave"))
if (savegame !== null) {
    game = savegame
} 

function startChallenge(chall, goal, cost) {
if (game.parti >= cost) {
    if (confirm("Are you sure you want to start this challenge? You will have to perform a Particle reset.")) {
    challengeReset();
    } else {
        return;
    }
    if (chall == 1) {
       game.parti = -5
    } else if (chall == 2) {

    } else if (chall == 3) {

    }
}
    if (game.parti >= goal) {

    }
}

function updateAll() {
    document.getElementById("clickAmount").innerHTML = "You've clicked " + format(game.clicks) + " times.";
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles."
    document.getElementById("powerCount").innerHTML = "You have " + format(game.power) + " Power."
    document.getElementById("gen1").innerHTML = "1st Particle Generator x" + format(game.gen1.mult * game.gen1.productionMult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
    document.getElementById("displayPartiPerSecond").innerHTML = "You gain " + format(game.partiPerSecond) + " Particles per tick passively."
    document.getElementById("powergen1").innerHTML = "1st Power Generator x" + format(game.powergen1.productionMult) + " (" + format(game.powergen1.amount) + ") " + format(game.powergen1.production) + " Power/tick"
    document.getElementById("displayPowerPerSecond").innerHTML = "You gain " + format(game.powerPerSecond) + " Power per tick."
    document.getElementById("gen2").innerHTML = "2nd Particle Generator x" + format(game.gen2.productionMult) + " (" + format(game.gen2.amount) + ") " + format(game.gen2.production) + " Generators/tick"
    document.getElementById("gen2Buy").innerHTML = "Cost: " + format(game.gen2.cost);
    document.getElementById("clickCap").innerHTML = "You can only click " + format(game.clickCap) + " times.";
    if (game.upgrade1Bought != 0) {
        document.getElementById("buttonupgrade1").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade2Bought != 0) {
        document.getElementById("buttonupgrade2").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade3Bought != 0) {
        document.getElementById("buttonupgrade3").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade4Bought != 0) {
        document.getElementById("buttonupgrade4").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade5Bought != 0) {
        document.getElementById("buttonupgrade5").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade6Bought != 0) {
        document.getElementById("buttonupgrade6").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade7Bought != 0) {
        document.getElementById("buttonupgrade7").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade8Bought != 0) {
        document.getElementById("buttonupgrade8").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade9Bought != 0) {
        document.getElementById("buttonupgrade9").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade10Bought != 0) {
        document.getElementById("buttonupgrade10").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade11Bought != 0) {
        document.getElementById("buttonupgrade11").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade12Bought != 0) {
        document.getElementById("buttonupgrade12").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade13Bought != 0) {
        document.getElementById("buttonupgrade13").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade14Bought != 0) {
        document.getElementById("buttonupgrade14").style.backgroundColor = "lightgrey";
    }
    if (game.upgrade15Bought != 0) {
        document.getElementById("buttonupgrade15").style.backgroundColor = "lightgrey";
    }
}

updateAll();