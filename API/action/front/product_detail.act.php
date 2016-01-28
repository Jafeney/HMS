<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/*获取产品详情*/
	$p_id=$_GET['p_id'];	//产品id（必须字段）

	/*
	 *查询操作
	 *@example: select * from product where p_isDel=0 and p_id=1
	 */
	$sql='select * from product where p_isDel=0 and p_id='.$p_id;
	
	$res=$_mysqli->db_query_all($sql);
	
	echo formatJson($res);

?>