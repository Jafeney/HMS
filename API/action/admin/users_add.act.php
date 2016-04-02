<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require '/Library/WebServer/Documents/HMS/API/util/common.php';

	/**
	 * @example "http://www.hms.com/HMS/API/action/admin/users_add.act.php?name=测试&card=330683199567852342&sex=男&phone=13732560606&address=温州医科大学&rank=1" 
	 */

	/*预定房间*/
	//第一步：获取GET方式提交的参数
	$name=$_GET['name']; //姓名
	$card=$_GET['card']; //身份证
	$sex=$_GET['sex']; //性别
	$phone=$_GET['phone']; //手机
	$address=$_GET['address']; //地址
	$rank=$_GET['rank']; //排序

	$now=date('Y-m-d h:i:s',time()); //当前系统时间

	//第二步：根据预约的手机号码获取该手机号码对应的c_id
	$test=$_mysqli->db_query("SELECT * from customer where c_phone='$phone'");

	if($test){
		//如果该手机号码存在 则提示用户已存在，返回cId和upTime
		$cId=$test['c_id'];
		echo '{"cid":'.$cId.',"time":"'.$test['c_upTime'].'"}';
	}else{
		//如果该手机号码不存在 则创建
		$sql="INSERT INTO customer(c_name, c_IDcard, c_sex, c_phone, c_address, c_upTime, c_rank, c_isDel) VALUES ('$name','$card','$sex','$phone','$address','$now',$rank,0)";
		$res=$_mysqli->db_noquery($sql);
		$res=$_mysqli->db_query("SELECT * from customer where c_phone='$phone'");
		echo '{"cid":'.$res['c_id'].',"time":"'.$res['c_upTime'].'"}';
	}
?>