<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require '/Library/WebServer/Documents/HMS/API/util/common.php';

	/**
	 * @desc 修改用户个人信息
	 * @example http://www.hms.com/HMS/API/action/admin/change_password.act.php?userName=seyaney&address=温州医科大学&email=admin@admin.com&phone=18888888888
	 */
	
	// 从cookie里获取userId
	$a_id=$_COOKIE['userId'];

	// GET方式获取userName
	$new_userName=$_GET['userName'];
	// GET方式获取userName
	$new_address=$_GET['address'];
	// GET方式获取userName
	$new_email=$_GET['email'];
	// GET方式获取userName
	$new_phone=$_GET['phone'];

	// 执行更新操作
	$sql="UPDATE admin set a_name='$new_userName',a_address='$new_address',a_email='$new_email',a_phone='$new_phone' where a_id='$a_id' and a_isDel=0";
	$res=$_mysqli->db_noquery($sql);
	// 如果插入成功
	if($res) {
		echo '{ "res":"success"}';
	}
	
?>