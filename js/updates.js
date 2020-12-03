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
    document.getElementById("emp31").innerHTML = "Increase the hardcap of the Power multiplier to clicking. Currently: " + format(game.emp.upg31.mult) + "x Cost: " + format(game.emp.upg31.cost) + " Power";
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

    if (game.chall3Comp == 0) {
        document.getElementById("startChall3").innerHTML = "Start";
    } else if (game.chall3Comp != 0) {
        document.getElementById("startChall3").innerHTML = "Completed";
    }

    if (game.currentChallenge == 3) {
        document.getElementById("startChall3").innerHTML = "Running";
    }

    if (game.chall4Comp == 0) {
        document.getElementById("startChall4").innerHTML = "Start";
    } else if (game.chall4Comp != 0) {
        document.getElementById("startChall4").innerHTML = "Completed";
    }

    if (game.currentChallenge == 4) {
        document.getElementById("startChall4").innerHTML = "Running";
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

    checkAchs(15);
    checkAchs(16);
    checkAchs(17);
    // r2 achs
    if (game.achs.ach21 == 1) document.getElementById('ach21').className = 'achFin tooltip';
    if (game.achs.ach22 == 1) document.getElementById('ach22').className = 'achFin tooltip';
    if (game.achs.ach23 == 1) document.getElementById('ach23').className = 'achFin tooltip';
    if (game.achs.ach24 == 1) document.getElementById('ach24').className = 'achFin tooltip';
    if (game.achs.ach25 == 1) document.getElementById('ach25').className = 'achFin tooltip';
    if (game.achs.ach26 == 1) document.getElementById('ach26').className = 'achFin tooltip';
    if (game.achs.ach27 == 1) document.getElementById('ach27').className = 'achFin tooltip';
    if (game.achs.ach28 == 1) document.getElementById('ach28').className = 'achFin tooltip';

    checkAchs(24);
    checkAchs(26);
}

updateAll();

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
}, 100)

var updatePlayTimeLoop = window.setInterval(function() {
    game.playTime++;
}, 1000)