
function plselect(pl_nr){
    plselected = parseInt(pl_nr);
    if(pl[pl_nr].name == ""){
        return;
    }
    /*
    添加针对不同情况的特别提示
    */
    
    for(var i=1;i<=5;i++){
        var select_nr = "state_dis_" + String(i);
        document.getElementById(select_nr).className = "button-border button-rounded button-primary";  
    }
    var select_nr = "state_dis_" + String(plselected+1);
    document.getElementById(select_nr).className = "button-border button-rounded button-glow";
    

    document.getElementById("status").style = "display:block";
    document.getElementById("status").innerHTML = pl[plselected].status;
}


