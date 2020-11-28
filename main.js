// imports and exports

// Variables

var game = {
    parti: 0,
    energy: 0,
    positiveEnergy: 0,
    negativeEnergy: 0,
    quarks: 0,
    partiPerClick: 0.01,
    clicks: 0,
    u1mult: 1,
    u2mult: 1,
    u3mult: 1,
    u4mult: 1,
    u5mult: 1,
    u6mult: 1,
    u7mult: 1,
    u8mult: 1,
    u15mult: 1,
    enMult: 1,
    enUpgCost: 0,
    enUpgMult: {
        u11mult: 1,
    },
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
    upgrade16Bought: 0,
    upgrade17Bought: 0,
    upgrade18Bought: 0,
    upgrade19Bought: 0,
    upgrade20Bought: 0,
    power: 0.01,
    powerMult: 0,
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
        costMult: 2.5,
        amount: 0,
        bought: 0,
        mult: 1,
        production: 0,
        productionMult: 1,
    },
    gen3: {
        cost: 1e12,
        costMult: 5,
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
    powergen2: {
        cost: 1.5e3,
        costMult: 5,
        amount: 0,
        bought: 0,
        mult: 1,
        production: 0,
        productionMult: 1,
    },
    genSpeed: 1000,
    version: 0.3,
    playTime: 0,
    currentChallenge: "none",
    challGoal: 0,
    chall1Comp: 0,
    chall2Comp: 0,
    caps: {
        firstRow: 10,
        secondRow: 20,
        powerMult: 100,
    },
    clickCap: 10000,
    clickCapCost: 1000,
    achs: {
        ach11: 0,
        ach12: 0,
        ach13: 0,
        ach14: 0,
        ach15: 0,
        ach16: 0,
        ach17: 0,
        ach18: 0,
        ach21: 0,
        ach22: 0,
        ach23: 0,
        ach24: 0,
        ach25: 0,
        ach26: 0,
        ach27: 0,
        ach28: 0,
    },
    rep: {
        upg11: {
            cost: 1e10,
            costMult: 10,
            bought: 0,
            mult: 1,
        },
        upg12: {
            cost: 1e10,
            costMult: 100,
            bought: 0,
            mult: 1,
        },
    },
    emp: {
        upg11: {
            cost: 1e4,
            costMult: 5,
            bought: 0,
            mult: 1,
        },
        upg21: {
            cost: 1e5,
            costMult: 10,
            bought: 0,
            mult: 1,
        }
    }
}

var challCheck;

var opts = {
    selectedTheme: "normal",
    defaultTab: "Upgrades",
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
    checkAchs(11);
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
    game.u1mult = 2;
    // game.partiPerClick *= 2;
    document.getElementById("buttonupgrade1").style.backgroundColor = "lightgrey"
    updatePartiPerClick();
    checkAchs(16);
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
       checkAchs(16);
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
        checkAchs(16);
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
        checkAchs(16);
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
        checkAchs(16);
        document.getElementById("buttonupgrade5").style.backgroundColor = "lightgrey"
        updatePartiPerSecond();
        game.upgrade5Bought = 1;
    }
}

function buyUpgrade6() {
    if (game.parti >= 80) {
        if (game.upgrade6Bought != 0) return;
        game.parti -= 80;
        game.u6mult = 2;
        checkAchs(16);
        document.getElementById("buttonupgrade6").style.backgroundColor = "lightgrey"
        updatePowerPerSecond();
        game.upgrade6Bought = 1;
    }
}

function buyUpgrade7() {
    if (game.parti >= 150) {
        if (game.upgrade7Bought != 0) return;
        game.parti -= 150;
        game.u7mult = Math.log10(Math.pow(game.power, 4));
        if (game.u7mult > game.caps.secondRow) {
            game.u7mult = game.caps.secondRow;
        } else if (game.u7mult < 1) {
            game.u7mult = 1;
        }
        checkAchs(16);
        document.getElementById("buttonupgrade7").style.backgroundColor = "lightgrey"
        updatePartiPerClick();
        game.upgrade7Bought = 1;
    }

}

function buyUpgrade8() {
    if (game.parti >= 400) {
        if (game.upgrade8Bought != 0) return;
        game.parti -= 400;
        game.u8mult = Math.log10(Math.pow(game.power, 4));
        if (game.u8mult > game.caps.secondRow) {
            game.u8mult = game.caps.secondRow;
        } else if (game.u8mult < 1) {
            game.u8mult = 1;
        }
        checkAchs(16);
        document.getElementById("buttonupgrade8").style.backgroundColor = "lightgrey"
        updatePartiPerSecond();
        game.upgrade8Bought = 1;
    }
}

function buyUpgrade9() {
    if (game.parti >= 1000) {
        if (game.upgrade9Bought != 0) return;
        game.parti -= 1000;
        game.u2mult = Math.sqrt(Math.pow(game.clicks, 2));
        if (game.u2mult > game.caps.firstRow) {
            game.u2mult = game.caps.firstRow;
         } else if (game.u2mult < 1) {
             game.u2mult = 1;
         }
         checkAchs(16);
         updatePartiPerClick();
        document.getElementById("buttonupgrade9").style.backgroundColor = "lightgrey"
        game.upgrade9Bought = 1;
    }
}

function buyUpgrade10() {
    if (game.parti >= 4000) {
        if (game.upgrade10Bought != 0) return;
        game.parti -= 4000;
        if (game.u3mult > game.caps.firstRow) {
            game.u3mult = game.caps.firstRow;
        } else if (game.u3mult < 1) {
            game.u3mult = 1;
        }
        checkAchs(16);
        updatePartiPerClick();
        document.getElementById("buttonupgrade10").style.backgroundColor = "lightgrey"
        game.upgrade10Bought = 1;
    }
}

function buyUpgrade11() {
    if (game.currentChallenge == 1) {
        return;
    }
    if (game.parti >= 8000) {
       if (game.upgrade11Bought != 0) return;
       game.parti -= 8000;
       game.caps.firstRow = 150;
       checkAchs(16);
       document.getElementById("buttonupgrade11").style.backgroundColor = "lightgrey"
       updatePartiPerClick();
       updatePartiPerSecond();
       game.upgrade11Bought = 1;
    }
}

function buyUpgrade12() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 15000) {
        if (game.upgrade12Bought != 0) return;
        game.parti -= 15000;
        if (game.powergen1.bought % 5 == 0) {
            game.powergen1.productionMult = Math.pow(2, game.powergen1.bought / 5);
        }
        updatePowerPerSecond();
        checkAchs(16);
        document.getElementById("buttonupgrade12").style.backgroundColor = "lightgrey"
        game.upgrade12Bought = 1;
    }
}

function buyUpgrade13() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 80000) {
        if (game.upgrade13Bought != 0) return;
        game.parti -= 80000;
        game.u7mult = Math.sqrt(Math.pow(game.power, 4));
        if (game.u7mult > game.caps.secondRow) {
            game.u7mult = game.caps.secondRow;
        } else if (game.u7mult < 1) {
            game.u7mult = 1;
        }
        updatePartiPerClick();
        checkAchs(16);
        document.getElementById("buttonupgrade13").style.backgroundColor = "lightgrey"
        game.upgrade13Bought = 1;
    }
}

function buyUpgrade14() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 200000) {
        if (game.upgrade14Bought != 0) return;
        game.parti -= 200000;
        game.u8mult = Math.sqrt(Math.pow(game.power, 4));
        if (game.u8mult > game.caps.secondRow) {
            game.u8mult = game.caps.secondRow;
        } else if (game.u8mult < 1) {
            game.u8mult = 1;
        }
        updatePartiPerSecond();
        checkAchs(16);
        document.getElementById("buttonupgrade14").style.backgroundColor = "lightgrey"
        game.upgrade14Bought = 1;
    }
}

function buyUpgrade15() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 1e6) {
        if (game.upgrade15Bought != 0) return;
        document.getElementById("buttonupgrade15").style.backgroundColor = "lightgrey"
        game.parti -= 1e6;
        game.u15mult = Math.cbrt(Math.pow(game.gen1.bought, 2));
        if (game.u15mult < 1) {
            game.u15mult = 1;
        }
        game.upgrade15Bought = 1;
        checkAchs(16);
    }
}

function buyUpgrade16() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 1e7) {
        if (game.upgrade16Bought != 0) return;
        game.parti -= 1e7;
        checkAchs(16);
        document.getElementById("buttonupgrade16").style.backgroundColor = "lightgrey"
        game.upgrade16Bought = 1;
    }
}

function buyUpgrade17() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 3e8) {
        if (game.upgrade17Bought != 0) return;
        game.parti -= 3e8;
        game.caps.secondRow = 250;
        checkAchs(16);
        document.getElementById("buttonupgrade17").style.backgroundColor = "lightgrey"
        game.upgrade17Bought = 1;
    }
}

function buyUpgrade18() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 5e9) {
        if (game.upgrade18Bought != 0) return;
        game.parti -= 5e9;
        game.u1mult = 500;
        game.u4mult = 10;
        game.u6mult = 10;
        checkAchs(16);
        document.getElementById("buttonupgrade18").style.backgroundColor = "lightgrey";
        game.upgrade18Bought = 1;
    }
}

function buyUpgrade19() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 1e13) {
        if (game.upgrade19Bought != 0) return;
        game.parti -= 1e13;
        checkAchs(16);
        game.powerMult = Math.pow((Math.log10(game.power) * Math.sqrt(game.power)), game.emp.upg21.mult);
        document.getElementById("buttonupgrade19").style.backgroundColor = "lightgrey";
        game.upgrade19Bought = 1;
    }
}

function buyUpgrade20() {
    if (game.currentChallenge == 1) return;
    if (game.parti >= 1e15) {
        if (game.upgrade20Bought != 0) return;
        game.parti -= 1e15;
        game.caps.powerMult = 10000;
        checkAchs(16);
        document.getElementById("buttonupgrade20").style.backgroundColor = "lightgrey";
        game.upgrade20Bought = 1;
    }
}

function buyRepUpgrade11() {
    if (game.parti >= game.rep.upg11.cost) {
        game.parti -= game.rep.upg11.cost;
        game.rep.upg11.mult *= 2;
        game.rep.upg11.cost *= game.rep.upg11.costMult;
        game.rep.upg11.bought++;
        document.getElementById("rep11").innerHTML = "Multiplies all Particle gain by 2. Currently: " + format(game.rep.upg11.mult) + "x Cost: " + format(game.rep.upg11.cost) + " Particles";
    }
}

function buyRepUpgrade12() {

}

function buyEmpowerment(id) {
    if (id == 11) {
        if (game.power > game.emp.upg11.cost) {
            game.power -= game.emp.upg11.cost;
            game.emp.upg11.cost *= game.emp.upg11.costMult;
            game.emp.upg11.bought++;
            game.emp.upg11.mult *= 2;
            document.getElementById("emp11").innerHTML = "All Power gain is multiplied by 2. Currently: " + format(game.emp.upg11.mult) + "x Cost: " + format(game.emp.upg11.cost) + " Power";
        }
    } else if (id == 21) {
        if (game.power > game.emp.upg21.cost) {
            game.power -= game.emp.upg21.cost;
            game.emp.upg21.cost *= game.emp.upg21.costMult;
            game.emp.upg21.bought++;
            game.emp.upg21.mult += 0.25;
            document.getElementById("emp21").innerHTML = "Increase the multiplier to clicking from Power's formula's exponent. Currently: " + format(game.emp.upg21.mult) + "x Cost: " + format(game.emp.upg21.cost) + " Power";
        }
    }

    if (game.power == 0) {
        game.power = 0.01;
    }
} 

function enUpg(id) {
    if (id == 11) {
        game.enUpgCost = 2;
        // game.enUpgMult.u11mult = 
    } else if (id == 12) {

    } else if (id == 13) {

    } else if (id == 14) {
        
    } else if (id == 15) {

    }
    if (game.energy >= game.enUpgCost) {
        game.energy -= game.enUpgCost;
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
        game.gen1.production = 0.2 * game.gen1.amount * game.gen1.productionMult * game.rep.upg11.mult;
        updatePartiPerSecond();
        checkAchs(12);
        document.getElementById("gen1").innerHTML = "1st Particle Generator x" + format(game.gen1.productionMult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
        document.getElementById("gen1Buy").innerHTML = "Cost: " + format(game.gen1.cost);
        document.getElementById("displayPartiPerSecond").innerHTML = "You gain " + format(game.gen1.production) + " Particles per tick passively."
    }
}

function buyGenerator2() {
    if (game.currentChallenge == 2) return;
    if (game.parti >= game.gen2.cost) {
        game.parti -= game.gen2.cost;
        game.gen2.amount++;
        game.gen2.bought++;
        game.gen2.cost *= game.gen2.costMult;
        game.gen2.production = 0.2 * game.gen2.amount * game.gen2.productionMult;
        updatePartiPerSecond();
        checkAchs(14);
        document.getElementById("gen2").innerHTML = "2nd Particle Generator x" + format(game.gen2.productionMult) + " (" + format(game.gen2.amount) + ") " + format(game.gen2.production) + " Generators/tick"
        document.getElementById("gen2Buy").innerHTML = "Cost: " + format(game.gen2.cost);
        document.getElementById("displayPartiPerSecond").innerHTML = "You gain " + format(game.gen1.production) + " Particles per tick passively."
    }
}

function buyGenerator3() {
    if (game.currentChallenge == 2) return;
    if (game.chall1Comp == 0) return;
    if (game.parti >= game.gen3.cost) {
        game.parti -= game.gen3.cost;
        game.gen3.amount++;
        game.gen3.bought++;
        game.gen3.cost *= game.gen3.costMult;
        game.gen3.production = 2 * game.gen3.amount * game.gen3.productionMult;
        updatePartiPerSecond();
        checkAchs(21);
        document.getElementById("gen3").innerHTML = "3rd Particle Generator x" + format(game.gen3.productionMult) + " (" + format(game.gen3.amount) + ") " + format(game.gen3.production) + " Generators/tick"
        document.getElementById("gen3Buy").innerHTML = "Cost: " + format(game.gen3.cost);
        document.getElementById("displayPartiPerSecond").innerHTML = "You gain " + format(game.gen1.production) + " Particles per tick passively."
    }
}

function buyPowerGenerator1() {
    if (game.parti >= game.powergen1.cost) {
        game.parti -= game.powergen1.cost;
        game.powergen1.amount++;
        game.powergen1.bought++;
        game.powergen1.cost *= game.powergen1.costMult;
        game.powergen1.production = 0.025 * game.powergen1.amount * game.powergen1.productionMult;
        if (game.upgrade12Bought != 0) {
            if (game.powergen1.bought % 5 == 0) {
                game.powergen1.productionMult = Math.pow(2, game.powergen1.bought / 5);
            }
        }
        checkAchs(13);
        document.getElementById("powergen1").innerHTML = "1st Power Generator x" + format(game.powergen1.productionMult) + " (" + format(game.powergen1.amount) + ") " + format(game.powergen1.production) + " Power/tick"
        document.getElementById("powergen1Buy").innerHTML = "Cost: " + format(game.powergen1.cost);
        document.getElementById("displayPowerPerSecond").innerHTML = "You gain " + format(game.powergen1.production) + " Power per tick."
    }
}

function buyPowerGenerator2() {
    if (game.currentChallenge == 2) return;
    if (game.power >= game.powergen2.cost) {
        game.power -= game.powergen2.cost;
        game.powergen2.amount++;
        game.powergen2.bought++;
        game.powergen2.cost *= game.powergen2.costMult;
        game.powergen2.production = 0.2 * game.powergen2.amount * game.powergen2.productionMult;
        checkAchs(18);
        document.getElementById("powergen2").innerHTML = "2nd Power Generator x" + format(game.powergen2.productionMult) + " (" + format(game.powergen2.amount) + ") " + format(game.powergen2.production) + " Generators/tick"
        document.getElementById("powergen2Buy").innerHTML = "Cost: " + format(game.powergen2.cost) + " Power";
        document.getElementById("displayPowerPerSecond").innerHTML = "You gain " + format(game.powergen1.production) + " Power per tick."
    }
}

function generateParti() {
    if (game.gen1.amount >= 1) {
        game.parti += game.gen1.production;
    }
    if (game.gen2.amount >= 1) {
        game.gen1.amount += game.gen2.production;
    }
    if (game.gen3.amount >= 1) {
        game.gen2.amount += game.gen3.production;
    }
}

function generatePower() {
    if (game.powergen1.amount >= 1) {
        game.power += game.powergen1.production;
    }
    if (game.powergen2.amount >= 1) {
        game.powergen1.amount += game.powergen2.production;
    } 
}

var gameLoop = window.setInterval(function() {
    generateParti();
    generatePower();
    generate1stGen();
    document.getElementById("powerCount").innerHTML = "You have " + format(game.power) + " Power, translated to a x" + format(game.powerMult) + " boost to clicking."
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
}, game.genSpeed)
  
var updateLoop = window.setInterval(function() {
    updatePartiPerClick();
    updatePartiPerSecond();
    updatePowerPerSecond();
    // update1stGenPerSecond();
}, 100)

var updatePlayTimeLoop = window.setInterval(function() {
    game.playTime++;
}, 1000)

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
    if (game.u8mult > game.caps.secondRow) {
        game.u8mult = game.caps.secondRow;
    } else if (game.u8mult < 1) {
        game.u8mult = 1;
    }
    // Energy Mult
    game.enMult = Math.log10(Math.pow(game.energy, 2)) + (game.energy * 2) + 1;
    if (game.enMult < 1) {
        game.enMult = 1;
    }
    game.gen1.productionMult = game.u4mult * game.u5mult * game.u8mult * game.enMult;
    game.gen1.production = 0.2 * game.gen1.amount * game.gen1.productionMult * game.rep.upg11.mult;
    if (game.upgrade16Bought != 0) {
        game.gen2.productionMult = game.u4mult * game.u5mult * game.u8mult * game.enMult;
    }
    game.gen2.production = 0.2 * game.gen2.amount * game.gen2.productionMult;
    game.gen3.production = 2 * game.gen3.amount * game.gen3.productionMult;
    document.getElementById("gen1").innerHTML = "1st Particle Generator x" + format(game.gen1.mult * game.gen1.productionMult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
    document.getElementById("gen2").innerHTML = "2nd Particle Generator x" + format(game.gen2.productionMult) + " (" + format(game.gen2.amount) + ") " + format(game.gen2.production) + " Generators/tick"
    document.getElementById("displayPartiPerSecond").innerHTML = "You gain " + format(game.partiPerSecond) + " Particles per tick passively."
}

function updatePowerPerSecond() {
    game.powerPerSecond = game.powergen1.production;
    game.u15mult = Math.cbrt(Math.pow(game.gen1.bought, 2));
    if (game.u15mult < 1) {
        game.u15mult = 1;
    }
    game.powergen1.productionMult = game.u6mult * game.u15mult * game.emp.upg11.mult;
    game.powergen1.production = 0.025 * game.powergen1.amount * game.powergen1.productionMult;
    game.powergen2.production = 0.2 * game.powergen2.amount * game.powergen2.productionMult;
    document.getElementById("powerCount").innerHTML = "You have " + format(game.power) + " Power, translated to a x" + format(game.powerMult) + " boost to clicking."
    document.getElementById("powergen1").innerHTML = "1st Power Generator x" + format(game.powergen1.productionMult) + " (" + format(game.powergen1.amount) + ") " + format(game.powergen1.production) + " Power/tick"
    document.getElementById("displayPowerPerSecond").innerHTML = "You gain " + format(game.powerPerSecond) + " Power per tick."
}

function updatePartiPerClick() {
    // Power Mult
    if (game.upgrade19Bought != 0) {
        game.powerMult = Math.pow((Math.log10(game.power) * Math.sqrt(game.power)), game.emp.upg21.mult);
    } else {
        game.powerMult = Math.pow((Math.log10(game.power) * Math.cbrt(game.power)), game.emp.upg21.mult);
    }
    if (game.powerMult > game.caps.powerMult) {
        game.powerMult = game.caps.powerMult;
    } else if (game.powerMult < 1) {
        game.powerMult = 1;
    }
    // Upgrade 2
    if (game.upgrade9Bought != 0) {
        game.u2mult = Math.sqrt(Math.pow(game.clicks, 3));
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
    if (game.u7mult > game.caps.secondRow) {
        game.u7mult = game.caps.secondRow;
    } else if (game.u7mult < 1) {
        game.u7mult = 1;
    }
    game.partiPerClick = 0.01 * game.u1mult * game.u2mult * game.u3mult * game.u7mult * game.powerMult * game.rep.upg11.mult;
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles.";
    document.getElementById("displayPartiPerClick").innerHTML = "You gain " + format(game.partiPerClick) + " Particles per click.";
}

function generate1stGen() {
    // game.gen1.amount += game.gen2.production;
    document.getElementById("gen1").innerHTML = "1st Particle Generator x" + format(game.gen1.mult * game.gen1.productionMult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
}

function tab(tab) {
  document.getElementById("Generators").style.display = "none"
  document.getElementById("Options").style.display = "none"
  document.getElementById("Stats").style.display = "none"
  document.getElementById("Achievements").style.display = "none"
  document.getElementById("Challenges").style.display = "none"
  document.getElementById("Particles").style.display = "none"
  document.getElementById("Power").style.display = "none"
  document.getElementById("Energy").style.display = "none"
  document.getElementById("Quarks").style.display = "none"
  document.getElementById(tab).style.display = "inline"
}

tab("Particles");

// Options

function updateDefaultTab() {
    if (opts.defaultTab == "Particles") {
        tab("Generators");
        opts.defaultTab = "Generators"
    } else if (opts.defaultTab == "Generators") {
        tab("Particles");
        opts.defaultTab = "Particles";
    }
}

function updateTheme(theme) {
    opts.selectedTheme = theme.toString();
    if (theme == Dark) {
        //
    } else if (theme == Aqua) {
        // 
    } else if (theme == Normal) {
        //
    }
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("gameSave", JSON.stringify(game))
}, 15000)
  
var savegame = JSON.parse(localStorage.getItem("gameSave"))
if (savegame !== null) {
    game = savegame
} 

function startChallenge(chall) {
    if (game.currentChallenge == "none") {
        if (confirm("Are you sure you want to start this challenge? You will have to perform a challenge reset.")) {
            challReset();
            updateAll();
        } else {
            chall == 0;
            return;
        }
        if (chall == 1) {
            game.currentChallenge = 1;
            game.challGoal = 3e6;
            document.getElementById("startChall1").innerHTML = "Running"
        } else if (chall == 2) {
            game.currentChallenge = 2;
            game.challGoal = 1e13;
            document.getElementById("startChall2").innerHTML = "Running"
        } else if (chall == 3) {

        } else if (chall == 4) {

        }
        challCheck = window.setInterval(function() {
            if (game.parti >= game.challGoal) {
                if (game.currentChallenge == 1) {
                    if (game.chall1Comp == 0) {
                        game.energy += 1;
                        checkAchs(15);
                    }
                    document.getElementById("startChall1").innerHTML = "Completed";
                    game.chall1Comp += 1;
                } else if (game.currentChallenge == 2) {
                    if (game.chall2Comp == 0) {
                        game.energy += 2;
                        checkAchs(17);
                    }
                    document.getElementById("startChall2").innerHTML = "Completed";
                    game.chall2Comp += 1;
                }
                leaveChallenge();           
            }
        }, 100)
    }
}

function leaveChallenge() {
    if (game.currentChallenge == "none") return;
    game.currentChallenge = "none";
    challReset();
    updateAll();
}

function updateAll() {
    document.getElementById("clickAmount").innerHTML = "You've clicked " + format(game.clicks) + " times.";
    document.getElementById("partiCount").innerHTML = "You have " + format(game.parti) + " Particles."
    document.getElementById("powerCount").innerHTML = "You have " + format(game.power) + " Power, translated to a x" + format(game.powerMult) + " boost to clicking."
    document.getElementById("gen1").innerHTML = "1st Particle Generator x" + format(game.gen1.mult * game.gen1.productionMult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
    document.getElementById("gen1Buy").innerHTML = "Cost: " + format(game.gen1.cost);
    document.getElementById("displayPartiPerSecond").innerHTML = "You gain " + format(game.partiPerSecond) + " Particles per tick passively."
    document.getElementById("powergen1").innerHTML = "1st Power Generator x" + format(game.powergen1.productionMult) + " (" + format(game.powergen1.amount) + ") " + format(game.powergen1.production) + " Power/tick"
    document.getElementById("powergen1Buy").innerHTML = "Cost: " + format(game.powergen1.cost);
    document.getElementById("displayPowerPerSecond").innerHTML = "You gain " + format(game.powerPerSecond) + " Power per tick."
    document.getElementById("gen2").innerHTML = "2nd Particle Generator x" + format(game.gen2.productionMult) + " (" + format(game.gen2.amount) + ") " + format(game.gen2.production) + " Generators/tick"
    document.getElementById("gen2Buy").innerHTML = "Cost: " + format(game.gen2.cost);
    document.getElementById("powergen2").innerHTML = "2nd Power Generator x" + format(game.powergen2.productionMult) + " (" + format(game.powergen2.amount) + ") " + format(game.powergen2.production) + " Generators/tick"
    document.getElementById("powergen2Buy").innerHTML = "Cost: " + format(game.powergen2.cost) + " Power";
    document.getElementById("gen3").innerHTML = "3rd Particle Generator x" + format(game.gen3.productionMult) + " (" + format(game.gen3.amount) + ") " + format(game.gen3.production) + " Generators/tick"
    document.getElementById("gen3Buy").innerHTML = "Cost: " + format(game.gen3.cost);
    document.getElementById("clickCap").innerHTML = "You can only click " + format(game.clickCap) + " times.";
    document.getElementById("energyCount").innerHTML = "You have " + format(game.energy) + " Energy, translated to a x" + format(game.enMult) + " multiplier to all Particle Generators"
    document.getElementById("rep11").innerHTML = "Multiplies all Particle gain by 2. Currently: " + format(game.rep.upg11.mult) + "x Cost: " + format(game.rep.upg11.cost) + " Particles";
    document.getElementById("emp11").innerHTML = "All Power gain is multiplied by 2. Currently: " + format(game.emp.upg11.mult) + "x Cost: " + format(game.emp.upg11.cost) + " Power";
    document.getElementById("emp21").innerHTML = "Increase the multiplier to clicking from Power's formula's exponent. Currently: " + format(game.emp.upg21.mult) + "x Cost: " + format(game.emp.upg21.cost) + " Power";
    if (game.upgrade1Bought != 0) {
        document.getElementById("buttonupgrade1").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade1").style.backgroundColor = "white";
    }

    if (game.upgrade2Bought != 0) {
        document.getElementById("buttonupgrade2").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade2").style.backgroundColor = "white";
    }

    if (game.upgrade3Bought != 0) {
        document.getElementById("buttonupgrade3").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade3").style.backgroundColor = "white";
    }

    if (game.upgrade4Bought != 0) {
        document.getElementById("buttonupgrade4").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade4").style.backgroundColor = "white";
    }

    if (game.upgrade5Bought != 0) {
        document.getElementById("buttonupgrade5").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade5").style.backgroundColor = "white";
    }

    if (game.upgrade6Bought != 0) {
        document.getElementById("buttonupgrade6").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade6").style.backgroundColor = "white";
    }

    if (game.upgrade7Bought != 0) {
        document.getElementById("buttonupgrade7").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade7").style.backgroundColor = "white";
    }

    if (game.upgrade8Bought != 0) {
        document.getElementById("buttonupgrade8").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade8").style.backgroundColor = "white";
    }

    if (game.upgrade9Bought != 0) {
        document.getElementById("buttonupgrade9").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade9").style.backgroundColor = "white";
    }

    if (game.upgrade10Bought != 0) {
        document.getElementById("buttonupgrade10").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade10").style.backgroundColor = "white";
    }

    if (game.upgrade11Bought != 0) {
        document.getElementById("buttonupgrade11").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade11").style.backgroundColor = "white";
    }

    if (game.upgrade12Bought != 0) {
        document.getElementById("buttonupgrade12").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade12").style.backgroundColor = "white";
    }

    if (game.upgrade13Bought != 0) {
        document.getElementById("buttonupgrade13").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade13").style.backgroundColor = "white";
    }

    if (game.upgrade14Bought != 0) {
        document.getElementById("buttonupgrade14").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade14").style.backgroundColor = "white";
    }

    if (game.upgrade15Bought != 0) {
        document.getElementById("buttonupgrade15").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade15").style.backgroundColor = "white";
    }
    
    if (game.upgrade16Bought != 0) {
        document.getElementById("buttonupgrade16").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade16").style.backgroundColor = "white";
    }

    if (game.upgrade17Bought != 0) {
        document.getElementById("buttonupgrade17").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade17").style.backgroundColor = "white";
    }

    if (game.upgrade18Bought != 0) {
        document.getElementById("buttonupgrade18").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade18").style.backgroundColor = "white";
    }

    if (game.upgrade19Bought != 0) {
        document.getElementById("buttonupgrade19").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade19").style.backgroundColor = "white";
    }

    if (game.upgrade20Bought != 0) {
        document.getElementById("buttonupgrade20").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("buttonupgrade20").style.backgroundColor = "white";
    }
    
    if (game.chall1Comp == 0) {
        document.getElementById("startChall1").innerHTML = "Start";
    } else if (game.chall1Comp != 0) {
        document.getElementById("startChall1").innerHTML = "Completed";
    }

    if (game.currentChallenge == 1) {
        document.getElementById("startChall1").innerHTML = "Running";
    }

    if (game.chall2Comp == 0) {
        document.getElementById("startChall2").innerHTML = "Start";
    } else if (game.chall2Comp != 0) {
        document.getElementById("startChall2").innerHTML = "Completed";
    }

    if (game.currentChallenge == 2) {
        document.getElementById("startChall2").innerHTML = "Running";
    }

    // r1 achs
    if (game.achs.ach11 == 1) document.getElementById('ach11').className = 'achFin tooltip';
    if (game.achs.ach12 == 1) document.getElementById('ach12').className = 'achFin tooltip';
    if (game.achs.ach13 == 1) document.getElementById('ach13').className = 'achFin tooltip';
    if (game.achs.ach14 == 1) document.getElementById('ach14').className = 'achFin tooltip';
    if (game.achs.ach15 == 1) document.getElementById('ach15').className = 'achFin tooltip';
    if (game.achs.ach16 == 1) document.getElementById('ach16').className = 'achFin tooltip';
    if (game.achs.ach17 == 1) document.getElementById('ach17').className = 'achFin tooltip';
    if (game.achs.ach18 == 1) document.getElementById('ach18').className = 'achFin tooltip';
    // r2 achs
    if (game.achs.ach21 == 1) document.getElementById('ach21').className = 'achFin tooltip';
    if (game.achs.ach22 == 1) document.getElementById('ach22').className = 'achFin tooltip';
    if (game.achs.ach23 == 1) document.getElementById('ach23').className = 'achFin tooltip';
    if (game.achs.ach24 == 1) document.getElementById('ach24').className = 'achFin tooltip';
    if (game.achs.ach25 == 1) document.getElementById('ach25').className = 'achFin tooltip';
    if (game.achs.ach26 == 1) document.getElementById('ach26').className = 'achFin tooltip';
    if (game.achs.ach27 == 1) document.getElementById('ach27').className = 'achFin tooltip';
    if (game.achs.ach28 == 1) document.getElementById('ach28').className = 'achFin tooltip';
}

updateAll();

function challReset() {
    game.parti = 0;
    game.partiPerClick = 0;
    game.challGoal = undefined;
    // Multipliers
    game.clicks = 0;
    game.u1mult = 1;
    game.u2mult = 1;
    game.u3mult = 1;
    game.u4mult = 1;
    game.u5mult = 1;
    game.u6mult = 1;
    game.u7mult = 1;
    game.u8mult = 1;
    game.u15mult = 1;
    // Bought Upgrades
    game.upgrade1Bought = 0;
    game.upgrade2Bought = 0;
    game.upgrade3Bought = 0;
    game.upgrade4Bought = 0;
    game.upgrade5Bought = 0;
    game.upgrade6Bought = 0;
    game.upgrade7Bought = 0;
    game.upgrade8Bought = 0;
    game.upgrade9Bought = 0;
    game.upgrade10Bought = 0;
    game.upgrade11Bought = 0;
    game.upgrade12Bought = 0;
    game.upgrade13Bought = 0;
    game.upgrade14Bought = 0;
    game.upgrade15Bought = 0;
    game.upgrade16Bought = 0;
    game.upgrade17Bought = 0;
    game.upgrade18Bought = 0;
    game.upgrade19Bought = 0;
    game.upgrade20Bought = 0;
    // game.power = 0;
    game.partiPerSecond = 0;
    game.powerPerSecond = 0;
    game.genSpeed = 1000;
    // Caps
    game.caps.firstRow = 10;
    game.caps.firstRow = 20;
    game.caps.powerMult = 100;
    // Gen 1
    game.gen1.cost = 10;
    game.gen1.costMult = 1.5;
    game.gen1.amount = 0;
    game.gen1.bought = 0;
    game.gen1.mult = 1;
    game.gen1.production = 0;
    game.gen1.productionMult = 1;
    // Gen 2
    game.gen2.cost = 1e4;
    game.gen2.costMult = 2.5;
    game.gen2.amount = 0;
    game.gen2.bought = 0;
    game.gen2.mult = 1;
    game.gen2.production = 0;
    game.gen2.productionMult = 1;
    // Power Gen 1
    game.powergen1.cost = 50;
    game.powergen1.costMult = 2;
    game.powergen1.amount = 0;
    game.powergen1.bought = 0;
    game.powergen1.mult = 1;
    game.powergen1.production = 0;
    game.powergen1.productionMult = 1;
    // Power Gen 2
    game.powergen2.cost = 1.5e3;
    game.powergen2.costMult = 5;
    game.powergen2.amount = 0;
    game.powergen2.bought = 0;
    game.powergen2.mult = 1;
    game.powergen2.production = 0;
    game.powergen2.productionMult = 1;
    /* game = {
        parti: 0,
        // energy: energy,
        // quarks: quarks,
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
        // playTime: playTime,
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
        currentChallenge: "none",
        challGoal: 0,
        caps: {
            firstRow: 10,
            secondRow: 20,
        },
        clickCap: 10000,
        clickCapCost: 1000, 
    } */
}

// Achievements

function checkAchs(id) {
    // Ach 11
    if (id == 11) {
        if (game.achs.ach11 == 0) {
            if (game.clicks >= 1) {
                game.achs.ach11 = 1;
                document.getElementById('ach11').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 12) {
        if (game.achs.ach12 == 0) {
            if (game.gen1.amount >= 1) {
                game.achs.ach12 = 1;
                document.getElementById('ach12').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 13) {
        if (game.achs.ach13 == 0) {
            if (game.powergen1.amount >= 1) {
                game.achs.ach13 = 1;
                document.getElementById('ach13').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 14) {
        if (game.achs.ach14 == 0) {
            if (game.gen2.amount >= 1) {
                game.achs.ach14 = 1;
                document.getElementById('ach14').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 15) {
        if (game.achs.ach15 == 0) {
            if (game.chall1Comp >= 1) {
                game.achs.ach15 = 1;
                document.getElementById('ach15').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 16) {
        if (game.achs.ach16 == 0) {
            if (game.upgrade1Bought == 1 && game.upgrade2Bought == 1 && game.upgrade3Bought == 1 && game.upgrade4Bought == 1 && game.upgrade5Bought == 1 && game.upgrade6Bought == 1 && game.upgrade7Bought == 1 && game.upgrade8Bought == 1 && game.upgrade9Bought == 1 && game.upgrade10Bought == 1 && game.upgrade11Bought == 1 && game.upgrade12Bought == 1 && game.upgrade13Bought == 1 && game.upgrade14Bought == 1 && game.upgrade15Bought == 1 && game.upgrade16Bought == 1 && game.upgrade17Bought == 1 && game.upgrade18Bought == 1 && game.upgrade19Bought == 1 && game.upgrade20Bought == 1) {
                game.achs.ach16 = 1;
                document.getElementById('ach16').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 17) {
        if (game.achs.ach17 == 0) {
            if (game.chall2Comp >= 1) {
                game.achs.ach17 = 1;
                document.getElementById('ach17').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 18) {
        if (game.achs.ach18 == 0) {
            if (game.powergen2.amount >= 1) {
                game.achs.ach18 = 1;
                if (game.caps.firstRow < 450) {
                    game.caps.firstRow = 450
                }
                document.getElementById('ach18').style.backgroundColor = 'green';
            }
        }
    }
    if (id == 21) {
        if (game.achs.ach21 == 0) {
            if (game.gen3.amount >= 1) {
                game.achs.ach21 = 1;
                document.getElementById('ach21').style.backgroundColor = 'green';
            }
        }
    }
}