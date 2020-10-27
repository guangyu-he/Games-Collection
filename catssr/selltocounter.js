function checkpromoting() {
    promotingtime = promotingtime - 1;
    document.getElementById("promote").innerHTML = "剩余promote time:" + promotingtime;
    if (promotingtime == 0) {
        ispromoting = false;
        var div = document.getElementById('promote');
        div.className = 'button  button-border button-rounded button-primary';
        document.getElementById("promote").innerHTML = "剩余Promote:" + ssr.promote;
    }
}

function rtocounter() {
    if (ssr.rnum <= 0) {
        return;
    }
    ssr.rnum = ssr.rnum - 1;
    if (ispromoting) {
        ssr.counter = ssr.counter + 50;
        checkpromoting();
    } else {
        ssr.counter = ssr.counter + 5;
    }

    displayresult();
}

function srtocounter() {
    if (ssr.srnum <= 0) {
        return;
    }
    ssr.srnum = ssr.srnum - 1;
    if (ispromoting) {
        ssr.counter = ssr.counter + 250;
        checkpromoting();
    } else {
        ssr.counter = ssr.counter + 25;
    }

    displayresult();
}

function ssrtocounter() {
    if (ssr.ssrnum <= 0) {
        return;
    }
    ssr.ssrnum = ssr.ssrnum - 1;
    if (ispromoting) {
        ssr.counter = ssr.counter + 500;
        checkpromoting();
    } else {
        ssr.counter = ssr.counter + 50;
    }
    displayresult();
}