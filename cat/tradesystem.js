function sellcat() {

    if (hint == 1) {
        if (confirm('卖猫时请输入要卖的猫的名字。\n系统将根据算法计算出此猫咪的价值，然后获得该价值的金钱。\n此操作不能撤销(将导致强制存档)，请慎重！')) {
            //console.log('yes');
        } else {
            return;
        }
    }

    var catdel = prompt("卖哪只猫，请输入名字：", "Name");
    var price1, price2, price3, price4, price;
    if (catdel == cat.name1) {
        price1 = parseInt(cat.zizhu1);
        price2 = Math.round(parseInt(cat.huoyue1) * 1.5);
        price3 = Math.round(parseInt(cat.jiankang1) * 2);
        if (cat.age1 >= 30 && cat.age1 < 60) {
            price4 = 1.5;
        } else if (cat.age1 >= 60) {
            price4 = 1;
        } else if (cat.age1 < 30) {
            price4 = 1.2;
        }

        newstext(cat.name1 + "被卖掉了");

        cat.name1 = ""
        cat.zizhu1 = ""
        cat.huoyue1 = ""
        cat.jiankang1 = ""

        cat.age1 = "";
        cat.life1 = "";
        cat.lovestatus1 = "";
        cat.hunger1 = "";
        cat.hungermax1 = "";
        cat.hungerstatus1 = "";
        document.getElementById("cat1").innerHTML = "null";

    } else if (catdel == cat.name2) {

        price1 = parseInt(cat.zizhu2);
        price2 = Math.round(parseInt(cat.huoyue2) * 1.5);
        price3 = Math.round(parseInt(cat.jiankang2) * 2);
        if (cat.age2 >= 30 && cat.age2 < 60) {
            price4 = 1.5;
        } else if (cat.age2 >= 60) {
            price4 = 1;
        } else if (cat.age2 < 30) {
            price4 = 1.2;
        }

        newstext(cat.name2 + "被卖掉了");

        cat.name2 = ""
        cat.zizhu2 = ""
        cat.huoyue2 = ""
        cat.jiankang2 = ""

        cat.age2 = "";
        cat.life2 = "";
        cat.lovestatus2 = "";
        cat.hunger2 = "";
        cat.hungermax2 = "";
        cat.hungerstatus2 = "";
        document.getElementById("cat2").innerHTML = "null";

    } else if (catdel == cat.name3) {

        price1 = parseInt(cat.zizhu3);
        price2 = Math.round(parseInt(cat.huoyue3) * 1.5);
        price3 = Math.round(parseInt(cat.jiankang3) * 2);
        if (cat.age3 >= 30 && cat.age3 < 60) {
            price4 = 1.5;
        } else if (cat.age3 >= 60) {
            price4 = 1;
        } else if (cat.age3 < 30) {
            price4 = 1.2;
        }

        newstext(cat.name3 + "被卖掉了");

        cat.name3 = ""
        cat.zizhu3 = ""
        cat.huoyue3 = ""
        cat.jiankang3 = ""

        cat.age3 = "";
        cat.life3 = "";
        cat.lovestatus3 = "";
        cat.hunger3 = "";
        cat.hungermax3 = "";
        cat.hungerstatus3 = "";
        document.getElementById("cat3").innerHTML = "null";

    } else if (catdel == cat.name4) {

        price1 = parseInt(cat.zizhu4);
        price2 = Math.round(parseInt(cat.huoyue4) * 1.5);
        price3 = Math.round(parseInt(cat.jiankang4) * 2);
        if (cat.age4 >= 30 && cat.age4 < 60) {
            price4 = 1.5;
        } else if (cat.age4 >= 60) {
            price4 = 1;
        } else if (cat.age4 < 30) {
            price4 = 1.2;
        }

        newstext(cat.name4 + "被卖掉了");

        cat.name4 = ""
        cat.zizhu4 = ""
        cat.huoyue4 = ""
        cat.jiankang4 = ""

        cat.age4 = "";
        cat.life4 = "";
        cat.lovestatus4 = "";
        cat.hunger4 = "";
        cat.hungermax4 = "";
        cat.hungerstatus4 = "";
        document.getElementById("cat4").innerHTML = "null";

    } else if (catdel == cat.name5) {

        price1 = parseInt(cat.zizhu5);
        price2 = Math.round(parseInt(cat.huoyue5) * 1.5);
        price3 = Math.round(parseInt(cat.jiankang5) * 2);
        if (cat.age5 >= 30 && cat.age5 < 60) {
            price4 = 1.5;
        } else if (cat.age5 >= 60) {
            price4 = 1;
        } else if (cat.age5 < 30) {
            price4 = 1.2;
        }

        newstext(cat.name5 + "被卖掉了");

        cat.name5 = ""
        cat.zizhu5 = ""
        cat.huoyue5 = ""
        cat.jiankang5 = ""

        cat.age5 = "";
        cat.life5 = "";
        cat.lovestatus5 = "";
        cat.hunger5 = "";
        cat.hungermax5 = "";
        cat.hungerstatus5 = "";
        document.getElementById("cat5").innerHTML = "null";

    } else {
        newstext(catdel + "不存在");
        return;
    }

    catvalue = Math.round((price1 + price2 + price3) * price4);
    newstext("猫卖了" + catvalue + "金钱");
    cat.money = parseInt(cat.money) + catvalue; // 测试用数据

    save();
    location.reload();
}

function buycat() {

    if (hint == 1) {
        if (confirm('花费100金币购买猫咪！弹窗中输入希望猫咪的三围和名字（使用 / 分割）。\n三围总和不得超过30。 \n自主性影响学习能力，活跃度影响活动能力，健康值影响体力和食物消耗。\n此操作不能撤销(将导致强制存档)，请慎重！')) {
            //console.log('yes');
        } else {
            return;
        }
    }

    if (cat.money < 100) {
        newstext("没钱还要养猫?");
        return;
    }

    if (cat.name1 == "" || cat.name2 == "" || cat.name3 == "" || cat.name4 == "" || cat.name5 == "") {
        var sure;
        var newcat = prompt("Please enter a cat:", "自主性/活跃度/健康值/名字");
        if (newcat == null || newcat == "自主性/活跃度/健康值/名字") {
            return
        } else {
            sure = confirm("are you sure with this value:" + newcat);
            if (sure == null || sure == false) {
                return;
            }
        }
        var newcatd = newcat.split("/");
        var sum = parseInt(newcatd[0]) + parseInt(newcatd[1]) + parseInt(newcatd[2]);
        if (sum > 30) {
            newstext("三围总和须小于等于30");
            sure = false;
        }


        var sexnum = Math.floor(Math.random() * 10 + 1);
        var sex;
        if (sexnum <= 5) {
            sex = "boy";
        } else {
            sex = "girl";
        }

        if (cat.name1 == "") {
            cat.zizhu1 = newcatd[0];
            cat.huoyue1 = newcatd[1];
            cat.jiankang1 = newcatd[2];
            cat.name1 = newcatd[3];
            cat.lovestatus1 = 0;
            cat.hungerstatus1 = 100;
            cat.age1 = 0;
            cat.sex1 = sex;
            newstext("欢迎猫咪" + cat.name1 + "回家！");

        } else if (cat.name2 == "") {
            cat.zizhu2 = newcatd[0];
            cat.huoyue2 = newcatd[1];
            cat.jiankang2 = newcatd[2];
            cat.name2 = newcatd[3];
            cat.lovestatus2 = 0;
            cat.hungerstatus2 = 100;
            cat.age2 = 0;
            cat.sex2 = sex;
            newstext("欢迎猫咪" + cat.name2 + "回家！");

        } else if (cat.name3 == "") {
            cat.zizhu3 = newcatd[0];
            cat.huoyue3 = newcatd[1];
            cat.jiankang3 = newcatd[2];
            cat.name3 = newcatd[3];
            cat.lovestatus3 = 0;
            cat.hungerstatus3 = 100;
            cat.age3 = 0;
            cat.sex3 = sex;
            newstext("欢迎猫咪" + cat.name3 + "回家！");

        } else if (cat.name4 == "") {
            cat.zizhu4 = newcatd[0];
            cat.huoyue4 = newcatd[1];
            cat.jiankang4 = newcatd[2];
            cat.name4 = newcatd[3];
            cat.lovestatus4 = 0;
            cat.hungerstatus4 = 100;
            cat.age4 = 0;
            cat.sex4 = sex;
            newstext("欢迎猫咪" + cat.name4 + "回家！");

        } else if (cat.name5 == "") {
            cat.zizhu5 = newcatd[0];
            cat.huoyue5 = newcatd[1];
            cat.jiankang5 = newcatd[2];
            cat.name5 = newcatd[3];
            cat.lovestatus5 = 0;
            cat.hungerstatus5 = 100;
            cat.age5 = 0;
            cat.sex5 = sex;
            newstext("欢迎猫咪" + cat.name5 + "回家！");

        }
    } else {
        newstext("猫位已满");
    }
    cat.money = cat.money - 100;
    save();
    location.reload();
}

function adoptcat() {
    if (hint == 1) {
        if (confirm('收养一只猫\n弹窗中输入你希望收养猫的名字，年龄（不小于30天）（天数）和性别（m:男，w:女）（使用 / 分割）\n收养猫的三围将根据年龄随机生成\n此操作不能撤销(将导致强制存档)，请慎重！')) {
            //console.log('yes');
        } else {
            return;
        }
    }
    if (cat.name1 == "" || cat.name2 == "" || cat.name3 == "" || cat.name4 == "" || cat.name5 == "") {
        var sure;
        var newcat = prompt("Please enter a cat:", "名字/年龄(>=30)/性别(m/w)");
        if (newcat == null || newcat == "名字/年龄(>=30)/性别(m/w)") {
            return
        } else {
            sure = confirm("are you sure with this value:" + newcat);
            if (sure == null || sure == false) {
                return;
            }
        }
        var adoptcatd = newcat.split("/");
        if (parseInt(adoptcatd[1]) < 30 || (adoptcatd[2] != "m" && adoptcatd[2] != "w")) {
            newstext("输入非法！");
            return;
        }
        var randomnum = randomNum(0, 100);
        var adoptvalue = randomnum(0, 10);
        var random;
        if (randomnum <= 50) {
            random = 1;
        } else {
            random = 0;
        }
        if (random == 1) {
            adoptvalue = 0 - parseInt(adoptvalue);
        } else {
            adoptvalue = parseInt(adoptvalue);
        }
        var sex;
        if (adoptcatd[2] == "m") {
            sex = "boy";
        } else {
            sex = "girl";
        }


        if (cat.name1 == "") {
            cat.zizhu1 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.huoyue1 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.jiankang1 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.name1 = adoptcatd[0];
            cat.lovestatus1 = 0;
            cat.hungerstatus1 = 100;
            cat.age1 = parseInt(adoptcatd[1]);
            cat.sex1 = sex;
            newstext("欢迎猫咪" + cat.name1 + "回家！");

        } else if (cat.name2 == "") {
            cat.zizhu2 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.huoyue2 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.jiankang2 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.name2 = adoptcatd[0];
            cat.lovestatus2 = 0;
            cat.hungerstatus2 = 100;
            cat.age2 = parseInt(adoptcatd[1]);
            cat.sex2 = sex;
            newstext("欢迎猫咪" + cat.name2 + "回家！");

        } else if (cat.name3 == "") {
            cat.zizhu3 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.huoyue3 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.jiankang3 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.name3 = adoptcatd[0];
            cat.lovestatus3 = 0;
            cat.hungerstatus3 = 100;
            cat.age3 = parseInt(adoptcatd[1]);
            cat.sex3 = sex;
            newstext("欢迎猫咪" + cat.name3 + "回家！");

        } else if (cat.name4 == "") {
            cat.zizhu4 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.huoyue4 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.jiankang4 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.name4 = adoptcatd[0];
            cat.lovestatus4 = 0;
            cat.hungerstatus4 = 100;
            cat.age4 = parseInt(adoptcatd[1]);
            cat.sex4 = sex;
            newstext("欢迎猫咪" + cat.name4 + "回家！");

        } else if (cat.name5 == "") {
            cat.zizhu5 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.huoyue5 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.jiankang5 = parseInt(adoptcatd[1]) + parseInt(adoptvalue);
            cat.name5 = adoptcatd[0];
            cat.lovestatus5 = 0;
            cat.hungerstatus5 = 100;
            cat.age5 = parseInt(adoptcatd[1]);
            cat.sex5 = sex;
            newstext("欢迎猫咪" + cat.name5 + "回家！");

        }

    } else {
        newstext("猫位已满");
    }
    save();
    location.reload();
}