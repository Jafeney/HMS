<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/**
	 * @desc 检查登录状态
	 * @example http://www.hms.com/HMS/API/action/admin/check_login.act.php
	 */
	
	if(isset($_COOKIE['userId'])) {
		echo '{"res":true}';
	}else{
		echo '{"res":false}';
	}

?>