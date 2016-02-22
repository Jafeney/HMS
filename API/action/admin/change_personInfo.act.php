<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/*修改用户个人信息*/
	$a_id=$_COOKIE['userId'];
	$new_userName=$_GET['userName'];
	$new_address=$_GET['address'];
	$new_email=$_GET['email'];
	$new_phone=$_GET['phone'];
	$sql="UPDATE admin set a_name='$new_userName',a_address='$new_address',a_email='$new_email',a_phone='$new_phone' where a_id='$a_id' and a_isDel=0";
	
	$res=$_mysqli->db_noquery($sql);

	if($res) {
		echo '{ "res":"success"}';
	}
	
?>