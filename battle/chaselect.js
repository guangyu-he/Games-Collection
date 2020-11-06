var sel1, sel2, sel3;
var chaone = 0;
var chatwo = 0;
var chaoneskill1, chaoneskill2, chaoneskill3;
var chatwoskill1, chatwoskill2, chatwoskill3;
var chaselected1, chaselected2;

//0 no effect
//1 taunt effect
//2 can heal teammate

//0 restore itself
//1 arm effect
//2 restore team
//3 dmg boss heal itself
function chaskill(chaselnum, chanum) {
    if (chaselnum == 1) {
        if (chanum == 1) {
            chaoneskill1 = [20 * battle.cha1weight, 0]; // no effect
            chaoneskill2 = [10, 40 * battle.cha1weight, 1, 0]; //energy cost, damage, cd ,effect
            chaoneskill3 = [10, 10 * battle.cha1weight, 1, 0]; // restore 10 life
        } else if (chanum == 2) {
            chaoneskill1 = [10 * battle.cha2weight, 1]; // taunt effect
            chaoneskill2 = [5, 0.75, 0, 1]; // 0.75 means arm
            chaoneskill3 = [10, battle.cha2life / 2, 2, 0]; //restore half life
        } else if (chanum == 3) {
            chaoneskill1 = [10 * battle.cha3weight, 2]; // can heal teammate
            chaoneskill2 = [10, 10 * battle.cha3weight, 1, 3]; // dmg boss for 10 and heal itself 10
            chaoneskill3 = [10, 10 * battle.cha3weight, 2, 2]; // restore all team 10 life
        }
    } else if (chaselnum == 2) {
        if (chanum == 1) {
            chatwoskill1 = [20 * battle.cha1weight, 0]; // no effect
            chatwoskill2 = [10, 40 * battle.cha1weight, 1, 0]; //energy cost, damage, cd 
            chatwoskill3 = [10, 10 * battle.cha1weight, 1, 0]; // restore 10 life
        } else if (chanum == 2) {
            chatwoskill1 = [10 * battle.cha2weight, 1]; // taunt effect
            chatwoskill2 = [5, 0.75, 0, 1]; // 0.75 means arm
            chatwoskill3 = [10, battle.cha2life / 2, 2, 0]; //restore half life
        } else if (chanum == 3) {
            chatwoskill1 = [10 * battle.cha3weight, 2]; // can heal teammate
            chatwoskill2 = [10, 10 * battle.cha3weight, 1, 3]; // dmg boss for 10 and heal itself 10
            chatwoskill3 = [10, 10 * battle.cha3weight, 2, 2]; // restore all team 10 life
        }
    } else {
        return;
    }
}

function chaselect(chaselnum, chanum) {
    if (turn != 0) {
        newstext("already started!");
        return;
    }
    if (chaselected1 == chanum) {
        newstext("already chosen!");
        return;
    }
    restorebuttons();
    chaskill(chaselnum, chanum);
    chaselectdisplay(chaselnum, chanum);
    chaselected(chaselnum, chanum)
}

function chaselected(chaselnum, chanum) {
    if (chaselnum == 1) {
        if (chanum == 1) {
            chaselected1 = 1;
        } else if (chanum == 2) {
            chaselected1 = 2;
        } else if (chanum == 3) {
            chaselected1 = 3;
        } else {
            return;
        }
    } else if (chaselnum == 2) {
        if (chanum == 1) {
            chaselected2 = 1;
        } else if (chanum == 2) {
            chaselected2 = 2;
        } else if (chanum == 3) {
            chaselected2 = 3;
        }
    } else {
        return;
    }
}

function chaselectdisplay(chaselnum, chanum) {
    if (chaselnum == 1) {
        if (chanum == 1) {
            document.getElementById("chaoneseltxt").innerHTML = battle.cha1name;
            document.getElementById("chaonelife").innerHTML = "life: " + battle.cha1life;
            document.getElementById("chaoneenergy").innerHTML = "energy: " + battle.cha1energy;
        } else if (chanum == 2) {
            document.getElementById("chaoneseltxt").innerHTML = battle.cha2name;
            document.getElementById("chaonelife").innerHTML = "life: " + battle.cha2life;
            document.getElementById("chaoneenergy").innerHTML = "energy: " + battle.cha2energy;
        } else if (chanum == 3) {
            document.getElementById("chaoneseltxt").innerHTML = battle.cha3name;
            document.getElementById("chaonelife").innerHTML = "life: " + battle.cha3life;
            document.getElementById("chaoneenergy").innerHTML = "energy: " + battle.cha3energy;
        } else {
            return;
        }
    } else if (chaselnum == 2) {
        if (chanum == 1) {
            document.getElementById("chatwoseltxt").innerHTML = battle.cha1name;
            document.getElementById("chatwolife").innerHTML = "life: " + battle.cha1life;
            document.getElementById("chatwoenergy").innerHTML = "energy: " + battle.cha1energy;
        } else if (chanum == 2) {
            document.getElementById("chatwoseltxt").innerHTML = battle.cha2name;
            document.getElementById("chatwolife").innerHTML = "life: " + battle.cha2life;
            document.getElementById("chatwoenergy").innerHTML = "energy: " + battle.cha2energy;
        } else if (chanum == 3) {
            document.getElementById("chatwoseltxt").innerHTML = battle.cha3name;
            document.getElementById("chatwolife").innerHTML = "life: " + battle.cha3life;
            document.getElementById("chatwoenergy").innerHTML = "energy: " + battle.cha3energy;
        } else {
            return;
        }
    } else {
        return;
    }
}