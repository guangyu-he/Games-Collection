<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'test';            // mysql用户名
$dbpass = '0';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if(! $conn )
{
  die('连接失败: ' . mysqli_error($conn));
}
//echo '连接成功<br/>';
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$id = uniqid();
$name = $_GET['n'];
$password = $_GET['p'];
$gold = $_GET['g'];
$usr_str_pl = $_GET['u'];
$pl = $_GET['pl'];
$submission_date = date('Y-m-d H:i:s');
$updated_date = date('Y-m-d H:i:s');
//echo $name;
 
$sql = "INSERT INTO gold ".
        "(id, name, password, gold, usr_str_pl, pl, submission_date, updated_date) ".
        "VALUES ".
        "('$id','$name','$password','$gold','$usr_str_pl','$pl','$submission_date','$updated_date')";
 
 
 
mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($conn));
}
echo "数据插入成功\n";
mysqli_close($conn);
?>