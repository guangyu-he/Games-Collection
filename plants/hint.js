function hintsetting() {
    if (hint) {
        hint = false;
        newstext(lan.hintset_offed)
        document.getElementById("hintset").innerHTML = lan.hintset_on;
    } else {
        hint = true;
        newstext(lan.hintset_oned)
        document.getElementById("hintset").innerHTML = lan.hintset_off;
    }
}