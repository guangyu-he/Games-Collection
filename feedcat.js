function feedfunction() {
    cat.food = parseInt(cat.food) - 50;
    if (catselected == 1) {
        cat.hungerstatus1 = parseInt(cat.hungerstatus1) + 100;
        if (cat.hungerstatus1 > cat.hungermax1) {
            toomanyfood(cat.name1, cat.hungerstatus1, cat.hungermax1);
            cat.lovestatus1 = parseInt(cat.lovestatus1) + 5;
        }
        if (parseInt(cat.hungerstatus1) - cat.hunger1 <= hungerlimit) {
            document.getElementById("hunger").className = "button-border button-rounded button-caution";
        } else {
            document.getElementById("hunger").className = "button-border button-rounded button-primary";
        }
        document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus1 + "/" + cat.hungermax1;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus1;
    } else if (catselected == 2) {
        cat.hungerstatus2 = parseInt(cat.hungerstatus2) + 100;
        if (cat.hungerstatus2 > cat.hungermax2) {
            toomanyfood(cat.name2, cat.hungerstatus2, cat.hungermax2);
            cat.lovestatus2 = parseInt(cat.lovestatus2) + 5;
        }
        if (parseInt(cat.hungerstatus2) - cat.hunger2 <= hungerlimit) {
            document.getElementById("hunger").className = "button-border button-rounded button-caution";
        } else {
            document.getElementById("hunger").className = "button-border button-rounded button-primary";
        }
        document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus2 + "/" + cat.hungermax2;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus2;
    } else if (catselected == 3) {
        cat.hungerstatus3 = parseInt(cat.hungerstatus3) + 100;
        if (cat.hungerstatus3 > cat.hungermax3) {
            toomanyfood(cat.name3, cat.hungerstatus3, cat.hungermax3);
            cat.lovestatus3 = parseInt(cat.lovestatus3) + 5;
        }
        if (parseInt(cat.hungerstatus3) - cat.hunger3 <= hungerlimit) {
            document.getElementById("hunger").className = "button-border button-rounded button-caution";
        } else {
            document.getElementById("hunger").className = "button-border button-rounded button-primary";
        }
        document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus3 + "/" + cat.hungermax3;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus3;
    } else if (catselected == 4) {
        cat.hungerstatus4 = parseInt(cat.hungerstatus4) + 100;
        if (cat.hungerstatus4 > cat.hungermax4) {
            toomanyfood(cat.name4, cat.hungerstatus4, cat.hungermax4);
            cat.lovestatus4 = parseInt(cat.lovestatus4) + 5;
        }
        if (parseInt(cat.hungerstatus4) - cat.hunger4 <= hungerlimit) {
            document.getElementById("hunger").className = "button-border button-rounded button-caution";
        } else {
            document.getElementById("hunger").className = "button-border button-rounded button-primary";
        }
        document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus4 + "/" + cat.hungermax4;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus4;
    } else if (catselected == 5) {
        cat.hungerstatus5 = parseInt(cat.hungerstatus5) + 100;
        if (cat.hungerstatus5 > cat.hungermax5) {
            toomanyfood(cat.name5, cat.hungerstatus5, cat.hungermax5);
            cat.lovestatus5 = parseInt(cat.lovestatus5) + 5;
        }
        if (parseInt(cat.hungerstatus5) - cat.hunger5 <= hungerlimit) {
            document.getElementById("hunger").className = "button-border button-rounded button-caution";
        } else {
            document.getElementById("hunger").className = "button-border button-rounded button-primary";
        }
        document.getElementById("hunger").innerHTML = "饱食度:" + cat.hungerstatus5 + "/" + cat.hungermax5;
        document.getElementById("love").innerHTML = "好感度:" + cat.lovestatus5;
    }

    document.getElementById("food").innerHTML = "剩余食物:" + cat.food;
    //save();

}