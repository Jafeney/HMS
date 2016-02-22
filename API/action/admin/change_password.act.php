<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/*修改用户密码*/
	$a_id=$_COOKIE['userId'];
	$oldpwd=$_GET['oldpwd'];
	$newpwd=$_GET['newpwd'];

	/*校验旧密码是否正确*/
	$sql="SELECT a_pwd from admin where a_pwd='$oldpwd' and a_isDel=0";
	$res=$_mysqli->db_query_all($sql);
	if(!$res){
		echo '{"res":-1}';
	}else{
		$sql="UPDATE admin set a_pwd='$newpwd' where a_id='$a_id' and a_isDel=0";
		$res=$_mysqli->db_noquery($sql);
		if($res) {
			echo '{ "res":1}';
		}else{
			echo '{"res":0}';
		}
	}
	
?>