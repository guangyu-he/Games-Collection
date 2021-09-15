function onload() {

    lang_sel(lang_state);
    message = lan.message_p + ""; //加载测试存档时无法显示提示，待修改。
    document.getElementsByTagName('body')[0].style.zoom = 0.8

    document.getElementById("version").innerHTML = "210914 - 2249";


    document.getElementById("status").style = "display:none";
    
    text_display();


    if(usr.name == "local"){
        document.getElementById("user").innerHTML = "用户登录";
    }else{
        document.getElementById("user").innerHTML = "登出"+usr.name;
    }
}