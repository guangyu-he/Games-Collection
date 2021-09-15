var sql_return;
var user_password="";
var username_str="";

function returnuser(str,mode){
    if(str == "" || mode == ""){
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    else{ 
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function(){
        sql_return = this.responseText;
      };
      xmlhttp.open("GET","returnuser.php?q="+str+"&m="+mode,true);
      xmlhttp.send();
    }
    setTimeout(function(){
        if(mode=="r"){
            username_str = sql_return;
        }else if(mode=="l"){
            user_password = sql_return;
        }else if(mode=="g"){
            //user_gold = sql_return;
        }else if(mode=="s"){
            catstr = sql_return;
        }
        else{
            return;
        }
    },50);
}

function user(){
    if(username_str == "" || username_str == null){
        var username = prompt("请输入用户名");
        returnuser(username,"l");
        setTimeout(function(){
            alert(user_password);
            if(user_password!="" || user_password!=null){
                var password = prompt("请输入密码");
                if(password == user_password){
                returnuser(username,"s");
                setTimeout(function(){
                    localStorage.setItem("catstr", catstr);
                    cardmoney = cat.money;
                    localStorage.setItem("cardmoney", cardmoney);
                    onload();
                },100);
                username_str = username;
                }else{
                    alert("密码错误！或用户不存在！")
                }
            }else{
                alert("用户不存在！");
            }
        },50);
    }else{
        var sure;
        sure = confirm("确认登出？未保存的数据将丢失!")
        if (sure == true) {
            restart();
        } else {
            return;
        }
    }
}