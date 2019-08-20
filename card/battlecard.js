//玩家判断生物
var battlecard;

function cre(card) {
    if (card == "mana") {
        mana++;
        oldmana = mana;
        document.getElementById("mana").innerHTML = mana;
    } else {
        battlecard = card;
        if (battlecard == "-2-2" || battlecard == "-1-1") {
            if (cb1 == 1) {
                document.getElementById("cbp1").style.border = "2px solid red";
            }
            if (cb2 == 1) {
                document.getElementById("cbp2").style.border = "2px solid red";
            }
            if (cb3 == 1) {
                document.getElementById("cbp3").style.border = "2px solid red";
            }

        } else {
            if (pb1 == 0) {
                document.getElementById("pbp1").style.border = "2px solid red";
            }
            if (pb2 == 0) {
                document.getElementById("pbp2").style.border = "2px solid red";
            }
            if (pb3 == 0) {
                document.getElementById("pbp3").style.border = "2px solid red";
            }

        }
    }

}

//电脑判断生物
var cbattle1, cbattle2, cbattle3;
cbattle1 = "0|0";
cbattle2 = "0|0";
cbattle3 = "0|0";
var cb1 = 0;
var cb2 = 0;
var cb3 = 0;

function ccre(ccard, cmana) {
    var cm1 = cmanaenough(ccard, cmana);
    if (cm1 == true) {
        //优先避免11d
        if (pbattle1 == "1|1|d" && cb2 == 0) {
            //document.getElementById("cbp2").innerHTML = ccard;
            document.getElementById("cbp2").style.border = "2px solid blue";
            cbattle2 = ccard;
            cb2 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }
        if (pbattle1 == "1|1|d" && cb2 == 1 && cb3 == 0) {
            //document.getElementById("cbp3").innerHTML = ccard;
            document.getElementById("cbp3").style.border = "2px solid blue";
            cbattle3 = ccard;
            cb3 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }
        if (pbattle1 == "1|1|d" && cb2 == 1 && cb3 == 1 && cb1 == 0) {
            //document.getElementById("cbp1").innerHTML = ccard;
            document.getElementById("cbp1").style.border = "2px solid blue";
            cb1 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }

        if (pbattle2 == "1|1|d" && cb1 == 0) {
            //document.getElementById("cbp1").innerHTML = ccard;
            document.getElementById("cbp1").style.border = "2px solid blue";
            cbattle1 = ccard;
            cb1 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }
        if (pbattle2 == "1|1|d" && cb1 == 1 && cb3 == 0) {
            //document.getElementById("cbp3").innerHTML = ccard;
            document.getElementById("cbp3").style.border = "2px solid blue";
            cbattle3 = ccard;
            cb3 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }
        if (pbattle2 == "1|1|d" && cb1 == 1 && cb3 == 1 && cb2 == 0) {
            //document.getElementById("cbp2").innerHTML = ccard;
            document.getElementById("cbp2").style.border = "2px solid blue";
            cbattle2 = ccard;
            cb2 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }

        if (pbattle3 == "1|1|d" && cb1 == 0) {
            //document.getElementById("cbp1").innerHTML = ccard;
            document.getElementById("cbp1").style.border = "2px solid blue";
            cbattle1 = ccard;
            cb1 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }
        if (pbattle3 == "1|1|d" && cb1 == 1 && cb2 == 0) {
            //document.getElementById("cbp2").innerHTML = ccard;
            document.getElementById("cbp2").style.border = "2px solid blue";
            cbattle2 = ccard;
            cb2 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }
        if (pbattle3 == "1|1|d" && cb1 == 1 && cb2 == 1 && cb3 == 0) {
            //document.getElementById("cbp3").innerHTML = ccard;
            document.getElementById("cbp3").style.border = "2px solid blue";
            cbattle3 = ccard;
            cb3 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }

        //优先出在有对手的格子里
        if (pb1 == 1 && cb1 == 0) {
            //document.getElementById("cbp1").innerHTML = ccard;
            document.getElementById("cbp1").style.border = "2px solid blue";
            cbattle1 = ccard;
            cb1 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }

        if (pb2 == 1 && cb2 == 0) {
            //document.getElementById("cbp2").innerHTML = ccard;
            document.getElementById("cbp2").style.border = "2px solid blue";
            cbattle2 = ccard;
            cb2 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }

        if (pb3 == 1 && cb3 == 0) {
            //document.getElementById("cbp3").innerHTML = ccard;
            document.getElementById("cbp3").style.border = "2px solid blue";
            cbattle3 = ccard;
            cb3 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }

        if (cb1 == 0) {
            //document.getElementById("cbp1").innerHTML = ccard;
            document.getElementById("cbp1").style.border = "2px solid blue";
            cbattle1 = ccard;
            cb1 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }
        if (cb1 == 1 && cb2 == 0) {
            //document.getElementById("cbp2").innerHTML = ccard;
            document.getElementById("cbp2").style.border = "2px solid blue";
            cbattle2 = ccard;
            cb2 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }
        if (cb1 == 1 && cb2 == 1 && cb3 == 0) {
            //document.getElementById("cbp3").innerHTML = ccard;
            document.getElementById("cbp3").style.border = "2px solid blue";
            cbattle3 = ccard;
            cb3 = 1;
            ccounterbattle();
            getpandt();
            battlepicture();
            return;
        }

    } else if (cm1 == 2) {
        for (var o = 0; o < 5; o++) {
            var cm2 = cmanaenough(oldcard[o], cmana);
            if (cm2 == true) {
                //优先避免11d
                if (pbattle1 == "1|1|d" && cb2 == 0) {
                    //document.getElementById("cbp2").innerHTML = oldcard[o];
                    document.getElementById("cbp2").style.border = "2px solid blue";
                    cbattle2 = oldcard[o];
                    oldcard[o] = "";
                    cb2 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }
                if (pbattle1 == "1|1|d" && cb2 == 1 && cb3 == 0) {
                    //document.getElementById("cbp3").innerHTML = oldcard[o];
                    document.getElementById("cbp3").style.border = "2px solid blue";
                    cbattle3 = oldcard[o];
                    oldcard[o] = "";
                    cb3 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }
                if (pbattle1 == "1|1|d" && cb2 == 1 && cb3 == 1 && cb1 == 0) {
                    //document.getElementById("cbp1").innerHTML = oldcard[o];
                    document.getElementById("cbp1").style.border = "2px solid blue";
                    cbattle1 = oldcard[o];
                    oldcard[o] = "";
                    cb1 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }

                if (pbattle2 == "1|1|d" && cb1 == 0) {
                    //document.getElementById("cbp1").innerHTML = oldcard[o];
                    document.getElementById("cbp1").style.border = "2px solid blue";
                    cbattle1 = oldcard[o];
                    oldcard[o] = "";
                    cb1 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }
                if (pbattle2 == "1|1|d" && cb1 == 1 && cb3 == 0) {
                    //document.getElementById("cbp3").innerHTML = oldcard[o];
                    document.getElementById("cbp3").style.border = "2px solid blue";
                    cbattle3 = oldcard[o];
                    oldcard[o] = "";
                    cb3 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }
                if (pbattle2 == "1|1|d" && cb1 == 1 && cb3 == 1 && cb2 == 0) {
                    //document.getElementById("cbp2").innerHTML = oldcard[o];
                    document.getElementById("cbp2").style.border = "2px solid blue";
                    cbattle2 = oldcard[o];
                    oldcard[o] = "";
                    cb2 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }

                if (pbattle3 == "1|1|d" && cb1 == 0) {
                    //document.getElementById("cbp1").innerHTML = oldcard[o];
                    document.getElementById("cbp1").style.border = "2px solid blue";
                    cbattle1 = oldcard[o];
                    oldcard[o] = "";
                    cb1 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }
                if (pbattle3 == "1|1|d" && cb1 == 1 && cb2 == 0) {
                    //document.getElementById("cbp2").innerHTML = oldcard[o];
                    document.getElementById("cbp2").style.border = "2px solid blue";
                    cbattle2 = oldcard[o];
                    oldcard[o] = "";
                    cb2 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }
                if (pbattle3 == "1|1|d" && cb1 == 1 && cb2 == 1 && cb3 == 0) {
                    //document.getElementById("cbp3").innerHTML = oldcard[o];
                    document.getElementById("cbp3").style.border = "2px solid blue";
                    cbattle3 = oldcard[o];
                    oldcard[o] = "";
                    cb3 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }

                //优先出在有对手的格子里
                if (pb1 == 1 && cb1 == 0) {
                    //document.getElementById("cbp1").innerHTML = oldcard[o];
                    document.getElementById("cbp1").style.border = "2px solid blue";
                    cbattle1 = oldcard[o];
                    oldcard[o] = "";
                    cb1 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }

                if (pb2 == 1 && cb2 == 0) {
                    //document.getElementById("cbp2").innerHTML = oldcard[o];
                    document.getElementById("cbp2").style.border = "2px solid blue";
                    cbattle2 = oldcard[o];
                    oldcard[o] = "";
                    cb2 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }

                if (pb3 == 1 && cb3 == 0) {
                    //document.getElementById("cbp3").innerHTML = oldcard[o];
                    document.getElementById("cbp3").style.border = "2px solid blue";
                    cbattle3 = oldcard[o];
                    oldcard[o] = "";
                    cb3 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }

                if (cb1 == 0) {
                    //document.getElementById("cbp1").innerHTML = oldcard[o];
                    document.getElementById("cbp1").style.border = "2px solid blue";
                    cbattle1 = oldcard[o];
                    oldcard[o] = "";
                    cb1 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }
                if (cb1 == 1 && cb2 == 0) {
                    //document.getElementById("cbp2").innerHTML = oldcard[o];
                    document.getElementById("cbp2").style.border = "2px solid blue";
                    cbattle2 = oldcard[o];
                    oldcard[o] = "";
                    cb2 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }
                if (cb1 == 1 && cb2 == 1 && cb3 == 0) {
                    //document.getElementById("cbp3").innerHTML = oldcard[o];
                    document.getElementById("cbp3").style.border = "2px solid blue";
                    cbattle3 = oldcard[o];
                    oldcard[o] = "";
                    cb3 = 1;
                    ccounterbattle();
                    getpandt();
                    battlepicture();
                    return;
                }
            } else {

            }
        }
    } else {

    }
}