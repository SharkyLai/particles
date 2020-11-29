// imports and exports

// Variables

var game = {
    parti: new Decimal(0),
    energy: new Decimal(0),
    positiveEnergy: new Decimal(0),
    negativeEnergy: new Decimal(0),
    quarks: new Decimal(0),
    partiPerClick: new Decimal(0.01),
    clicks: new Decimal(0),
    u1mult: new Decimal(1),
    u2mult: new Decimal(1),
    u3mult: new Decimal(1),
    u4mult: new Decimal(1),
    u5mult: new Decimal(1),
    u6mult: new Decimal(1),
    u7mult: new Decimal(1),
    u8mult: new Decimal(1),
    u15mult: new Decimal(1),
    enMult: new Decimal(1),
    enUpgCost: new Decimal(0),
    enUpgMult: {
        u11mult: new Decimal(1),
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
    power: new Decimal(0.01),
    powerMult: new Decimal(0),
    totalParti: new Decimal(0),
    partiPerSecond: new Decimal(0),
    powerPerSecond: new Decimal(0),
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
    genSpeed: new Decimal(1000),
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
        },
        upg22: {
            cost: 1e7,
            costMult: 20,
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

updateAll()

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

function clickCapUpgrade() {
    if (game.parti >= game.clickCapCost) {
        game.parti -= game.clickCapCost;
        game.clickCap *= 5;
        game.clickCapCost *= 10;
        document.getElementById("clickCap").innerHTML = "You can only clickc" + format(game.clickCap) + " times."
    }
}

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
    game.powergen2.productionMult = game.emp.upg22.mult;
    game.powergen2.production = 0.5 * game.powergen2.amount * game.powergen2.productionMult;
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
    document.getElementById("emp22").innerHTML = "Multiply 2nd Power Generators' production by 2. Currently: " + format(game.emp.upg22.mult) + "x Cost: " + format(game.emp.upg22.cost) + " Power";
    
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