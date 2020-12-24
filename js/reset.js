function hardReset() {
    if (!confirm("Are you sure? You will lose all progression, and doing this will reset EVERYTHING without any boost." )) return;
    game = {
        parti: 0,
        energy: 0,
        positiveEnergy: 0,
        negativeEnergy: 0,
        convAmt: 1,
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
        u20mult: 1,
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
        version: 0.5,
        playTime: 0,
        currentChallenge: "none",
        challGoal: 0,
        chall1Comp: 0,
        chall2Comp: 0,
        chall3Comp: 0,
        chall4Comp: 0,
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
            },
            upg31: {
                cost: 1e8,
                costMult: 10,
                bought: 0,
                mult: 1,
            }
        },
        en: {
            pos: {
                upg11: 0,
                upg12: 0,
                upg13: 0,
                upg21: 0,
                upg22: 0,
                upg23: 0,
            }
        }
    }
    updateAll();
}

function challReset() {
    game.parti = 0;
    game.partiPerClick = 0;
    game.challGoal = undefined;
    // Multipliers
    game.clicks = 0;
    game.clickCap = 10000;
    if (game.en.pos.upg11 == 0) game.u1mult = 1;
    if (game.en.pos.upg11 == 0) game.u2mult = 1;
    if (game.en.pos.upg11 == 0) game.u3mult = 1;
    if (game.en.pos.upg11 == 0) game.u4mult = 1;
    if (game.en.pos.upg11 == 0) game.u5mult = 1;
    if (game.en.pos.upg11 == 0) game.u6mult = 1;
    if (game.en.pos.upg11 == 0) game.u7mult = 1;
    if (game.en.pos.upg11 == 0) game.u8mult = 1;
    game.u15mult = 1;
    if (game.achs.ach26 == 0) game.u20mult = 1
    if (game.achs.ach26 == 1) game.u20mult = 1e8
    // Bought Upgrades
    if (game.en.pos.upg11 == 0) game.upgrade1Bought = 0;
    if (game.en.pos.upg11 == 0) game.upgrade2Bought = 0;
    if (game.en.pos.upg11 == 0) game.upgrade3Bought = 0;
    if (game.en.pos.upg11 == 0) game.upgrade4Bought = 0;
    if (game.en.pos.upg11 == 0) game.upgrade5Bought = 0;
    if (game.en.pos.upg11 == 0) game.upgrade6Bought = 0;
    if (game.en.pos.upg11 == 0) game.upgrade7Bought = 0;
    if (game.en.pos.upg11 == 0) game.upgrade8Bought = 0;
    if (game.en.pos.upg11 == 0) game.upgrade9Bought = 0;
    if (game.en.pos.upg11 == 0) game.upgrade10Bought = 0;
    game.upgrade11Bought = 0;
    game.upgrade12Bought = 0;
    game.upgrade13Bought = 0;
    game.upgrade14Bought = 0;
    game.upgrade15Bought = 0;
    game.upgrade16Bought = 0;
    game.upgrade17Bought = 0;
    game.upgrade18Bought = 0;
    game.upgrade19Bought = 0;
    if (game.achs.ach26 == 0) game.upgrade20Bought = 0
    // game.power = 0;
    game.partiPerSecond = 0;
    game.powerPerSecond = 0;
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
    // Gen 3
    game.gen3.cost = 1e12;
    game.gen3.costMult = 5;
    game.gen3.amount = 0;
    game.gen3.bought = 0;
    game.gen3.mult = 1;
    game.gen3.production = 0;
    game.gen3.productionMult = 1;
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
}

function energyReset() {
    if (canEnergyReset()) {
        if (!confirm("Are you sure? Doing so will reset all your previous progress except for achievements! This process is not undoable.")) return;
    challReset();
    game.power = 0.01;
    // Rep Upgrades
    game.rep = {
        upg11: {
            cost: 1e10,
            costMult: 10,
            bought: 0,
            mult: 1,
        }
    }
    // Empowerments
    game.emp = {
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
        },
        upg31: {
            cost: 1e8,
            costMult: 10,
            bought: 0,
            mult: 1,
        }
    }

    game.energy += getEnergyGain();
    }
}