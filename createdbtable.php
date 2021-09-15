<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'test';            // mysql用户名
$dbpass = '950611';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
echo '连接成功<br />';
$sql = "CREATE TABLE gold( ".
        "id VARCHAR(20) NOT NULL, ".
        "name VARCHAR(100) NOT NULL, ".
        "password INT NOT NULL, ".
        "gold INT NOT NULL, ".
        "usr_str_pl LONGTEXT NOT NULL, ".
        "pl LONGTEXT NOT NULL, ".
        "submission_date DATETIME, ".
        "updated_date DATETIME, ".
        "PRIMARY KEY ( id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('数据表创建失败: ' . mysqli_error($conn));
}
echo "数据表创建成功\n";
mysqli_close($conn);
?>