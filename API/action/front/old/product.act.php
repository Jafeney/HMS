<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/*分页获取产品列表*/
	$page=$_GET['page'];	//当前页号(必要字段)
	$row=$_GET['row'];	//要显示的行数（必要字段）

	$start=$page*$row;//计算得到当前页的第一个索引值

	/*
	 *查询操作（第一页、第一条都从0开始）
	 *@example: select p_id,pt_id,p_name,p_thumb,p_price from product where p_isDel=0 limit 0,5
	 */
	$sql='select p_id,pt_id,p_name,p_thumb,p_price from product where p_isDel=0 limit '.$start.','.$row;
	
	$res=$_mysqli->db_query_all($sql);
	
	echo formatJson($res);

?>