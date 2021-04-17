var Mutilate = [50, 0, 2, 0.525, 0];
var Mutilate_damage = 0;
var Mutilate_damage_sum = 0;

var doom_damage = 0;
var doom_time = 0;
var doom_damage_sum = 0;

function mutilate_func(){

    if(energy[0] < Mutilate[0]){
    }else{
        news.newstext = "";
        document.getElementById("newstext").innerHTML = news.newstext;
        talents();

        vanish_state = 1;
        energy[0] -= Mutilate[0];

        if(wow.talent1 == "侧袭"){
            var ambush_check = randomNum(0,10);
            if(ambush_check <= 2){
                ambush_state = 1;
            }else{
                ambush_state = 0;
            } 
        }

        crit_state = randomNum(0,10);
        if (crit_state <= wow.crit*10){
            crit_state = randomNum(0,10);
            if (crit_state <= wow.crit*10){
                //双手暴击
                combos(Mutilate[2] + 2);
                Mutilate_damage = Mutilate[3] * (wow.vers + 1) * wow.player_ap * 2 * (planning_damage + nightwalk_damage + 1);
                doom(Mutilate_damage);
                newstext("/毁伤(CC)"+ (Mutilate_damage).toFixed(0));
            }else{
                //单手暴击
                combos(Mutilate[2] + 1);
                Mutilate_damage = Mutilate[3] * (wow.vers + 1) * wow.player_ap * 1.5 * (planning_damage + nightwalk_damage + 1);
                doom(Mutilate_damage);
                newstext("/毁伤(C)"+ (Mutilate_damage).toFixed(0));
            }
        }else{
            //无暴击
            combos(Mutilate[2]);
            Mutilate_damage = Mutilate[3] * (wow.vers + 1) * wow.player_ap * (planning_damage + nightwalk_damage + 1);
            doom(Mutilate_damage);
            newstext("/毁伤"+ (Mutilate_damage).toFixed(0));
        }
        wow.crit = crit_ini;
        damage();
    }

}

function doom(mutilate_damage){
    if(wow.legend == "末日之刃"){
        doom_damage = mutilate_damage * 0.45 * (wow.vers + 1) * (planning_damage + nightwalk_damage + 1) / 8;
        doom_time = 8;
    }else{}
}