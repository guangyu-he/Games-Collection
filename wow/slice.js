var Slice = [25, 36, 6, 0, 0]
var slice_time = 0;

function slice_func(){
    if(combo > 0){
        if(energy[0] >= Slice[0]){

            news.newstext = "";
            document.getElementById("newstext").innerHTML = news.newstext;

            if(slice_time == 0){
                slice_time = (combo + 1) * Slice[2];
            }else{
                if(slice_time <= Slice[1]*0.3){
                    slice_time += Slice[1];
                }else{
                    slice_time = Slice[1];
                }
            }

            energy[0] -= Slice[0];
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