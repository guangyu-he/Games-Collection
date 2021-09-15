var switchbutton_state = "1";
function switchbutton(){
    if(switchbutton_state == "1"){
        switchbutton_state = "2";
        document.getElementById("functionbutton1").style = "display: none";
        document.getElementById("functionbutton2").style = "display: block";
    }else if(switchbutton_state == "2"){
        switchbutton_state = "1";
        document.getElementById("functionbutton1").style = "display: block";
        document.getElementById("functionbutton2").style = "display: none";
    }else{
        return;
    }
}

var lang_state = "cn"
function changelanfunction(){
    if(lang_state == "cn"){
        lang_sel("en");
        lang_state = "en";
    }else if(lang_state == "en"){
        lang_sel("cn");
        lang_state = "cn";
    }
}

function restart() {
    var sure;
    sure = confirm("确认删除存档吗！?")
    if (sure == true) {
        localStorage.clear();
        location.reload();
    } else {}
}

function test() {
    //测试用
    message = lan.message_p + "";
    addmessage(lan.testmsg);

    usr.money = "1000";
    usr.fert_nr = "1";
    usr.debug_nr = "1";
    onload();
}