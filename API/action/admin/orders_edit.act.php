<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/**
	 * @desc 编辑客户的内容
	 * @example http://www.hms.com/HMS/API/action/admin/orders_edit.act.php?oId=1&cId=1&pId=1&inDate=2016-2-28&outDate=2016-3-1&days=2&total=120&isPay=1&rank=1
	 */
	
	// 从cookie里获取管理员id
	$a_id = $_COOKIE['userId'];

	if($a_id === 0) {
		echo '{"info":"请先登录！","res":false}';
	}else{
		// GET方式获取订单编号
		$o_id = $_GET['oId'];
		// GET方式获取客户编号
		$c_id = $_GET['cId'];
		// GET方式获取产品编号
		$p_id = $_GET['pId'];
		// GET方式获取入住时间
		$o_inDate = $_GET['inDate'];
		// GET方式获取离开时间
		$o_outDate = $_GET['outDate'];
		// GET方式获取入住天数
		$o_days = $_GET['days'];
		// GET方式获取应付金额
		$o_total = $_GET['total'];
		// GET方式获取是否支付
		$o_isPay = $_GET['isPay'];
		// GET方式获取排序权重
		$o_rank = $_GET['rank'];

		// 获取当前时间
		$o_operateTime = date('Y-m-d h:i:s',time());

		// 执行更新操作
		$sql = "UPDATE orders SET c_id=$c_id,p_id=$p_id,a_id=$a_id,o_inDate='$o_inDate',o_outDate='$o_outDate',o_days=$o_days,o_total='$o_total',o_isPay=$o_isPay,o_rank=$o_rank,o_operateTime='$o_operateTime' WHERE o_id=$o_id";

		$res = $_mysqli->db_noquery($sql);

		if($res){
		    echo '{"res":true}';
		}else{
		    echo '{"res":false}';
		}
	}

?>