<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'test';            // mysql用户名
$dbpass = '0';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

$mode = $_GET['m'];

// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$sql = "SELECT * FROM gold WHERE name = '".$_GET['q']."'";

mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );

if (mysqli_num_rows($retval) > 0) {
  // 输出数据
  while($row = mysqli_fetch_assoc($retval)) {
      if($mode == "r"){
        echo "" . $row["name"]. "";
      }else if($mode == "l"){
        echo "" . $row["password"]. "";
      }else if($mode == "g"){
        echo "" . $row["gold"]. "";
      }else if($mode == "s"){
        echo "" . $row["string"]. "";
      }
  }
} else {
  echo "";
}

mysqli_close($conn);
?>