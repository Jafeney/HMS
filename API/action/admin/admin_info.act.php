<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/*获取管理员信息*/
	$a_id=$_SESSION['userId'];
	$sql="select * from admin where a_id='$a_id' and a_isDel=0";
	
	$res=$_mysqli->db_query_all($sql);

	echo formatJson($res);
	
?>