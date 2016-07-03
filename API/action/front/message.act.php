<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require '/Library/WebServer/Documents/HMS/API/util/common.php';

	/**
	 * @example "http://www.hms.com/HMS/API/action/front/message.act.php?userName=王大宝&productId=1&email=692270687@qq.com&phone=18367853270&content=住的很舒服下次还来哈" 
	 */

	/*顾客留言*/
	//第一步：获取GET方式提交的参数
	$userName=$_GET['userName']; //留言者
	$productId=$_GET['productId']; //产品id
	$email=$_GET['email']; //邮箱
	$phone=$_GET['phone']; //手机号码
	$content=$_GET['content']; //留言内容
	$now=date('Y-m-d h:i:s',time()); //当前系统时间

	//第二步：把该留言插入到数据库
	$sql="INSERT INTO message(m_userName, m_content, m_email, m_phone, m_upTime, `m_isread`, `m_rank`, `m_isDel`) VALUES ('$userName','$content','$email','$phone','$now',0,1,0)";

	$res=$_mysqli->db_noquery($sql);

	//第三步：执行成功则返回 1
	if($res) {
		echo '{"res":1}';
	}
?>