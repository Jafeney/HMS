<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require '/Library/WebServer/Documents/HMS/API/util/common.php';

	/**
	 * @example "http://www.hms.com/HMS/API/action/admin/orders_add.act.php?productId=1&userPhone=18367853270&inDate=2016-02-20&outDate=2016-02-21&days=1" 
	 */

	/*预定房间*/
	//第一步：获取GET方式提交的参数
	$productId=$_GET['productId']; //产品id
	$userPhone=$_GET['userPhone']; //联系电话
	$inDate=$_GET['inDate']; //入住时间
	$outDate=$_GET['outDate']; //离开时间
	$days=$_GET['days']; //入住天数

	$now=date('Y-m-d h:i:s',time()); //当前系统时间

	//第二步：根据预约的手机号码获取该手机号码对应的c_id
	$test=$_mysqli->db_query("SELECT c_id from customer where c_phone='$userPhone'");
	if($test){
		//如果该手机号码存在 则查找
		$cId=$test['c_id'];
	}else{
		//如果该手机号码不存在 则创建
		$sql="INSERT INTO customer(c_name, c_IDcard, c_sex, c_phone, c_address, c_upTime, c_rank, c_isDel) VALUES (NULL,NULL,NULL,'$userPhone',NULL,'$now',1,0)";
		$res=$_mysqli->db_noquery($sql);
		$cId=$_mysqli->db_query("SELECT c_id from customer where c_phone='$userPhone'")['c_id'];
	}
	
	//第三步：根据产品id和天数计算应付金额
	$money=$_mysqli->db_query("SELECT p_price from product where p_id='$productId'")['p_price']*$days;

	//第四步：生成订单
	$res=$_mysqli->db_noquery("INSERT INTO orders(c_id, p_id,o_upTime, o_inDate, o_outDate, o_days, o_total, o_isPay, o_rank, o_isDel) VALUES ('$cId','$productId','$now','$inDate','$outDate','$days','$money',0,1,0)");

	//第五步：执行成功则返回 1
	if($res) {
		echo '{"res":1}';
	}
?>