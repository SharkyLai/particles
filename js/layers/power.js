function getPowMultHardCap() {
    let pmhc = 100;
    pmhc = 100 * game.emp.upg31.mult * game.u20mult;
    game.caps.powerMult = pmhc;
    updateAll();
    return pmhc;
}

function getPowMult() {
    let pm = 1;
}

function buyEmpowerment(id) {
    if (id == 11) {
        if (game.power > game.emp.upg11.cost) {
            game.power -= game.emp.upg11.cost;
            game.emp.upg11.cost *= game.emp.upg11.costMult;
            game.emp.upg11.bought++;
            game.emp.upg11.mult *= 2;
            checkAchs(22);
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
    } else if (id == 22) {
        if (game.power > game.emp.upg22.cost) {
            game.power -= game.emp.upg22.cost;
            game.emp.upg22.cost *= game.emp.upg22.costMult;
            game.emp.upg22.bought++;
            game.emp.upg22.mult *= 2;
            document.getElementById("powergen2").innerHTML = "2nd Power Generator x" + format(game.powergen2.productionMult) + " (" + format(game.powergen2.amount) + ") " + format(game.powergen2.production) + " Generators/tick"
            document.getElementById("emp22").innerHTML = "Multiply 2nd Power Generators' production by 2. Currently: " + format(game.emp.upg22.mult) + "x Cost: " + format(game.emp.upg22.cost) + " Power";
        }
    } else if (id == 31) {
        if (game.chall3Comp == 0) return;
        if (game.power > game.emp.upg31.cost) {
            game.power -= game.emp.upg31.cost;
            game.emp.upg31.cost *= game.emp.upg31.costMult;
            game.emp.upg31.bought++;
            game.emp.upg31.mult = Math.pow(10, game.emp.upg31.bought)
            updateAll();
            document.getElementById("emp31").innerHTML = "Increase the hardcap of the Power multiplier to clicking. Currently: " + format(game.emp.upg31.mult) + "x Cost: " + format(game.emp.upg31.cost) + " Power";
        }
    }

    if (game.power == 0) {
        game.power = 0.01;
    }
    
    checkAchs(25);
}

/*function buyPowerUpg(id) {
    if (id == 11) {
        if (game.power > game.)
    }
} */