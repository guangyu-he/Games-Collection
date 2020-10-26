function rtocounter() {
    if (ssr.rnum <= 0) {
        return;
    }
    ssr.rnum = ssr.rnum - 1;
    ssr.counter = ssr.counter + 5

    displayresult()
}

function srtocounter() {
    if (ssr.srnum <= 0) {
        return;
    }
    ssr.srnum = ssr.srnum - 1;
    ssr.counter = ssr.counter + 25

    displayresult()
}

function ssrtocounter() {
    if (ssr.ssrnum <= 0) {
        return;
    }
    ssr.ssrnum = ssr.ssrnum - 1;
    ssr.counter = ssr.counter + 50

    displayresult()
}