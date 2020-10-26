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

function lowlvl1() {
    if (costcounter(0.5)) {
        return;
    }
    result = randomNum(0, 100);
    newstext(result);
    if (result < 75) {
        ssr.rnum = ssr.rnum + 1;
    } else if (result > 75 && result < 95) {
        srweight = randomNum(0, 2);
        if (srweight == 0) {
            ssr.srnum = ssr.srnum + 1;
        } else {
            ssr.rnum = ssr.rnum + 1;
        }
    } else {
        ssrweight = randomNum(0, 3);
        if (ssrweight == 0) {
            document.getElementById("myImg").onclick();
            //alert("SSR!");
            ssr.ssrnum = ssr.ssrnum + 1;
        } else {
            ssr.srnum = ssr.srnum + 1;
        }
    }
    displayresult();
}

function highlvl1() {
    if (costcounter(1)) {
        return;
    }
    result = randomNum(0, 100);
    newstext(result);
    if (result < 75) {
        ssr.rnum = ssr.rnum + 1;
    } else if (result > 75 && result < 90) {
        srweight = randomNum(0, 1);
        if (srweight == 0) {
            ssr.srnum = ssr.srnum + 1;
        } else {
            ssr.rnum = ssr.rnum + 1;
        }
    } else {
        ssrweight = randomNum(0, 2);
        if (ssrweight == 0) {
            document.getElementById("myImg").onclick();
            //alert("SSR!");
            ssr.ssrnum = ssr.ssrnum + 1;
        } else {
            ssr.srnum = ssr.srnum + 1;
        }
    }
    displayresult();
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
            result10r = result10r + 1;
        } else if (result[i] > 90 && result[i] < 98) {
            result10sr = result10sr + 1;
        } else {
            document.getElementById("myImg").onclick();
            //alert(result[i] + "SSR!");
            result10ssr = result10ssr + 1;
        }
        newstext(result[i]);
        i++;
    }

    if (Math.max.apply(null, result) <= 90) {
        result10sr = result10sr + 1;
    } else {
        result10d = randomNum(0, 100);
        newstext(result10d);
        if (result10d < 90) {
            result10r = result10r + 1;
        } else if (result10d > 90 && result10d < 98) {
            result10sr = result10sr + 1;
        } else {
            document.getElementById("myImg").onclick();
            //alert(result10d + "SSR!");
            result10ssr = result10ssr + 1;
        }
    }
    alert("R:" + result10r + "; SR:" + result10sr + "; SSR:" + result10ssr);

    ssr.rnum = ssr.rnum + result10r;
    ssr.srnum = ssr.srnum + result10sr;
    ssr.ssrnum = ssr.ssrnum + result10ssr;
    displayresult();
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
            result10r = result10r + 1;
        } else if (result[i] > 80 && result[i] < 95) {
            result10sr = result10sr + 1;
        } else {
            document.getElementById("myImg").onclick();
            // alert(result[i] + "SSR!");
            result10ssr = result10ssr + 1;
        }
        i++;
    }

    if (Math.max.apply(null, result) < 95) {
        result10ssr = result10ssr + 1;
        document.getElementById("myImg").onclick();
    } else {
        result10d = randomNum(0, 100);
        newstext(result10d);
        if (result10d < 80) {
            result10r = result10r + 1;
        } else if (result10d > 80 && result10d < 95) {
            result10sr = result10sr + 1;
        } else {
            document.getElementById("myImg").onclick();
            //alert(result10d + "SSR!");
            result10ssr = result10ssr + 1;
        }
    }
    alert("R:" + result10r + "; SR:" + result10sr + "; SSR:" + result10ssr);

    ssr.rnum = ssr.rnum + result10r;
    ssr.srnum = ssr.srnum + result10sr;
    ssr.ssrnum = ssr.ssrnum + result10ssr;
    displayresult();
}