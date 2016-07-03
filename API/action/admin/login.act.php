<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	// require '/Library/WebServer/Documents/HMS/API/util/common.php';
	require '/Library/WebServer/Documents/HMS/API/util/common.php';

	/**
	 * @desc 管理员登录
	 * @example http://www.hms.com/HMS/API/action/admin/login.act.php?a_name=seyaney&a_pwd=123456
	 */

	// GET方式获取管理员名称
	$a_name=$_GET['a_name'];	
	// GET方式获取管理员登录密码
	$a_pwd=$_GET['a_pwd'];	

	/**
	 *查询操作
	 *@example: select * from admin where a_name='admin' and a_pwd='syn1314'
	 */
	$sql="select * from admin where a_name='$a_name' and a_pwd='$a_pwd' and a_isDel=0";
	$res=$_mysqli->db_query_all($sql);

	if(count($res)==1){

		/*信息匹配成功 把登录信息写入到cookie里*/
		setcookie('userId',$res[0]['a_id']);
		setcookie('userName',$res[0]['a_name']);

		echo '{"res":1}';

		/*更新登录状态信息*/
		$a_loginTimes=$res[0]['a_loginTimes']+1;
		$a_loginIP=getIPaddress();
		$a_id=$_COOKIE['userId'];

		/**
		* 更新操作
		* @example update admin set a_loginIP='127.0.0.1',a_loginTimes='15-11-21 03:44:59' where a_id='1'
		*/
		$sql="update admin set a_loginIP='$a_loginIP',a_loginTimes='$a_loginTimes' where a_id='$a_id'";
		$res=$_mysqli->db_noquery($sql);
	}else{
		echo '{"res":0}';
	}

?>