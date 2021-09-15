function status_index(status,status_type){
    var status_array = status.split(",");
    for(i=0;i<10;i++){
        if(status_array[i] == status_type){
            return true;
        }else{}
    }
    return false;
}
function status_remove(status,status_type){
    var status_array = status.split(",");
    var status_output = "";
    for(i=0;i<status_array.length;i++){
        if(status_array[i] == status_type){
            status_array[i] = ""
        }else{}
        if(status_array[i] != ""){
            status_output = status_output + status_array[i];
        }else{}
    }
    if(status_output == ","){
        status_output == "";
    }
    return status_output;
}