//自主性决定训练成功率
function trainhuoyue() {

    if (hint == 1) {
        alert("派当前猫咪去进行活跃度训练，训练成功会增加5点活跃度，成功率取决于自主性。训练要求10+好感度，会消耗100体力以及当前消耗饮食量的饱食度。训练成功会失去一半，失败将失去全部好感度。");
    }

    var randomnum = Math.floor(Math.random() * 100 + 1);
    //newstext(randomnum);

    if (catselected == 1) {
        if (cat.hungerstatus1 >= cat.hunger1 && cat.life1 >= 100 && cat.lovestatus1 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu1) + parseInt(cat.lovestatus1)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus1 = parseInt(cat.hungerstatus1) - cat.hunger1;
            cat.life1 = parseInt(cat.life1) - 100;

            if (random == 0) { //训练失败失去所有好感
                cat.lovestatus1 = 0;
                newstext(cat.name1 + "训练失败！");
            } else if (random == 1) { //成功损失一半好感
                cat.lovestatus1 = Math.floor(parseInt(cat.lovestatus1) / 2);
                newstext("训练成功！" + cat.name1 + "活跃度增长了5")
                cat.huoyue1 = parseInt(cat.huoyue1) + 5;
            } else {}
            catselect1();
        } else {
            newstext("需求（饱食" + cat.hunger1 + ",体力100+,好感度10+）不够！");
        }
    } else if (catselected == 2) {
        if (cat.hungerstatus2 >= cat.hunger2 && cat.life2 >= 100 && cat.lovestatus2 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu2) + parseInt(cat.lovestatus2)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus2 = parseInt(cat.hungerstatus2) - cat.hunger2;
            cat.life2 = parseInt(cat.life2) - 100;

            if (random == 0) {
                cat.lovestatus2 = 0;
                newstext(cat.name2 + "训练失败!");
            } else if (random == 1) {
                cat.lovestatus2 = Math.floor(parseInt(cat.lovestatus2) / 2);
                newstext("训练成功！" + cat.name2 + "活跃度增长了5")
                cat.huoyue2 = parseInt(cat.huoyue2) + 5;
            } else {}
            catselect2();
        } else {
            newstext("需求（饱食" + cat.hunger2 + ",体力100+,好感度10+）不够！");
        }
    } else if (catselected == 3) {
        if (cat.hungerstatus3 >= cat.hunger3 && cat.life3 >= 100 && cat.lovestatus3 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu3) + parseInt(cat.lovestatus3)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus3 = parseInt(cat.hungerstatus3) - cat.hunger3;
            cat.life3 = parseInt(cat.life3) - 100;

            if (random == 0) {
                newstext(cat.name3 + "训练失败!");
                cat.lovestatus3 = 0;
            } else if (random == 1) {
                cat.lovestatus3 = Math.floor(parseInt(cat.lovestatus3) / 2);
                newstext("训练成功！" + cat.name3 + "活跃度增长了5")
                cat.huoyue3 = parseInt(cat.huoyue3) + 5;
            } else {}
            catselect3();
        } else {
            newstext("需求（饱食" + cat.hunger3 + ",体力100+,好感度10+）不够！");
        }
    } else if (catselected == 4) {
        if (cat.hungerstatus4 >= cat.hunger4 && cat.life4 >= 100 && cat.lovestatus4 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu4) + parseInt(cat.lovestatus4)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus4 = parseInt(cat.hungerstatus4) - cat.hunger4;
            cat.life4 = parseInt(cat.life4) - 100;

            if (random == 0) {
                newstext(cat.name4 + "训练失败!");
                cat.lovestatus4 = 0;
            } else if (random == 1) {
                cat.lovestatus4 = Math.floor(parseInt(cat.lovestatus4) / 2);
                newstext("训练成功！" + cat.name4 + "活跃度增长了5")
                cat.huoyue4 = parseInt(cat.huoyue4) + 5;
            } else {}
            catselect4();
        } else {
            newstext("需求（饱食" + cat.hunger4 + ",体力100+,好感度10+）不够！");
        }
    } else if (catselected == 5) {
        if (cat.hungerstatus5 >= cat.hunger5 && cat.life5 >= 100 && cat.lovestatus5 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu5) + parseInt(cat.lovestatus5)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus5 = parseInt(cat.hungerstatus5) - cat.hunger5;
            cat.life5 = parseInt(cat.life5) - 100;

            if (random == 0) {
                newstext(cat.name5 + "训练失败!");
                cat.lovestatus5 = 0;
            } else if (random == 1) {
                cat.lovestatus5 = Math.floor(parseInt(cat.lovestatus5) / 2);
                newstext("训练成功！" + cat.name5 + "活跃度增长了5")
                cat.huoyue5 = parseInt(cat.huoyue5) + 5;
            } else {}
            catselect5();
        } else {
            newstext("需求（饱食" + cat.hunger5 + ",体力100+,好感度10+）不够！");
        }
    } else {
        newstext("未选择猫咪!")
    }
}



function trainzizhu() {

    if (hint == 1) {
        alert("派当前猫咪去进行自主性训练，训练成功会增加5点自主性，成功率取决于自主性。训练要求10+好感度，会消耗100体力以及当前消耗饮食量的饱食度。训练成功会失去一半，失败将失去全部好感度。");
    }

    var randomnum = Math.floor(Math.random() * 100 + 1);
    //newstext(randomnum);

    if (catselected == 1) {
        if (cat.hungerstatus1 >= cat.hunger1 && cat.life1 >= 100 && cat.lovestatus1 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu1) + parseInt(cat.lovestatus1)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus1 = parseInt(cat.hungerstatus1) - cat.hunger1;
            cat.life1 = parseInt(cat.life1) - 100;

            if (random == 0) { //训练失败失去所有好感
                cat.lovestatus1 = 0;
                newstext(cat.name1 + "训练失败!");
            } else if (random == 1) { //成功损失一半好感
                cat.lovestatus1 = Math.floor(parseInt(cat.lovestatus1) / 2);
                newstext("训练成功！" + cat.name1 + "自主性增长了5")
                cat.zizhu1 = parseInt(cat.zizhu1) + 5;
            } else {}
            catselect1();
        } else {
            newstext("需求（饱食" + cat.hunger1 + ",体力100+,好感度10+）不够！");
        }
    } else if (catselected == 2) {
        if (cat.hungerstatus2 >= cat.hunger2 && cat.life2 >= 100 && cat.lovestatus2 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu2) + parseInt(cat.lovestatus2)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus2 = parseInt(cat.hungerstatus2) - cat.hunger2;
            cat.life2 = parseInt(cat.life2) - 100;

            if (random == 0) {
                cat.lovestatus2 = 0;
                newstext(cat.name2 + "训练失败!");
            } else if (random == 1) {
                cat.lovestatus2 = Math.floor(parseInt(cat.lovestatus2) / 2);
                newstext("训练成功！" + cat.name2 + "自主性增长了5")
                cat.zizhu2 = parseInt(cat.zizhu2) + 5;
            } else {}
            catselect2();
        } else {
            newstext("需求（饱食" + cat.hunger2 + ",体力100+,好感度10+）不够！");
        }
    } else if (catselected == 3) {
        if (cat.hungerstatus3 >= cat.hunger3 && cat.life3 >= 100 && cat.lovestatus3 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu3) + parseInt(cat.lovestatus3)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus3 = parseInt(cat.hungerstatus3) - cat.hunger3;
            cat.life3 = parseInt(cat.life3) - 100;

            if (random == 0) {
                newstext(cat.name3 + "训练失败!");
                cat.lovestatus3 = 0;
            } else if (random == 1) {
                cat.lovestatus3 = Math.floor(parseInt(cat.lovestatus3) / 2);
                newstext("训练成功！" + cat.name3 + "自主性增长了5")
                cat.zizhu3 = parseInt(cat.zizhu3) + 5;
            } else {}
            catselect3();
        } else {
            newstext("需求（饱食" + cat.hunger3 + ",体力100+,好感度10+）不够！");
        }
    } else if (catselected == 4) {
        if (cat.hungerstatus4 >= cat.hunger4 && cat.life4 >= 100 && cat.lovestatus4 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu4) + parseInt(cat.lovestatus4)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus4 = parseInt(cat.hungerstatus4) - cat.hunger4;
            cat.life4 = parseInt(cat.life4) - 100;

            if (random == 0) {
                newstext(cat.name4 + "训练失败!");
                cat.lovestatus4 = 0;
            } else if (random == 1) {
                cat.lovestatus4 = Math.floor(parseInt(cat.lovestatus4) / 2);
                newstext("训练成功！" + cat.name4 + "自主性增长了5")
                cat.zizhu4 = parseInt(cat.zizhu4) + 5;
            } else {}
            catselect4();
        } else {
            newstext("需求（饱食" + cat.hunger4 + ",体力100+,好感度10+）不够！");
        }
    } else if (catselected == 5) {
        if (cat.hungerstatus5 >= cat.hunger5 && cat.life5 >= 100 && cat.lovestatus5 >= 10) {

            var random;
            if (randomnum > parseInt(cat.zizhu5) + parseInt(cat.lovestatus5)) {
                random = 0;
            } else {
                random = 1;
            }

            cat.hungerstatus5 = parseInt(cat.hungerstatus5) - cat.hunger5;
            cat.life5 = parseInt(cat.life5) - 100;

            if (random == 0) {
                newstext(cat.name5 + "训练失败!");
                cat.lovestatus5 = 0;
            } else if (random == 1) {
                cat.lovestatus5 = Math.floor(parseInt(cat.lovestatus5) / 2);
                newstext("训练成功！" + cat.name5 + "自主性增长了5")
                cat.zizhu5 = parseInt(cat.zizhu5) + 5;
            } else {}
            catselect5();
        } else {
            newstext("需求（饱食" + cat.hunger5 + ",体力100+,好感度10+）不够！");
        }
    } else {
        newstext("未选择猫咪!")
    }
}