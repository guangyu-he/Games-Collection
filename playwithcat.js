function playwithcat() {
    if (catselected == 1 && cat.life1 >= 50) {
        cat.lovestatus1 = parseInt(cat.lovestatus1) + 10;
        cat.life1 = parseInt(cat.life1) - 50;
        document.getElementById("life").innerHTML = "体力值:" + cat.life1 + "/" + parseInt(cat.jiankang1) * 10;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus1;
        if (parseInt(cat.life1) - 50 < 0) {
            document.getElementById("life").className = "button-border button-rounded button-caution";
        }
        moneyloss(cat.huoyue1);
    } else if (catselected == 2 && cat.life2 >= 50) {
        cat.lovestatus2 = parseInt(cat.lovestatus2) + 10;
        cat.life2 = parseInt(cat.life2) - 50;
        document.getElementById("life").innerHTML = "体力值:" + cat.life2 + "/" + parseInt(cat.jiankang2) * 10;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus2;
        if (parseInt(cat.life2) - 50 < 0) {
            document.getElementById("life").className = "button-border button-rounded button-caution";
        }
        moneyloss(cat.huoyue2);

    } else if (catselected == 3 && cat.life3 >= 50) {
        cat.lovestatus3 = parseInt(cat.lovestatus3) + 10;
        cat.life3 = parseInt(cat.life3) - 50;
        document.getElementById("life").innerHTML = "体力值:" + cat.life3 + "/" + parseInt(cat.jiankang3) * 10;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus3;
        if (parseInt(cat.life3) - 50 < 0) {
            document.getElementById("life").className = "button-border button-rounded button-caution";
        }
        moneyloss(cat.huoyue3);

    } else if (catselected == 4 && cat.life4 >= 50) {
        cat.lovestatus4 = parseInt(cat.lovestatus4) + 10;
        cat.life4 = parseInt(cat.life4) - 50;
        document.getElementById("life").innerHTML = "体力值:" + cat.life4 + "/" + parseInt(cat.jiankang4) * 10;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus4;
        if (parseInt(cat.life4) - 50 < 0) {
            document.getElementById("life").className = "button-border button-rounded button-caution";
        }
        moneyloss(cat.huoyue4);

    } else if (catselected == 5 && cat.life5 >= 50) {
        cat.lovestatus5 = parseInt(cat.lovestatus5) + 10;
        cat.life5 = parseInt(cat.life5) - 50;
        document.getElementById("life").innerHTML = "体力值:" + cat.life5 + "/" + parseInt(cat.jiankang5) * 10;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus5;
        if (parseInt(cat.life5) - 50 < 0) {
            document.getElementById("life").className = "button-border button-rounded button-caution";
        }
        moneyloss(cat.huoyue5);
    }


    //save();

}