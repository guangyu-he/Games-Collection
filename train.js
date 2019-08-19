function trainhuoyue() {

    var randomnum = Math.floor(Math.random() * 10 + 1);
    var random;
    if (randomnum <= 5) {
        random = 0;
    } else {
        random = 1;
    }
    if (catselected == 1) {
        if (cat.hungerstatus1 >= 25 && cat.life1 >= 100 && cat.lovestatus1 >= 25) {

            cat.hungerstatus1 = parseInt(cat.hungerstatus1) - 25;
            cat.life1 = parseInt(cat.life1) - 100;
            cat.lovestatus1 = parseInt(cat.lovestatus1) - 10;

            if (random == 0) {
                alert("训练失败!");
            } else if (random == 1) {
                alert("训练成功！" + cat.name1 + "活跃度增长了5")
                cat.huoyue1 = parseInt(cat.huoyue1) + 5;
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
                alert("训练失败!");
            } else if (random == 1) {
                alert("训练成功！" + cat.name2 + "活跃度增长了5")
                cat.huoyue2 = parseInt(cat.huoyue2) + 5;
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
                alert("训练失败!");
            } else if (random == 1) {
                alert("训练成功！" + cat.name3 + "活跃度增长了5")
                cat.huoyue3 = parseInt(cat.huoyue3) + 5;
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
                alert("训练失败!");
            } else if (random == 1) {
                alert("训练成功！" + cat.name4 + "活跃度增长了5")
                cat.huoyue4 = parseInt(cat.huoyue4) + 5;
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
                alert("训练失败!");
            } else if (random == 1) {
                alert("训练成功！" + cat.name5 + "活跃度增长了5")
                cat.huoyue5 = parseInt(cat.huoyue5) + 5;
            } else {}
            catselect5();
        } else {
            alert("需求不够！");
        }
    }
}