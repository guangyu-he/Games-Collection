function findfood() {
    var randomnum = Math.floor(Math.random() * 10 + 1);
    var random;
    if (randomnum <= 5) {
        random = 0;
    } else {
        random = 1;
    }

    if (catselected == 1) {
        if (cat.life1 >= 100 && cat.huoyue1 >= 20) {

            cat.life1 = parseInt(cat.life1) - 100;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name1 + "自己吃饱了！")
                cat.hungerstatus1 = cat.hungermax1;
            } else {}
            catselect1();
        } else {
            alert("需求不够！");
        }
    } else if (catselected == 2) {
        if (cat.hungerstatus2 >= 25 && cat.life2 >= 100 && cat.lovestatus2 >= 25) {

            cat.hungerstatus2 = parseInt(cat.hungerstatus2) - 25;
            cat.life2 = parseInt(cat.life2) - 100;
            cat.lovestatus2 = parseInt(cat.lovestatus2) - 10;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name2 + "自己吃饱了！")
                cat.hungerstatus2 = cat.hungermax2;
            } else {}
            catselect2();
        } else {
            alert("需求不够！");
        }
    } else if (catselected == 3) {
        if (cat.hungerstatus3 >= 25 && cat.life3 >= 100 && cat.lovestatus3 >= 25) {

            cat.hungerstatus3 = parseInt(cat.hungerstatus3) - 25;
            cat.life3 = parseInt(cat.life3) - 100;
            cat.lovestatus3 = parseInt(cat.lovestatus3) - 10;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name3 + "自己吃饱了！")
                cat.hungerstatus3 = cat.hungermax3;
            } else {}
            catselect3();
        } else {
            alert("需求不够！");
        }
    } else if (catselected == 4) {
        if (cat.hungerstatus4 >= 25 && cat.life4 >= 100 && cat.lovestatus4 >= 25) {

            cat.hungerstatus4 = parseInt(cat.hungerstatus4) - 25;
            cat.life4 = parseInt(cat.life4) - 100;
            cat.lovestatus4 = parseInt(cat.lovestatus4) - 10;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name4 + "自己吃饱了！")
                cat.hungerstatus4 = cat.hungermax4;
            } else {}
            catselect4();
        } else {
            alert("需求不够！");
        }
    } else if (catselected == 5) {
        if (cat.hungerstatus5 >= 25 && cat.life5 >= 100 && cat.lovestatus5 >= 25) {

            cat.hungerstatus5 = parseInt(cat.hungerstatus5) - 25;
            cat.life5 = parseInt(cat.life5) - 100;
            cat.lovestatus5 = parseInt(cat.lovestatus5) - 10;

            if (random == 0) {
                alert("觅食失败!");
            } else if (random == 1) {
                alert("觅食成功！" + cat.name5 + "自己吃饱了！")
                cat.hungerstatus5 = cat.hungermax5;
            } else {}
            catselect5();
        } else {
            alert("需求不够！");
        }
    }
}