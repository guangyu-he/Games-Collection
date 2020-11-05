var damage1, damage2, damageboss;
var heal1, heal2, healboss;
var life1, life2, lifeboss
var chaoneskill, chatwoskill

function selectskilla(chaselnum) {
    if (chaselnum == 1) {
        if (chaoneskill == "A") {
            chaoneskill = null;
            document.getElementById("onea").className = "button button-pill button-action";
            return;
        }
        chaoneskill = "A";
        document.getElementById("onea").className = "button button-pill";
        document.getElementById("oneb").className = "button button-pill button-action";
        document.getElementById("onec").className = "button button-pill button-action";
    } else if (chaselnum == 2) {
        if (chatwoskill == "A") {
            chatwoskill = null;
            document.getElementById("twoa").className = "button button-pill button-action";
            return;
        }
        chatwoskill = "A";
        document.getElementById("twoa").className = "button button-pill";
        document.getElementById("twob").className = "button button-pill button-action";
        document.getElementById("twoc").className = "button button-pill button-action";
    } else {
        return;
    }
}

function selectskillb(chaselnum) {
    if (chaselnum == 1) {
        if (chaoneskill == "B") {
            chaoneskill = null;
            document.getElementById("oneb").className = "button button-pill button-action";
            return;
        }
        chaoneskill = "B";
        document.getElementById("onea").className = "button button-pill button-action";
        document.getElementById("oneb").className = "button button-pill";
        document.getElementById("onec").className = "button button-pill button-action";
    } else if (chaselnum == 2) {
        if (chatwoskill == "B") {
            chatwoskill = null;
            document.getElementById("twob").className = "button button-pill button-action";
            return;
        }
        chatwoskill = "B";
        document.getElementById("twoa").className = "button button-pill button-action";
        document.getElementById("twob").className = "button button-pill";
        document.getElementById("twoc").className = "button button-pill button-action";
    } else {
        return;
    }
}

function selectskillc(chaselnum) {
    if (chaselnum == 1) {
        if (chaoneskill == "C") {
            chaoneskill = null;
            document.getElementById("onec").className = "button button-pill button-action";
            return;
        }
        chaoneskill = "C";
        document.getElementById("onea").className = "button button-pill button-action";
        document.getElementById("oneb").className = "button button-pill button-action";
        document.getElementById("onec").className = "button button-pill ";
    } else if (chaselnum == 2) {
        if (chatwoskill == "C") {
            chatwoskill = null;
            document.getElementById("twoc").className = "button button-pill button-action";
            return;
        }
        chatwoskill = "C";
        document.getElementById("twoa").className = "button button-pill button-action";
        document.getElementById("twob").className = "button button-pill button-action";
        document.getElementById("twoc").className = "button button-pill";
    } else {
        return;
    }
}

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