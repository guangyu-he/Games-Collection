function nextday(){

    //清除消息栏
    message = lan.message_p + "";
    document.getElementById("message_p").style="word-break:break-word;display: none"

    //囤货每天+1
    fert_ini_nr++;
    debug_ini_nr++;

    //每天自然增长10金币
    usr.money = String(parseInt(usr.money) + 10);

    if(sale_state[0]){
        sale_state[1]--;
    }else{}
    random_sale();
    random_events_dis();

    //对所有花盆进行操作
    for(var i=0;i<5;i++){
        var next_health = parseInt(pl[i].health);
        var next_age, next_water, next_fert;
        if(pl[i].id != ""){

            //获得sick参数是概率植物死亡
            if(status_index(pl[i].status,"sick")){
                var dead_rate = randomNum(0,100);
                if(pl[i].age < 10){
                    if(dead_rate <= 85 && pl[i].health <= 50){
                        addmessage(pl[i].name + "生病死掉了");
                        plant_dead(i);
                    }else{}
                }else{
                    if(dead_rate <= 50 && pl[i].health <= 30){
                        addmessage(pl[i].name + "生病死掉了");
                        plant_dead(i);
                    }else{}
                }
            }else{}

            if(next_health == 100 && status_index(pl[i].status,"sick") && pl[i].water >= 50 && pl[i].fert >= 50){
                //自愈
                pl[i].status = status_remove(pl[i].status,"sick");
            }else{}

            //缺水或肥料时减少健康度，如果获得过量参数则减少更多
            if(pl[i].water <= 0){
                next_health = next_health - 10;
            }else{}
            if(pl[i].fert <= 0){
                next_health = next_health - 5;
            }else{}
            if(status_index(pl[i].status,"overwatered") || status_index(pl[i].status,"overferted")){
                next_health = next_health - 20;
            }else{}

            //生命值低于0获得sick参数
            if(next_health <= 0 && !status_index(pl[i].status,"sick")){
                pl[i].status = pl[i].status + ",sick"
            }else{}
            if(next_health <= 0){
                next_health = 0;
            }else{}

            //默认10%概率获得bug参数，每有一盆有，其他的概率就增加5%
            var bug_rate = randomNum(0,100);
            var bug_threshold;
            var bug_nr = 0;
            for(var j=0;j<5;j++){
                if(status_index(pl[j].status,"bug")){
                    bug_nr++;
                }else{}
            }
            bug_threshold = bug_nr * 5 + 10;
            if( bug_rate <= bug_threshold ){
                if(!status_index(pl[i].status,"bug")){
                    pl[i].status = pl[i].status + ",bug"
                }else{}
            }else{}
            if(status_index(pl[i].status,"bug")){
                next_health = next_health - 20;
            }else{}

            //增龄，按年龄扣除水量和肥料
            next_age = parseInt(pl[i].age) + 1;
            if(next_age < 10){
                next_water = parseInt(pl[i].water) - 5;
                next_fert = parseInt(pl[i].fert) - 1;
            }else if(next_age >= 10 && pl[i].age < 30){
                next_water = parseInt(pl[i].water) - 10;
                next_fert = parseInt(pl[i].fert) - 5;
            }
            else{
                next_water = parseInt(pl[i].water) - 20;
                next_fert = parseInt(pl[i].fert) - 10;
            }
            if(next_water <= 0){
                next_water = 0;
            }else{}
            if(next_fert <= 0){
                next_fert = 0;
            }
            
            //年龄大于10时根据稀有度参数获取植物名称
            if(next_age >= 10 && pl[i].name == "tiny"){
                if(status_index(pl[i].status,"sr")){
                    pl[i].name = "sr";
                }else if(status_index(pl[i].status,"ssr")){
                    pl[i].name = "ssr";
                }else{
                    pl[i].name = "r";
                }
            }else{}

            pl[i].age = String(next_age);
            pl[i].water = String(next_water);
            pl[i].fert = String(next_fert);
            pl[i].health = String(next_health);
        }
        else{
            next_water = parseInt(pl[i].water) - 1; //没有花时自然蒸发
            pl[i].water = String(next_water);
        }  
    }
    usr.day = String(parseInt(usr.day) + 1);
    text_display();
}

function plant_dead(id){
    pl[id].id = "";
    pl[id].name = "";
    pl[id].age = "";
    pl[id].life = "";
    pl[id].health = "";
    pl[id].status = "";
}