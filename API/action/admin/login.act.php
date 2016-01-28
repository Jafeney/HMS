<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/*管理员登录*/
	$a_name=$_GET['a_name'];	//管理员名称（必须字段）
	$a_pwd=$_GET['a_pwd'];	//管理员登录密码（必须字段）

	/**
	 *查询操作
	 *@example: select * from admin where a_name='admin' and a_pwd='syn1314'
	 */
	$sql="select * from admin where a_name='$a_name' and a_pwd='$a_pwd' and a_isDel=0";
	
	$res=$_mysqli->db_query_all($sql);

	if($res[0]['a_id']){
		/*信息匹配成功 把登录信息写入到session里*/
		$_SESSION['userId']=$res[0]['a_id'];
		$_SESSION['userName']=$res[0]['a_pwd'];
		$_SESSION['userThumb']=$res[0]['a_thumb'];

		echo formatJson($res);

		/*更新登录状态信息*/
		$a_loginTimes=date('y-m-d h:i:s',time());
		$a_loginIP=getIPaddress();

		$a_id=$_COOKIE['userId'];

		/**
		* 更新操作
		* @example update admin set a_loginIP='127.0.0.1',a_loginTimes='15-11-21 03:44:59' where a_id='1'
		*/
		$sql="update admin set a_loginIP='$a_loginIP',a_loginTimes='$a_loginTimes' where a_id='$a_id'";
		$res=$_mysqli->db_noquery($sql);
	}

?>