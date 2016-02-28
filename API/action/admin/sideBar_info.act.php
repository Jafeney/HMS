<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/**
	 * @desc 获取通用状态栏信息
	 * @example http://www.hms.com/HMS/API/action/admin/sideBar_info.act.php
	 */

	// 从cookie里获取用户名
	$source['username']=$_COOKIE['userName'];

	// 获取未读通知条数
	$sql="select * from message where m_isRead=0 and m_isDel=0";
	$res=$_mysqli->db_query_all($sql);
	$source['messageCount']=count($res);

	echo arrayToJson($source);
	
?>