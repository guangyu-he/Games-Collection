function catselect1() {
    if (cat.name1 == "") {
        return;
    }
    if (parseInt(cat.hungerstatus1) - cat.hunger1 <= hungerlimit) {
        document.getElementById("hunger").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("hunger").className = "button-border button-rounded button-primary";
    }
    if (parseInt(cat.life1) - 50 < 0) {
        document.getElementById("life").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("life").className = "button-border button-rounded button-primary";
    }
    document.getElementById("catselect").innerHTML = cat.name1 + "," + cat.age1 + "," + cat.sex1;
    document.getElementById("life").innerHTML = "体力值:" + cat.life1 + "/" + parseInt(cat.jiankang1) * 10;
    document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus1 + "/" + cat.hungermax1;
    document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus1;
    document.getElementById("status").innerHTML = "自主性:" + cat.zizhu1 + " | " + "活跃度:" + cat.huoyue1 + " | " + "健康值:" + cat.jiankang1 + "<br>每日消耗食物" + cat.hunger1;
    catselected = 1;
}

function catselect2() {
    if (cat.name2 == "") {
        return;
    }
    if (parseInt(cat.hungerstatus2) - cat.hunger2 <= hungerlimit) {
        document.getElementById("hunger").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("hunger").className = "button-border button-rounded button-primary";
    }
    if (parseInt(cat.life2) - 50 < 0) {
        document.getElementById("life").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("life").className = "button-border button-rounded button-primary";

    }
    document.getElementById("catselect").innerHTML = cat.name2 + "," + cat.age2 + "," + cat.sex2;
    document.getElementById("life").innerHTML = "体力值:" + cat.life2 + "/" + parseInt(cat.jiankang2) * 10;
    document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus2 + "/" + cat.hungermax2;
    document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus2;
    document.getElementById("status").innerHTML = "自主性:" + cat.zizhu2 + " | " + "活跃度:" + cat.huoyue2 + " | " + "健康值:" + cat.jiankang2 + "<br>每日消耗食物" + cat.hunger2;
    catselected = 2;
}

function catselect3() {
    if (cat.name3 == "") {
        return;
    }
    if (parseInt(cat.hungerstatus3) - cat.hunger3 <= hungerlimit) {
        document.getElementById("hunger").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("hunger").className = "button-border button-rounded button-primary";
    }
    if (parseInt(cat.life3) - 50 < 0) {
        document.getElementById("life").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("life").className = "button-border button-rounded button-primary";
    }
    document.getElementById("catselect").innerHTML = cat.name3 + "," + cat.age3 + "," + cat.sex3;
    document.getElementById("life").innerHTML = "体力值:" + cat.life3 + "/" + parseInt(cat.jiankang3) * 10;
    document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus3 + "/" + cat.hungermax3;
    document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus3;
    document.getElementById("status").innerHTML = "自主性:" + cat.zizhu3 + " | " + "活跃度:" + cat.huoyue3 + " | " + "健康值:" + cat.jiankang3 + "<br>每日消耗食物" + cat.hunger3;
    catselected = 3;
}

function catselect4() {
    if (cat.name4 == "") {
        return;
    }
    if (parseInt(cat.hungerstatus4) - cat.hunger4 <= hungerlimit) {
        document.getElementById("hunger").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("hunger").className = "button-border button-rounded button-primary";
    }
    if (parseInt(cat.life4) - 50 < 0) {
        document.getElementById("life").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("life").className = "button-border button-rounded button-primary";
    }
    document.getElementById("catselect").innerHTML = cat.name4 + "," + cat.age4 + "," + cat.sex4;
    document.getElementById("life").innerHTML = "体力值:" + cat.life4 + "/" + parseInt(cat.jiankang4) * 10;
    document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus4 + "/" + cat.hungermax4;
    document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus4;
    document.getElementById("status").innerHTML = "自主性:" + cat.zizhu4 + " | " + "活跃度:" + cat.huoyue4 + " | " + "健康值:" + cat.jiankang4 + "<br>每日消耗食物" + cat.hunger4;
    catselected = 4;
}

function catselect5() {
    if (cat.name5 == "") {
        return;
    }
    if (parseInt(cat.hungerstatus5) - cat.hunger5 <= hungerlimit) {
        document.getElementById("hunger").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("hunger").className = "button-border button-rounded button-primary";
    }
    if (parseInt(cat.life5) - 50 < 0) {
        document.getElementById("life").className = "button-border button-rounded button-caution";
    } else {
        document.getElementById("life").className = "button-border button-rounded button-primary";
    }
    document.getElementById("catselect").innerHTML = cat.name5 + "," + cat.age5 + "," + cat.sex5;
    document.getElementById("life").innerHTML = "体力值:" + cat.life5 + "/" + parseInt(cat.jiankang5) * 10;
    document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus5 + "/" + cat.hungermax5;
    document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus5;
    document.getElementById("status").innerHTML = "自主性:" + cat.zizhu5 + " | " + "活跃度:" + cat.huoyue5 + " | " + "健康值:" + cat.jiankang5 + "<br>每日消耗食物" + cat.hunger5;
    catselected = 5;
}