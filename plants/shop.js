function shop_fertfunction(){
    if(fert_ini_nr <= 0){
        addmessage(lan.shop_fert + lan.out_of_sale);
        fert_ini_nr = 0;
        return;
    }else{}
    if(usr.money - fert_price < 0){
        addmessage(lan.insufficient_money);
        return;
    }else{}
    usr.fert_nr = String(parseInt(usr.fert_nr) + 1);
    usr.money = String(parseInt(usr.money) - fert_price);
    fert_ini_nr--;
    text_display();
}

function shop_debugfunction(){
    if(debug_ini_nr <= 0){
        addmessage(lan.shop_debug + lan.out_of_sale);
        debug_ini_nr = 0;
        return;
    }else{}
    if(usr.money - debug_price < 0 ){
        addmessage(lan.insufficient_money);
        return;
    }else{}
    usr.debug_nr = String(parseInt(usr.debug_nr) + 1);
    usr.money = String(parseInt(usr.money) - debug_price);
    debug_ini_nr--;
    text_display();
}

function shop_fertfunction_more(){

    if(fert_ini_nr <= 0){
        addmessage(lan.shop_fert + lan.out_of_sale);
        fert_ini_nr = 0;
        return;
    }else{}

    var shop_nr = prompt(lan.ask_for_nr + fert_ini_nr,fert_ini_nr);
    if(shop_nr == "" || shop_nr == null){
        return;
    }else{}
    shop_nr = parseInt(shop_nr);
    if(usr.money - shop_nr * fert_price< 0){
        addmessage(lan.insufficient_money);
        return;
    }else{}
    if(shop_nr > fert_ini_nr){
        addmessage(lan.insufficient_goods);
        return;
    }else{}
    
    usr.fert_nr = String(parseInt(usr.fert_nr) + shop_nr);
    usr.money = String(parseInt(usr.money) - shop_nr * fert_price);
    fert_ini_nr = fert_ini_nr - shop_nr;
    text_display();
}

function shop_debugfunction_more(){

    if(debug_ini_nr <= 0){
        addmessage(lan.shop_debug + lan.out_of_sale);
        debug_ini_nr = 0;
        return;
    }else{}

    var shop_nr = prompt(lan.ask_for_nr + debug_ini_nr,debug_ini_nr);
    if(shop_nr == "" || shop_nr == null){
        return;
    }else{}
    shop_nr = parseInt(shop_nr);
    if(usr.money - shop_nr * debug_price < 0){
        addmessage(lan.insufficient_money);
        return;
    }else{}
    if(shop_nr > debug_ini_nr){
        addmessage(lan.insufficient_goods);
        return;
    }else{}

    usr.debug_nr = String(parseInt(usr.debug_nr) + shop_nr);
    usr.money = String(parseInt(usr.money) - shop_nr * debug_price);
    debug_ini_nr = debug_ini_nr - shop_nr;
    text_display();
}

var timeOutEvent = 0;
//开始按
function gtouchstart(type){
    //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改
    if(type == "fert"){
        timeOutEvent = setTimeout("longPress_fert()", 500);
    }else if(type == "debug"){
        timeOutEvent = setTimeout("longPress_debug()", 500);
    }
    return false;
};
//手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件   
function gtouchend(type){
    //清除定时器
    clearTimeout(timeOutEvent);
    if(timeOutEvent!=0){
        //这里写要执行的内容（尤如onclick事件）
        if(type == "fert"){
            shop_fertfunction();
        }else if(type == "debug"){
            shop_debugfunction();
        }
    }
    return false;
};
//如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
function gtouchmove(){
    //清除定时器
    clearTimeout(timeOutEvent);
    timeOutEvent = 0;
};
//真正长按后应该执行的内容
function longPress_fert(){
    timeOutEvent = 0;
    //执行长按要执行的内容，如弹出菜单
    shop_fertfunction_more();
}
function longPress_debug(){
    timeOutEvent = 0;
    //执行长按要执行的内容，如弹出菜单
    shop_debugfunction_more();
}