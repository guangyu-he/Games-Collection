var Envenom = [35, 6, 1, 0.1, 0]
var Envenom_dot = 0;
var Envenom_damage = 0;
var Envenom_damage_sum = 0;

var Poisonbomb = [0, 0, 0, 0.45, 0]
var Poisonbomb_damage = 0;
var Poisonbomb_damage_sum = 0;


function envenom_func(){

    if(combo > 0){
        if(energy[0] >= Envenom[0]){
            
            news.newstext = "";
            document.getElementById("newstext").innerHTML = news.newstext;
            talents();

            vanish_state = 1;

            Envenom_dot = combo + 1;
            energy[0] -= Envenom[0];

            if(slice_time > 0){
                slice_time += 3 * combo;
            }else{}

            if(wow.talent3 == "毒药炸弹"){
                var Poisonbomb_state = randomNum(0,10);
                if(Poisonbomb_state <= combo){
                    crit_state = randomNum(0,10);
                    if(crit_state <= wow.crit*10){
                        Poisonbomb_damage = shiv_buff_damage(Poisonbomb[3]) * wow.player_ap * (wow.vers + 1) * (nightwalk_damage + planning_damage + 1) * 2;
                        newstext("/毒药炸弹(C)"+ Poisonbomb_damage.toFixed(0));
                    }else{
                        Poisonbomb_damage = shiv_buff_damage(Poisonbomb[3]) * wow.player_ap * (wow.vers + 1) * (nightwalk_damage + planning_damage + 1);
                        newstext("/毒药炸弹"+ Poisonbomb_damage.toFixed(0));
                    }
                }else{}
            }else{}

            crit_state = randomNum(0,10);
            if(crit_state <= wow.crit*10){
                Envenom_damage = shiv_buff_damage(Envenom[3]) * wow.player_ap * combo * 2  * (wow.vers + 1) * (nightwalk_damage + sixcombo_damage + planning_damage + doom_envenom + 1) * 2;
                newstext("/毒伤(C)"+ Envenom_damage.toFixed(0));
            }else{
                Envenom_damage = shiv_buff_damage(Envenom[3]) * wow.player_ap * combo * 2  * (wow.vers + 1) * (nightwalk_damage + sixcombo_damage + planning_damage + doom_envenom + 1);
                newstext("/毒伤"+ Envenom_damage.toFixed(0));
            }
            combo = 0;

            if(Envenom_dot <= Envenom[1]*0.3){
                Envenom_dot += Envenom[1];
            }else{
                Envenom_dot = Envenom[1];
            }

            if(wow.talent1 == "深谋远虑"){
                planning_state = 1;
                planning_time = 4;
            }
            
            wow.crit = crit_ini;
            dot_display();
            damage();
        }else{
            return;
        }
    }else{
        return;
    }
}
