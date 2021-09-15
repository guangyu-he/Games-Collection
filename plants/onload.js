function onload() {

    lang_sel(lang_state);
    message = lan.message_p + ""; //加载测试存档时无法显示提示，待修改。
    document.getElementsByTagName('body')[0].style.zoom = 0.8

    document.getElementById("version").innerHTML = "210914 - 1622";


    document.getElementById("status").style = "display:none";
    
    text_display();


    if(usr.name == "local"){
        document.getElementById("user").innerHTML = lan.user;
    }else{
        document.getElementById("user").innerHTML = lan.logout+usr.name;
    }
}