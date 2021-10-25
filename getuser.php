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
echo '连接成功<br/>';
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$sql = "SELECT * FROM gold WHERE name = '".$_GET['q']."'";
echo $sql;

mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );
if (mysqli_num_rows($retval) > 0) {
  // 输出数据
  while($row = mysqli_fetch_assoc($retval)) {
      echo "<br/>id: " . $row["id"]. " - Name: " . $row["name"]. " - pass: " . $row["gold"]. "<br>";
  }
} else {
  echo "<br/>0 结果";
}
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($conn));
}
echo "<br/>数据插入成功";
mysqli_close($conn);
?>