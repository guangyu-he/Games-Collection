function playwithcat() {

    if (hint == 1) {
        if (confirm('与当前猫咪一起玩，消耗50体力，获得10好感度')) {
            //console.log('yes');
        } else {
            return;
        }
    }

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
    } else if (catselected == null) {
        newstext("未选择猫咪");
    }
    //save();
}

function dubo() {
    if (hint == 1) {
        if (confirm('小赌怡情，大赌伤身，强赌灰飞烟灭！\n其实就是猜大小！')) {
            //console.log('yes');
        } else {
            return;
        }
    }
    var dumoney = prompt("请输入赌金(整数):", "");
    if (dumoney == null || dumoney == "") {
        return;
    }
    var duzhu = prompt("请输入赔率(整数：2或5):", "");
    if (duzhu != "2" && duzhu != "5") {
        return;
    }

    if (parseInt(cat.money) < parseInt(dumoney)) {
        newstext("没有足够的本金！");
        return;
    }
    cat.money = parseInt(cat.money) - parseInt(dumoney);
    var randomnum = randomNum(0, 10);
    alert(randomnum + "/10")
    if (randomnum <= 5 && duzhu == 2) {
        winmoney = parseInt(dumoney) * parseInt(duzhu);
        cat.money = cat.money + winmoney;
        newstext("赢了" + winmoney);
    } else if (randomnum <= 2 && duzhu == 5) {
        winmoney = parseInt(dumoney) * parseInt(duzhu);
        cat.money = cat.money + winmoney;
        newstext("赢了" + winmoney);
    } else {
        newstext("赌输了！");
    }
    document.getElementById("money").innerHTML = "剩余金钱:" + cat.money;
}