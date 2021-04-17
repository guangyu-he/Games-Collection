var vendetta_cd = 0;
var vendetta_time = 0;

var deathmark_cd = 0;

var vanish_state = 0;
var vanish_cd = 0;

function vanish_func(){
    if(vanish_cd != 0){

    }else{
        news.newstext = "/消失";
        document.getElementById("newstext").innerHTML = news.newstext;
        vanish_state = 0;
        vanish_cd = 40;

        display_combat_stat()
    }
}

function deathmark_func(){
    if(deathmark_cd != 0){

    }else{
        news.newstext = "/死亡标记";
        document.getElementById("newstext").innerHTML = news.newstext;
        combo = 5;
        deathmark_cd = 20;

        display_combat_stat()
    }
}

function vendetta_func(){
    if(vendetta_cd != 0){

    }else{
        news.newstext = "/宿敌";
        document.getElementById("newstext").innerHTML = news.newstext;

        vendetta_cd = 40;
        vendetta_time = 10;

        wow.player_ap = wow.player_ap * 1.3;

        display_combat_stat()
    }
}
