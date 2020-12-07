function buyGenerator1() {
    if (game.parti >= game.gen1.cost) {
        game.parti -= game.gen1.cost;
        game.gen1.amount++;
        game.gen1.bought++;
        game.gen1.cost *= game.gen1.costMult;
        game.gen1.production = getGen1Prod();
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
        game.gen2.production = getGen2Prod();
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
        game.gen3.production = getGen3Prod();
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
        game.powergen1.production = getPowGen1Prod();
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
        game.powergen2.production = getPowGen2Prod();
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

function generate1stGen() {
    document.getElementById("gen1").innerHTML = "1st Particle Generator x" + format(game.gen1.mult * game.gen1.productionMult) + " (" + format(game.gen1.amount) + ") " + format(game.gen1.production) + " Particles/tick"
}

function getGen1Prod() {
    game.gen1.productionMult = game.u4mult * game.u5mult * game.u8mult * game.enMult;
    game.gen1.production = 0.2 * game.gen1.amount * game.gen1.productionMult * game.rep.upg11.mult;
    return game.gen1.production;
}

function getGen2Prod() {
    if (game.upgrade16Bought != 0) game.gen2.productionMult = game.u4mult * game.u5mult * game.u8mult * game.enMult;
    game.gen2.production = 0.2 * game.gen2.amount * game.gen2.productionMult;
    return game.gen2.production;
}

function getGen3Prod() {
    game.gen3.productionMult = game.enMult;
    game.gen3.production = 2 * game.gen3.amount * game.gen3.productionMult;
    return game.gen3.production;
}

function getPowGen1Prod() {
    game.powergen1.productionMult = game.u6mult * game.u15mult * game.emp.upg11.mult;
    game.powergen1.production = 0.025 * game.powergen1.amount * game.powergen1.productionMult;
    return game.powergen1.production;
}

function getPowGen2Prod() {
    game.powergen2.productionMult = game.emp.upg22.mult;
    game.powergen2.production = 0.5 * game.powergen2.amount * game.powergen2.productionMult;
    return game.powergen2.production; 
}