function moneyloss(cathuoyue) {
    var randomnum = randomNum(0, 100); //Math.floor(Math.random() * 100 + 1);
    var random;
    //newstext(cathuoyue + "/" + randomnum);
    if (cathuoyue == "") {
        return;
    }
    if (randomnum > parseInt(cathuoyue)) {
        random = 0;
    } else {
        random = 1;
    }
    if (random == 1) {
        newstext("逗猫的时候打碎瓶子，损失20金钱");
        cat.money = cat.money - 20;
    }
    document.getElementById("money").innerHTML = "剩余金钱:" + cat.money;
}

function toomanyfood(name, hungerstatus, hungermax) {
    var randomnum = randomNum(0, 100); // Math.floor(Math.random() * 100 + 1);
    var random;
    //newstext(cathuoyue + "/" + randomnum);
    if (hungerstatus == "") {
        return;
    }
    if (randomnum > parseInt(hungerstatus) - parseInt(hungermax)) {
        random = 0;
    } else {
        random = 1;
    }
    if (random == 1) {
        newstext("猫咪吃撑了！吐了20食物");
        if (name == cat.name1) {
            cat.hungerstatus1 = cat.hungermax1 - 20;
        } else if (name == cat.name2) {
            cat.hungerstatus2 = cat.hungermax2 - 20;
        } else if (name == cat.name3) {
            cat.hungerstatus3 = cat.hungermax3 - 20;
        } else if (name == cat.name4) {
            cat.hungerstatus4 = cat.hungermax4 - 20;
        } else if (name == cat.name5) {
            cat.hungerstatus5 = cat.hungermax5 - 20;
        }
    } else {
        if (name == cat.name1) {
            cat.hungerstatus1 = cat.hungermax1;
        } else if (name == cat.name2) {
            cat.hungerstatus2 = cat.hungermax2;
        } else if (name == cat.name3) {
            cat.hungerstatus3 = cat.hungermax3;
        } else if (name == cat.name4) {
            cat.hungerstatus4 = cat.hungermax4;
        } else if (name == cat.name5) {
            cat.hungerstatus5 = cat.hungermax5;
        }
    }
}

function earnmoremoney() {
    var randomnum = randomNum(0, 100); // Math.floor(Math.random() * 100 + 1);
    if (randomnum < 10) {
        cat.money = cat.money + 50;
        newstext("努力工作!额外获得50金币！");
    } else if (randomnum > 90) {
        cat.money = cat.money + 100;
        newstext("老板开心!额外获得100金币！");
    }
}

function getmorefood() {
    var randomnum = randomNum(0, 100); // Math.floor(Math.random() * 100 + 1);
    if (randomnum < 10) {
        cat.food = parseInt(cat.food) + 100;
        newstext("遇到宠物店打折，额外获得100猫粮！");
    }
}