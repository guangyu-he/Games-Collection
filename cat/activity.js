//活跃度决定活动成功率
function findfood() {

    var randomnum = Math.floor(Math.random() * 100 + 1);
    //alert(randomnum);

    if (catselected == 1) {
        if (cat.life1 > 0) {

            var random;
            if (randomnum > parseInt(cat.huoyue1) + Math.floor(parseInt(cat.life1) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            cat.life1 = 0;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name1 + "自己吃饱了！")
                cat.hungerstatus1 = cat.hungermax1;
            } else {}
            catselect1();
        } else {
            alert("体力不够！");
        }
    } else if (catselected == 2) {
        if (cat.life2 > 0) {

            var random;
            if (randomnum > parseInt(cat.huoyue2) + Math.floor(parseInt(cat.life2) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            cat.life2 = 0;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name2 + "自己吃饱了！")
                cat.hungerstatus2 = cat.hungermax2;
            } else {}
            catselect2();
        } else {
            alert("体力不够！");
        }
    } else if (catselected == 3) {
        if (cat.life3 > 0) {

            var random;
            if (randomnum > parseInt(cat.huoyue3) + Math.floor(parseInt(cat.life3) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            cat.life3 = 0;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name3 + "自己吃饱了！")
                cat.hungerstatus3 = cat.hungermax3;
            } else {}
            catselect3();
        } else {
            alert("体力不够！");
        }
    } else if (catselected == 4) {
        if (cat.life4 > 0) {
            var random;
            if (randomnum > parseInt(cat.huoyue4) + Math.floor(parseInt(cat.life4) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            cat.life4 = 0;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name4 + "自己吃饱了！")
                cat.hungerstatus4 = cat.hungermax4;
            } else {}
            catselect4();
        } else {
            alert("体力不够！");
        }
    } else if (catselected == 5) {
        if (cat.life5 > 0) {

            var random;
            if (randomnum > parseInt(cat.huoyue5) + Math.floor(parseInt(cat.life5) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            cat.life5 = 0;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name5 + "自己吃饱了！")
                cat.hungerstatus5 = cat.hungermax5;
            } else {}
            catselect5();
        } else {
            alert("体力不够！");
        }
    }
}

function findmoney() {
    var randomnum = Math.floor(Math.random() * 100 + 1);
    //alert(randomnum);

    if (catselected == 1) {
        if (cat.life1 > 0) {

            var random;
            if (randomnum > parseInt(cat.huoyue1) + Math.floor(parseInt(cat.life1) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            var randommoney = Math.floor(Math.random() * parseInt(cat.life1) + 1);
            cat.life1 = 0;

            if (random == 0) {
                alert("啥也没找到!");
            } else if (random == 1) {
                alert(cat.name1 + "找到了" + randommoney + "金钱")
                cat.money = cat.money + randommoney;
            } else {}
            catselect1();
        } else {
            alert("体力不够！");
        }
    } else if (catselected == 2) {
        if (cat.life2 > 0) {

            var random;
            if (randomnum > parseInt(cat.huoyue2) + Math.floor(parseInt(cat.life2) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            var randommoney = Math.floor(Math.random() * parseInt(cat.life2) + 1);
            cat.life2 = 0;

            if (random == 0) {
                alert("啥也没找到!");
            } else if (random == 1) {
                alert(cat.name2 + "找到了" + randommoney + "金钱")
                cat.money = cat.money + randommoney;
            } else {}
            catselect2();
        } else {
            alert("体力不够！");
        }
    } else if (catselected == 3) {
        if (cat.life3 > 0) {

            var random;
            if (randomnum > parseInt(cat.huoyue3) + Math.floor(parseInt(cat.life3) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            var randommoney = Math.floor(Math.random() * parseInt(cat.life3) + 1);
            cat.life3 = 0;

            if (random == 0) {
                alert("啥也没找到!");
            } else if (random == 1) {
                alert(cat.name3 + "找到了" + randommoney + "金钱")
                cat.money = cat.money + randommoney;
            } else {}
            catselect3();
        } else {
            alert("体力不够！");
        }
    } else if (catselected == 4) {
        if (cat.life4 > 0) {
            var random;
            if (randomnum > parseInt(cat.huoyue4) + Math.floor(parseInt(cat.life4) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            var randommoney = Math.floor(Math.random() * parseInt(cat.life4) + 1);
            cat.life4 = 0;

            if (random == 0) {
                alert("啥也没找到!");
            } else if (random == 1) {
                alert(cat.name4 + "找到了" + randommoney + "金钱")
                cat.money = cat.money + randommoney;
            } else {}
            catselect4();
        } else {
            alert("体力不够！");
        }
    } else if (catselected == 5) {
        if (cat.life5 > 0) {

            var random;
            if (randomnum > parseInt(cat.huoyue5) + Math.floor(parseInt(cat.life5) / 5)) { //消耗所有体力值修正成功率
                random = 0;
            } else {
                random = 1;
            }

            var randommoney = Math.floor(Math.random() * parseInt(cat.life5) + 1);
            cat.life5 = 0;

            if (random == 0) {
                alert("啥也没找到!");
            } else if (random == 1) {
                alert(cat.name5 + "找到了" + randommoney + "金钱")
                cat.money = cat.money + randommoney;
            } else {}
            catselect5();
        } else {
            alert("体力不够！");
        }
    }
    document.getElementById("money").innerHTML = "剩余金钱:" + cat.money;
}