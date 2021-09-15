var sale_state = [false,-1];
function random_sale(){
    //随机遇到商店打折
    var rand = randomNum(0, 100);
    if(rand <= 10){
        sale_state = [true,3];
    }else{}
}

function random_events_dis(){
    if(sale_state[1] <= 0){
        sale_state[0] = false;
    }else{}
    if(sale_state[0]){
        addmessage(lan.shop_dis_msg);
        fert_price = 1;
        debug_price = 2;
        document.getElementById("shop_fert").innerHTML = lan.shop_fert + "50%";
        document.getElementById("shop_debug").innerHTML = lan.shop_debug + "50%";
    }else{
        if(sale_state[1] == 0){
            addmessage(lan.shop_dis_end_msg);
            sale_state[1] = -1;
        }
        fert_price = 2;
        debug_price = 4;
        document.getElementById("shop_fert").innerHTML = lan.shop_fert;
        document.getElementById("shop_debug").innerHTML = lan.shop_debug;
    }
}