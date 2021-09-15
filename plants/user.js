var sql_return;
var sql_array,sql_name,sql_id,sql_gold,sql_usr_str,sql_pl,sql_updated_date;

function returnuser(str){
    if(str == ""){
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    else{ 
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function(){
        sql_return = this.responseText;
      };
      xmlhttp.open("GET","returnuser.php?q="+str,true);
      xmlhttp.send();
    }
    setTimeout(function(){
        return;
    },50);
}

function adduser(pass){
    if(pass == ""){
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    else{
      var usr_js = JSON.stringify(usr);
      var pl_js = JSON.stringify(pl);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function(){
      };
      xmlhttp.open("GET","adduser.php?n="+usr.name+"&p="+pass+"&g="+usr.money+"&u="+usr_js+"&pl="+pl_js,true);
      xmlhttp.send();
    }
}

function user_log(){
  returnuser(document.getElementById("username_in").value);
  setTimeout(function(){
    sql_array = sql_return.split("<br>");
    var usr_password = sql_array[2];
    if(usr_password == document.getElementById("password_in").value){
      alert("登陆成功");
      sql_id = sql_array[0];
      usr = JSON.parse(sql_array[4]);
      pl = JSON.parse(sql_array[5]);
      sql_updated_date = sql_array[6];
      onload();
      closefunction();
    }
    else{
      alert("用户不存在或密码错误");
    }
  },50);
}

function user_reg(){
  returnuser(document.getElementById("username_in").value);
  setTimeout(function(){
    sql_array = sql_return.split("<br>");
    if(sql_array[1] == document.getElementById("username_in").value){
      alert("用户已存在");
    }
    else{
      usr.name = document.getElementById("username_in").value;
      adduser(document.getElementById("password_in").value);
      setTimeout(function(){
        alert("注册成功");
        onload();
        closefunction();
      },50);
    }
  },50);
}