function birth() {
    if (cat.pday == 10 && (cat.pstate1 == 1 || cat.pstate2 == 1 || cat.pstate3 == 1 || cat.pstate4 == 1 || cat.pstate5 == 1)) {
        var newname = prompt("宝宝出生了！输入宝宝的名字:", "");
        var babynum = Math.floor(Math.random() * 10 + 1);
        var sexnum = Math.floor(Math.random() * 10 + 1);
        var random = Math.floor(Math.random() * 5 + 1);

        if (babynum <= 5) {
            cat.newzizhu = cat.newzizhu - random;
            cat.newhuoyue = cat.newhuoyue - random;
            cat.newjiankang = cat.newjiankang - random;
        } else {
            cat.newzizhu = cat.newzizhu + random;
            cat.newhuoyue = cat.newhuoyue + random;
            cat.newjiankang = cat.newjiankang + random;
        }

        var sex;
        if (sexnum <= 5) {
            sex = "boy";
        } else {
            sex = "girl";
        }

        if (cat.name1 == "") {
            cat.zizhu1 = cat.newzizhu;
            cat.huoyue1 = cat.newhuoyue;
            cat.jiankang1 = cat.newjiankang;
            cat.name1 = newname;
            cat.lovestatus1 = 0;
            cat.hungerstatus1 = 100;
            cat.age1 = 0;
            cat.sex1 = sex;
        } else if (cat.name2 == "") {
            cat.zizhu2 = cat.newzizhu;
            cat.huoyue2 = cat.newhuoyue;
            cat.jiankang2 = cat.newjiankang;
            cat.name2 = newname;
            cat.lovestatus2 = 0;
            cat.hungerstatus2 = 100;
            cat.age2 = 0;
            cat.sex2 = sex;
        } else if (cat.name3 == "") {
            cat.zizhu3 = cat.newzizhu;
            cat.huoyue3 = cat.newhuoyue;
            cat.jiankang3 = cat.newjiankang;
            cat.name3 = newname;
            cat.lovestatus3 = 0;
            cat.hungerstatus3 = 100;
            cat.age3 = 0;
            cat.sex3 = sex;
        } else if (cat.name4 == "") {
            cat.zizhu4 = cat.newzizhu;
            cat.huoyue4 = cat.newhuoyue;
            cat.jiankang4 = cat.newjiankang;
            cat.name4 = newname;
            cat.lovestatus4 = 0;
            cat.hungerstatus4 = 100;
            cat.age4 = 0;
            cat.sex4 = sex;
        } else if (cat.name5 == "") {
            cat.zizhu5 = cat.newzizhu;
            cat.huoyue5 = cat.newhuoyue;
            cat.jiankang5 = cat.newjiankang;
            cat.name5 = newname;
            cat.lovestatus5 = 0;
            cat.hungerstatus5 = 100;
            cat.age5 = 0;
            cat.sex5 = sex;
        }

        if (cat.pstate1 == 1) {
            cat.pstate1 = 0;
        } else if (cat.pstate2 == 1) {
            cat.pstate2 = 0;
        } else if (cat.pstate3 == 1) {
            cat.pstate3 = 0;
        } else if (cat.pstate4 == 1) {
            cat.pstate4 = 0;
        } else if (cat.pstate5 == 1) {
            cat.pstate5 = 0;
        }

        cat.pday = 0;
        cat.newhuoyue = "";
        cat.newjiankang = "";
        cat.newzizhu = "";

        save();
        location.reload();

    }
}

function baby() {
    if (cat.pstate1 == 1 || cat.pstate2 == 1 || cat.pstate3 == 1 || cat.pstate4 == 1 || cat.pstate5 == 1) {
        alert("已经有猫怀孕了！");
        return;
    }
    if (cat.name1 == "" || cat.name2 == "" || cat.name3 == "" || cat.name4 == "" || cat.name5 == "") {

        var father = prompt("输入爸爸的名字:", "");
        var mother = prompt("输入妈妈的名字:", "");
        if (father == "" || mother == "" || father == mother) {
            return;
        }

        cat.pday = 1;

        if (father == cat.name1 && cat.sex1 == "boy" && cat.age1 >= 30) {
            if (mother == cat.name2 && cat.sex2 == "girl" && cat.age2 >= 30) {
                cat.pstate2 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu1) + parseInt(cat.zizhu2)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue1) + parseInt(cat.huoyue2)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang1) + parseInt(cat.jiankang2)) / 2);


            } else if (mother == cat.name3 && cat.sex3 == "girl" && cat.age3 >= 30) {
                cat.pstate3 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu1) + parseInt(cat.zizhu3)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue1) + parseInt(cat.huoyue3)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang1) + parseInt(cat.jiankang3)) / 2);


            } else if (mother == cat.name4 && cat.sex4 == "girl" && cat.age4 >= 30) {
                cat.pstate4 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu1) + parseInt(cat.zizhu4)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue1) + parseInt(cat.huoyue4)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang1) + parseInt(cat.jiankang4)) / 2);


            } else if (mother == cat.name5 && cat.sex5 == "girl" && cat.age5 >= 30) {
                cat.pstate5 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu1) + parseInt(cat.zizhu5)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue1) + parseInt(cat.huoyue5)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang1) + parseInt(cat.jiankang5)) / 2);


            } else {
                return;
            }
        } else if (father == cat.name2 && cat.sex2 == "boy" && cat.age2 >= 30) {
            if (mother == cat.name1 && cat.sex1 == "girl" && cat.age1 >= 30) {
                cat.pstate1 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu2) + parseInt(cat.zizhu1)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue2) + parseInt(cat.huoyue1)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang2) + parseInt(cat.jiankang1)) / 2);


            } else if (mother == cat.name3 && cat.sex3 == "girl" && cat.age3 >= 30) {
                cat.pstate3 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu2) + parseInt(cat.zizhu3)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue2) + parseInt(cat.huoyue3)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang2) + parseInt(cat.jiankang3)) / 2);


            } else if (mother == cat.name4 && cat.sex4 == "girl" && cat.age4 >= 30) {
                cat.pstate4 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu2) + parseInt(cat.zizhu4)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue2) + parseInt(cat.huoyue4)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang2) + parseInt(cat.jiankang4)) / 2);


            } else if (mother == cat.name5 && cat.sex5 == "girl" && cat.age5 >= 30) {
                cat.pstate5 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu2) + parseInt(cat.zizhu5)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue2) + parseInt(cat.huoyue5)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang2) + parseInt(cat.jiankang5)) / 2);


            } else {
                return;
            }
        } else if (father == cat.name3 && cat.sex3 == "boy" && cat.age3 >= 30) {
            if (mother == cat.name1 && cat.sex1 == "girl" && cat.age1 >= 30) {
                cat.pstate1 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu3) + parseInt(cat.zizhu1)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue3) + parseInt(cat.huoyue1)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang3) + parseInt(cat.jiankang1)) / 2);


            } else if (mother == cat.name2 && cat.sex2 == "girl" && cat.age2 >= 30) {
                cat.pstate2 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu3) + parseInt(cat.zizhu2)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue3) + parseInt(cat.huoyue2)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang3) + parseInt(cat.jiankang2)) / 2);


            } else if (mother == cat.name4 && cat.sex4 == "girl" && cat.age4 >= 30) {
                cat.pstate4 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu3) + parseInt(cat.zizhu4)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue3) + parseInt(cat.huoyue4)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang3) + parseInt(cat.jiankang4)) / 2);


            } else if (mother == cat.name5 && cat.sex5 == "girl" && cat.age5 >= 30) {
                cat.pstate5 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu3) + parseInt(cat.zizhu5)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue3) + parseInt(cat.huoyue5)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang3) + parseInt(cat.jiankang5)) / 2);


            } else {
                return;
            }
        } else if (father == cat.name4 && cat.sex4 == "boy" && cat.age4 >= 30) {
            if (mother == cat.name1 && cat.sex1 == "girl" && cat.age1 >= 30) {
                cat.pstate1 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu4) + parseInt(cat.zizhu1)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue4) + parseInt(cat.huoyue1)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang4) + parseInt(cat.jiankang1)) / 2);


            } else if (mother == cat.name2 && cat.sex2 == "girl" && cat.age2 >= 30) {
                cat.pstate2 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu4) + parseInt(cat.zizhu2)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue2) + parseInt(cat.huoyue2)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang2) + parseInt(cat.jiankang2)) / 2);


            } else if (mother == cat.name3 && cat.sex3 == "girl" && cat.age3 >= 30) {
                cat.pstate3 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu4) + parseInt(cat.zizhu3)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue4) + parseInt(cat.huoyue3)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang4) + parseInt(cat.jiankang3)) / 2);

            } else if (mother == cat.name5 && cat.sex5 == "girl" && cat.age5 >= 30) {
                cat.pstate5 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu4) + parseInt(cat.zizhu5)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue4) + parseInt(cat.huoyue5)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang4) + parseInt(cat.jiankang5)) / 2);
            } else {
                return;
            }
        } else if (father == cat.name5 && cat.sex5 == "boy" && cat.age5 >= 30) {
            if (mother == cat.name1 && cat.sex1 == "girl" && cat.age1 >= 30) {
                cat.pstate1 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu5) + parseInt(cat.zizhu1)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue5) + parseInt(cat.huoyue1)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang5) + parseInt(cat.jiankang1)) / 2);
            } else if (mother == cat.name2 && cat.sex2 == "girl" && cat.age2 >= 30) {
                cat.pstate2 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu5) + parseInt(cat.zizhu2)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue5) + parseInt(cat.huoyue2)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang5) + parseInt(cat.jiankang2)) / 2);
            } else if (mother == cat.name3 && cat.sex3 == "girl" && cat.age3 >= 30) {
                cat.pstate3 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu5) + parseInt(cat.zizhu3)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue5) + parseInt(cat.huoyue3)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang5) + parseInt(cat.jiankang3)) / 2);
            } else if (mother == cat.name4 && cat.sex4 == "girl" && cat.age4 >= 30) {
                cat.pstate4 = 1;
                cat.newzizhu = Math.floor((parseInt(cat.zizhu5) + parseInt(cat.zizhu4)) / 2);
                cat.newhuoyue = Math.floor((parseInt(cat.huoyue5) + parseInt(cat.huoyue4)) / 2);
                cat.newjiankang = Math.floor((parseInt(cat.jiankang5) + parseInt(cat.jiankang4)) / 2);
            } else {
                return;
            }
        } else {
            return;
        }
    } else {
        alert("猫位已满！");
    }
    save();
}