<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require '/Library/WebServer/Documents/HMS/API/util/common.php';

	/**
	 * @desc 获取首页主体内容
	 * @example http://www.hms.com/HMS/API/action/admin/index_data.act.php
	 */

	// 获取今日订单数量
	$sql="SELECT * from orders where DATEDIFF(o_upTime,now())=0 and o_isDel=0";
	$return['orderCount']=count($_mysqli->db_query_all($sql));

	// 获取今日客户数量
	$sql="SELECT * from customer where DATEDIFF(c_upTime,now())=0 and c_isDel=0";
	$return['customerCount']=count($_mysqli->db_query_all($sql));

	// 获取今日收入
	$sql="SELECT SUM(o_total) as 'total' from orders where DATEDIFF(o_upTime,now())=0 and o_isPay=1 and o_isDel=0";
	$return['income']=$_mysqli->db_query($sql)['total'];

	// 获取今日留言数量
	$sql="SELECT * from message where DATEDIFF(m_upTime,now())=0 and m_isDel=0";
	$return['messageCount']=count($_mysqli->db_query_all($sql));

	// 获取用户名、地址、邮箱、联系电话
	$userId=$_COOKIE['userId'];
	$sql="SELECT * FROM admin where a_id='$userId' and a_isDel=0";
	$res=$_mysqli->db_query_all($sql);

	$return['userName']=$res[0]['a_name'];
	$return['address']=$res[0]['a_address'];
	$return['email']=$res[0]['a_email'];
	$return['phone']=$res[0]['a_phone'];

	// 把return数组转为json对象返回
	echo arrayToJson($return);
	
?>