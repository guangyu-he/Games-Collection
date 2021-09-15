var lan;

var lan_cn = {
    date: "日期:",
    message_p: "消息栏:",
    settings: "设置",

    plname: "名字:",
    pllife: "生命值:",
    plfert: "土壤肥力:",
    plwater: "含水量:",

    user: "用户登陆",
    logout: "登出",

    save: "本地存档",
    load: "读取本地存档",
    delsave: "删除存档",
    loadtest: "加载测试存档",

    changelan: "English",

    hintset_on: "打开游戏提示",
    hintset_off: "关闭游戏提示",
    hintset_oned: "游戏提示已打开",
    hintset_offed: "游戏提示已关闭",

    testmsg: "已加载测试数据",
    shop_dis_msg: "商店折扣中",
    shop_dis_end_msg: "商店折扣结束",
    out_of_sale: "没货了",


    homepage: "返回主页",
    waterbutton: "浇水",
    fertbutton: "施肥",
    bugbutton: "除虫",
    nursebutton: "养护",
    switchbutton_1: "更多",
    switchbutton_2: "返回",

    shop_button: "商店",
    shop_text: "点击以购买,长按购买更多",
    shop_fert: "肥料",
    shop_debug: "杀虫剂",
    shop_supernurse: "超级护理",
    adoptbutton: "捡花",
    buybutton: "买花",
    sellbutton: "卖花",
    birthbutton: "培育",
    fertilizer_state: "肥料数:",
    debug_state: "杀虫剂:",
    supernurse_state: "超级护理:",
    money_state: "金钱:",
    nextday: "下一天",

};

var lan_en = {
    date: "Nr. of date:",
    message_p: "Messages:",
    settings: "Settings",

    plname: "Name:",
    pllife: "Life:",
    plfert: "Fertilize:",
    plwater: "Watering:",

    user: "Login",
    logout: "Logout",

    save: "Local Save",
    load: "Load local Save",
    delsave: "Delete save",
    loadtest: "Load test-profile",

    changelan: "中文",

    hintset_on: "Open hint",
    hintset_off: "Close hint",
    hintset_oned: "Hint opened",
    hintset_offed: "Hint closed",

    testmsg: "Loaded test profile",
    shop_dis_msg: "Shop is on sale",
    shop_dis_end_msg: "Sale is over",
    out_of_sale: "out of sale",

    homepage: "Homepage",
    waterbutton: "Watering",
    fertbutton: "Fertilize",
    bugbutton: "Debug",
    nursebutton: "Nursing",
    switchbutton_1: "More",
    switchbutton_2: "Back",

    shop_button: "Shop",
    shop_text: "Click to buy,press to buy more",
    shop_fert: "Fertilizer",
    shop_debug: "Debug",
    shop_supernurse: "Super-nurse",
    adoptbutton: "Pick plants",
    buybutton: "Buy plants",
    sellbutton: "Sell plants",
    birthbutton: "Cultivate plants",
    fertilizer_state: "Nr of fertilizer:",
    debug_state: "Nr of Pesticide:",
    supernurse_state: "Nr of Supernurse:",
    money_state: "Money:",
    nextday: "Next day",
};

var pl_name;

var pl_name_cn = {
    a: "a",
    b: "b",
    c: "c"
};

var pl_name_en = {
    a: "a_e",
    b: "b_e",
    c: "c_e"
};

function lang_sel(lan_type){
    if(lan_type == "en"){
        lan = lan_en;
        pl_name = pl_name_en;
    }else{
        lan = lan_cn;
        pl_name = pl_name_cn;
    }
    lang_dis();
}

function lang_dis(){
    document.getElementById("settings").innerHTML = lan.settings;
    document.getElementById("date").innerHTML = lan.date;
    document.getElementById("message_p").innerHTML = lan.message_p;

    document.getElementById("user").innerHTML = lan.user;

    document.getElementById("changelan").innerHTML = lan.changelan;

    document.getElementById("save").innerHTML = lan.save;
    document.getElementById("load").innerHTML = lan.load;
    document.getElementById("delsave").innerHTML = lan.delsave;
    document.getElementById("loadtest").innerHTML = lan.loadtest;
    document.getElementById("hintset").innerHTML = lan.hintset_off; //默认打开游戏提示，因此显示为关闭提示
    document.getElementById("homepage").innerHTML = lan.homepage;
    document.getElementById("waterbutton").innerHTML = lan.waterbutton;
    document.getElementById("fertbutton").innerHTML = lan.fertbutton;
    document.getElementById("bugbutton").innerHTML = lan.bugbutton;
    document.getElementById("nursebutton").innerHTML = lan.nursebutton;
    document.getElementById("switchbutton_1").innerHTML = lan.switchbutton_1;
    document.getElementById("switchbutton_2").innerHTML = lan.switchbutton_2;

    document.getElementById("shop_button").innerHTML = lan.shop_button;
    document.getElementById("shop_text").innerHTML = lan.shop_text;
    document.getElementById("shop_fert").innerHTML = lan.shop_fert;
    document.getElementById("shop_debug").innerHTML = lan.shop_debug;
    document.getElementById("shop_supernurse").innerHTML = lan.shop_supernurse;
    document.getElementById("adoptbutton").innerHTML = lan.adoptbutton;
    document.getElementById("buybutton").innerHTML = lan.buybutton;
    document.getElementById("sellbutton").innerHTML = lan.sellbutton;
    document.getElementById("birthbutton").innerHTML = lan.birthbutton;
    document.getElementById("fertilizer_state").innerHTML = lan.fertilizer_state;
    document.getElementById("debug_state").innerHTML = lan.debug_state;
    document.getElementById("supernurse_state").innerHTML = lan.supernurse_state;
    document.getElementById("money_state").innerHTML = lan.money_state;
    document.getElementById("nextday").innerHTML = lan.nextday;


}
