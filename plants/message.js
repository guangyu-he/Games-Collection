
function addmessage(msg){
    message = message + "||" + msg;
    document.getElementById("message_p").innerHTML = message;
    document.getElementById("message_p").style="word-break:break-word;display: block"
}

function delmessage() {
    sure = confirm("确定删除消息?");
    if (sure == null || sure == false) {
        return;
    } else {
        message = lan.message_p + "";
        document.getElementById("message_p").style="word-break:break-word;display: none"
    }
}