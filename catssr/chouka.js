function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function costcounter(mode) {
    cost = mode * 100;
    if (ssr.counter < cost) {
        newstext("counter not enough!");
        return true;
    } else {
        ssr.counter = ssr.counter - cost;
        return false;
    }
}

function getpromote(num) {
    if (num == 1) {
        ssr.promote = ssr.promote + 1;
        newstext("get one promte");
    }
}

function lowlvl1() {
    if (costcounter(0.5)) {
        return;
    }
    result = randomNum(0, 100);
    newstext(result);
    if (result < 75) {
        getpromote(result);
        ssr.rnum = ssr.rnum + 1;
        resultimg("r");
        document.getElementById("myImg").onclick();
    } else if (result > 75 && result < 95) {
        srweight = randomNum(0, 2);
        if (srweight == 0) {
            ssr.srnum = ssr.srnum + 1;
            resultimg("sr");
            document.getElementById("myImg").onclick();
        } else {
            ssr.rnum = ssr.rnum + 1;
            resultimg("r");
            document.getElementById("myImg").onclick();
        }
    } else {
        ssrweight = randomNum(0, 3);
        if (ssrweight == 0) {
            resultimg("ssr");
            document.getElementById("myImg").onclick();
            //alert("SSR!");
            ssr.ssrnum = ssr.ssrnum + 1;
        } else {
            ssr.srnum = ssr.srnum + 1;
            resultimg("sr");
            document.getElementById("myImg").onclick();
        }
    }
    displayresult();
    document.getElementById("promote").innerHTML = "剩余Promote:" + ssr.promote;
}

function highlvl1() {
    if (costcounter(1)) {
        return;
    }
    result = randomNum(0, 100);
    newstext(result);
    if (result < 75) {
        getpromote(result);
        ssr.rnum = ssr.rnum + 1;
        resultimg("r");
        document.getElementById("myImg").onclick();
    } else if (result > 75 && result < 90) {
        srweight = randomNum(0, 1);
        if (srweight == 0) {
            ssr.srnum = ssr.srnum + 1;
            resultimg("sr");
            document.getElementById("myImg").onclick();
        } else {
            ssr.rnum = ssr.rnum + 1;
            resultimg("r");
            document.getElementById("myImg").onclick();
        }
    } else {
        ssrweight = randomNum(0, 2);
        if (ssrweight == 0) {
            resultimg("ssr");
            document.getElementById("myImg").onclick(); //alert("SSR!");
            ssr.ssrnum = ssr.ssrnum + 1;
        } else {
            ssr.srnum = ssr.srnum + 1;
            resultimg("sr");
            document.getElementById("myImg").onclick();
        }
    }
    displayresult();
    document.getElementById("promote").innerHTML = "剩余Promote:" + ssr.promote;
}

function lowlvl10() {
    if (costcounter(5)) {
        return;
    }
    var result = new Array();
    result10r = 0;
    result10sr = 0;
    result10ssr = 0;
    i = 0
    while (i < 9) {
        result[i] = randomNum(0, 100);
        if (result[i] < 90) {
            getpromote(result[i]);
            result10r = result10r + 1;
            gallarydisplay(i, "r");
        } else if (result[i] > 90 && result[i] < 98) {
            result10sr = result10sr + 1;
            gallarydisplay(i, "sr");
        } else {
            result10ssr = result10ssr + 1;
            gallarydisplay(i, "ssr");
        }
        newstext(result[i]);
        i++;
    }

    if (Math.max.apply(null, result) <= 90) {
        result10sr = result10sr + 1;
        gallarydisplay(9, "sr");
    } else {
        result10d = randomNum(0, 100);
        newstext(result10d);
        if (result10d < 90) {
            getpromote(result10d);
            result10r = result10r + 1;
            gallarydisplay(9, "r");
        } else if (result10d > 90 && result10d < 98) {
            result10sr = result10sr + 1;
            gallarydisplay(9, "sr");
        } else {
            result10ssr = result10ssr + 1;
            gallarydisplay(9, "ssr");
        }
    }
    openModal();

    ssr.rnum = ssr.rnum + result10r;
    ssr.srnum = ssr.srnum + result10sr;
    ssr.ssrnum = ssr.ssrnum + result10ssr;
    displayresult();
    document.getElementById("promote").innerHTML = "剩余Promote:" + ssr.promote;
}

function highlvl10() {
    if (costcounter(10)) {
        return;
    }
    var result = new Array();
    result10r = 0;
    result10sr = 0;
    result10ssr = 0;
    i = 0
    while (i < 9) {
        result[i] = randomNum(0, 100);
        newstext(result[i]);
        if (result[i] < 80) {
            getpromote(result[i]);
            result10r = result10r + 1;
            gallarydisplay(i, "r");
        } else if (result[i] > 80 && result[i] < 95) {
            result10sr = result10sr + 1;
            gallarydisplay(i, "sr");
        } else {
            result10ssr = result10ssr + 1;
            gallarydisplay(i, "ssr");
        }
        i++;
    }

    if (Math.max.apply(null, result) < 95) {
        result10ssr = result10ssr + 1;
        gallarydisplay(9, "ssr");
    } else {
        result10d = randomNum(0, 100);
        newstext(result10d);
        if (result10d < 80) {
            getpromote(result10d);
            result10r = result10r + 1;
            gallarydisplay(9, "r");
        } else if (result10d > 80 && result10d < 95) {
            result10sr = result10sr + 1;
            gallarydisplay(9, "sr");
        } else {
            result10ssr = result10ssr + 1;
            gallarydisplay(9, "ssr");
        }
    }
    openModal();

    ssr.rnum = ssr.rnum + result10r;
    ssr.srnum = ssr.srnum + result10sr;
    ssr.ssrnum = ssr.ssrnum + result10ssr;
    displayresult();
    document.getElementById("promote").innerHTML = "剩余Promote:" + ssr.promote;
}