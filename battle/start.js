var damage1, damage2, damageboss;
var heal1, heal2, healboss;
var life1, life2, lifeboss;
var energy1, energy2, energyboss;
var cdb1, cdb2, cdc1, cdc2;
var chouhen;
var arm1, arm2;
var turn = 0;

function healteammate(chaselnum) {
    if (chaselected1 == 3 && chaselnum == 1) {
        if (chaselected2 == 1) {
            battle.cha1life = battle.cha1life + chaoneskill1[0];
        } else if (chaselected2 == 2) {
            battle.cha2life = battle.cha2life + chaoneskill1[0];
        } else {
            return;
        }
    } else if (chaselected2 == 3 && chaselnum == 2) {
        if (chaselected1 == 1) {
            battle.cha1life = battle.cha1life + chaoneskill1[0];
        } else if (chaselected1 == 2) {
            battle.cha2life = battle.cha2life + chaoneskill1[0];
        } else {
            return;
        }
    } else {
        return;
    }
}

function initialvalue() {
    heal1 = 0;
    heal2 = 0;
    damage1 = 0;
    damage2 = 0;
    energy1 = 0;
    energy2 = 0;
    chouhen = 0;
}

function battle() {
    turn = turn + 1;
    initialvalue();

    if (chaselected1 == 1) {
        arm1 = 0.2;
        if (chaoneskill == "A") {
            damage1 = damage1 + chaoneskill1[0];
            heal1 = heal1 + 0;
            energy1 = energy1 + 0;
        } else if (chaoneskill == "B") {
            damage1 = damage1 + chaoneskill2[1];
            heal1 = heal1 + 0;
            energy1 = energy1 + chaoneskill2[0];
            cdb1 = true;
        } else if (chaoneskill == "C") {
            damage1 = damage1 + 0;
            heal1 = heal1 + chaoneskill3[1];
            energy1 = energy1 + chaoneskill3[0];
            cdc1 = true;
        } else {
            damage1 = damage1 + 0;
            heal1 = heal1 + 0;
            energy1 = energy1 + 0;
        }
    } else if (chaselected1 == 2) {
        arm1 = 0.5;
        if (chaoneskill == "A") {
            damage1 = damage1 + chaoneskill1[0];
            heal1 = heal1 + 0;
            energy1 = energy1 + 0;
            chouhen = 1;
        } else if (chaoneskill == "B") {
            damage1 = damage1 + 0;
            heal1 = heal1 + 0;
            energy1 = energy1 + chaoneskill2[0];
            arm1 = 0.75;
            cdb1 = false;
        } else if (chaoneskill == "C") {
            damage1 = damage1 + 0;
            heal1 = heal1 + chaoneskill3[1];
            energy1 = energy1 + chaoneskill3[0];
            cdc1 = true;
        } else {
            damage1 = damage1 + 0;
            heal1 = heal1 + 0;
            energy1 = energy1 + 0;
        }
    } else if (chaselected1 == 3) {
        arm1 = 0.2;
        if (chaoneskill == "A") {
            sure = confirm("dmg(yes)/heal(no)?");
            if (sure == null || sure == false) {
                heal2 = heal2 + chaoneskill1[0];
                damage1 = damage1 + 0;
            } else {
                damage1 = damage1 + chaoneskill1[0];
            }
            heal1 = heal1 + 0;
            energy1 = energy1 + 0;
        } else if (chaoneskill == "B") {
            damage1 = damage1 + chaoneskill2[1];
            heal1 = heal1 + chaoneskill2[1];
            energy1 = energy1 + chaoneskill2[0];
            cdb1 = true;
        } else if (chaoneskill == "C") {
            damage1 = damage1 + 0;
            heal1 = heal1 + chaoneskill3[1];
            heal2 = heal2 + chaoneskill3[1];
            energy1 = energy1 + chaoneskill3[0];
            cdc1 = true;
        } else {
            damage1 = damage1 + 0;
            heal1 = heal1 + 0;
            energy1 = energy1 + 0;
        }
    } else {

    }




    if (chaselected2 == 1) {
        arm2 = 0.2;
        if (chatwoskill == "A") {
            damage2 = damage2 + chatwoskill1[0];
            heal2 = heal2 + 0;
            energy2 = energy2 + 0;
        } else if (chatwoskill == "B") {
            damage2 = damage2 + chatwoskill2[1];
            heal2 = heal2 + 0;
            energy2 = energy2 + chatwoskill2[0];
            cdb2 = true;
        } else if (chatwoskill == "C") {
            damage2 = damage2 + 0;
            heal2 = heal2 + chatwoskill3[1];
            energy2 = energy2 + chatwoskill3[0];
            cdc2 = true;
        } else {
            damage2 = damage2 + 0;
            heal2 = heal2 + 0;
            energy2 = energy2 + 0;
        }
    } else if (chaselected2 == 2) {
        arm2 = 0.5;
        if (chatwoskill == "A") {
            damage2 = damage2 + chatwoskill1[0];
            heal2 = heal2 + 0;
            energy2 = energy2 + 0;
            chouhen = 2;
        } else if (chatwoskill == "B") {
            damage2 = damage2 + 0;
            heal2 = heal2 + 0;
            energy2 = energy2 + chatwoskill2[0];
            arm2 = 0.75;
            cdb2 = false;
        } else if (chatwoskill == "C") {
            damage2 = damage2 + 0;
            heal2 = heal2 + chatwoskill3[1];
            energy2 = energy2 + chatwoskill3[0];
            cdc2 = true;
        } else {
            damage2 = damage2 + 0;
            heal2 = heal2 + 0;
            energy2 = energy2 + 0;
        }
    } else if (chaselected2 == 3) {
        arm2 = 0.2;
        if (chatwoskill == "A") {
            sure = confirm("dmg(yes)/heal(no)?");
            if (sure == null || sure == false) {
                heal1 = heal1 + chatwoskill1[0];
                damage2 = damage2 + 0;
            } else {
                damage2 = damage2 + chatwoskill1[0];
            }
            heal2 = heal2 + 0;
            energy2 = energy2 + 0;
        } else if (chatwoskill == "B") {
            damage2 = damage2 + chatwoskill2[1];
            heal2 = heal2 + chatwoskill2[1];
            energy2 = energy2 + chatwoskill2[0];
            cdb2 = true;
        } else if (chatwoskill == "C") {
            damage2 = damage2 + 0;
            heal1 = heal1 + chatwoskill3[1];
            heal2 = heal2 + chatwoskill3[1];
            energy2 = energy2 + chatwoskill3[0];
            cdc2 = true;
        } else {
            damage2 = damage2 + 0;
            heal2 = heal2 + 0;
            energy2 = energy2 + 0;
        }
    } else {

    }

    battle.bosslife = battle.bosslife - damage1 - damage2;
    bossstatusdisplay();

    if (chaselected1 == 1) {
        battle.cha1life = battle.cha1life + heal1;
        battle.cha1energy = battle.cha1energy - energy1;
    } else if (chaselected1 == 2) {
        battle.cha2life = battle.cha2life + heal1;
        battle.cha2energy = battle.cha2energy - energy1;
    } else if (chaselected1 == 3) {
        battle.cha3life = battle.cha3life + heal1;
        battle.cha3energy = battle.cha3energy - energy1;
    } else {

    }

    if (chaselected2 == 1) {
        battle.cha1life = battle.cha1life + heal2;
        battle.cha1energy = battle.cha1energy - energy2;
    } else if (chaselected2 == 2) {
        battle.cha2life = battle.cha2life + heal2;
        battle.cha2energy = battle.cha2energy - energy2;
    } else if (chaselected2 == 3) {
        battle.cha3life = battle.cha3life + heal2;
        battle.cha3energy = battle.cha3energy - energy2;
    } else {

    }

    if (chouhen == 1) {
        battle.cha1life = battle.cha1life - 10 * battle.bossweight;
        chouhen = 0;
    } else if (chouhen == 2) {
        battle.cha2life = battle.cha2life - 10 * battle.bossweight;
        chouhen = 0;
    } else {
        if (damage1 >= 3 * damage2) {
            battle.cha1life = battle.cha1life - 10 * battle.bossweight;
        } else if (damage2 >= 3 * damage1) {
            battle.cha2life = battle.cha2life - 10 * battle.bossweight;
        } else {
            if (damage1 > damage2) {
                battle.cha1life = battle.cha1life - 10 * battle.bossweight;
            } else if (damage2 > damage1) {
                battle.cha2life = battle.cha2life - 10 * battle.bossweight;
            } else {
                attacktarget = randomNum(1, 2);
                if (attacktarget == 1) {
                    battle.cha1life = battle.cha1life - 10 * battle.bossweight;
                }
                if (attacktarget == 2) {
                    battle.cha2life = battle.cha2life - 10 * battle.bossweight;
                }
            }
        }
    }

    chastatusdisplay();



}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}