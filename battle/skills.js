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
        if (cdb1) {
            newstext("b1 CD");
            chaoneskill = null;
            return;
        }
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
        if (cdb2) {
            newstext("b2 CD");
            chatwoskill = null;
            return;
        }
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
        if (cdc1) {
            newstext("c1 CD");
            chaoneskill = null;
            return;
        }
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
        if (cdc2) {
            newstext("c2 CD");
            chatwoskill = null;
            return;
        }
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