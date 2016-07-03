<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require '/Library/WebServer/Documents/HMS/API/util/common.php';

	/**
	 * @desc 注销登录
	 * @example http://www.hms.com/HMS/API/action/admin/login_out.act.php
	 */
	setcookie('userId','');
	echo '{"res":true}';

?>