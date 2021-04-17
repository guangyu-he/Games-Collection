var Rupture = [25, 24, 4, 0.25, 0]
var Rupture_dot = 0;
var Rupture_damage = 0;
var Rupture_damage_sum = 0;

// Poison Bomb see envenom.js

function rupture_func(){      
    if(combo > 0){
        if(energy[0] >= Rupture[0]){
            
            news.newstext = "";
            document.getElementById("newstext").innerHTML = news.newstext;
            talents();

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

            Rupture_damage = Rupture[3] * wow.player_ap * (combo + 1) *  (nightwalk_damage + sixcombo_damage + planning_damage + 1) / ( (combo + 1) * Rupture[2] );

            if(Rupture_dot == 0){
                Rupture_dot = (combo + 1) * Rupture[2];
            }else{
                if(Rupture_dot <= Rupture[1]*0.3){
                    Rupture_dot += Rupture[1];
                }else{
                    Rupture_dot = Rupture[1];
                }
            }
            energy[0] -= Rupture[0];
            combo = 0;

            if(wow.talent1 == "深谋远虑"){
                planning_state = 1;
                planning_time = 4;
            }
            
            dot_display();
            damage();
        }else{
            return;
        }
    }else{
        return;
    }
}
