function selectConvAmt(num) {
    clearConvSelect();
    if (num == 1) {
        game.convAmt = 1;
        document.getElementById("conv1").className = "convEnAmt select";
    } else if (num == 50) {
        game.convAmt = 50;
        document.getElementById("conv50").className = "convEnAmt select";
    } else if (num == 100) {
        game.convAmt = 100;
        document.getElementById("conv100").className = "convEnAmt select";
    }
}

function posEn() {
    if (game.positiveEnergy >= 1) {
        game.en.pos.upg11 = 1;
    } else if (game.positiveEnergy >= 3) {
        game.en.pos.upg12 = 1;
    } else if (game.positiveEnergy >= 6) {
        game.en.pos.upg13 = 1;
    }
}

function canEnergyReset() {
    if (game.parti >= 1e35 && game.chall4Comp == 1 && game.power >= 1e16) return true;
    else return false;
}

function convertToPos() {
    if (game.chall4Comp == 0) return;
    if (game.energy >= 1) {
        if (game.convAmt == 1) {
            game.energy -= 1;
            game.positiveEnergy += 1;
        } else if (game.convAmt == 50) {
            game.positiveEnergy += game.energy / 2;
            game.energy /= 2;
        } else if (game.convAmt == 100) {
            game.positiveEnergy += game.energy;
            game.energy = 0;
        }
        getEnMult();
        posEn();
        document.getElementById("energyCount").innerHTML = "You have " + format(game.energy) + " Energy, translated to a x" + format(game.enMult) + " multiplier to all Particle Generators";
        document.getElementById("posEn").innerHTML = "You have " + format(game.positiveEnergy) + " Positive Energy."
    }
}

function getEnMult() {
    let em = 1;
    em = Math.pow((Math.log10(Math.pow((game.energy + 1), 2)) + (game.energy * 2) + 1), 1.75);
    if (em < 1) em = 1;
    game.enMult = em;
    return em;
}

function getEnergyGain() {
    let eg = 0;
    if (canEnergyReset() == false) {
        eg = 0;
        return eg;
    }
    eg = Math.floor(((game.parti / 1e5) - 6) + ((game.power / 1e8) - 2))
    if (eg > 100) eg = 100;
    return eg;
}

function clearConvSelect() {
    document.getElementById("conv1").className = "convEnAmt";
    document.getElementById("conv50").className = "convEnAmt";
    document.getElementById("conv100").className = "convEnAmt";
}