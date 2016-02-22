<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/*添加留言*/
	$mt_id=$_GET['mt_id'];	//留言类型(必填字段)
	$m_content=$_GET['m_content'];	//留言内容（必填字段）
	$m_email=$_GET['m_email'];	//联系邮箱（必填字段）
	$m_phone=$_GET['m_phone'];	//电话号码（必填字段）
	$m_upTime=date('y-m-d h:i:s',time()); //发布时间
	$m_isread=0;	//是否已读
	$m_rank=1;	//排序权重
	$m_isDel=0;	//删除标志

	if($mt_id&&$m_content&&$m_email&&$m_phone){

		/* 插入操作的的sql语句
		 * @example:INSERT INTO message(mt_id, m_content, m_email, m_phone, m_upTime, m_isread, m_rank, m_isDel) VALUES ('1','ok','admin@email.com','18888888888','15-11-21 02:29:15','0','1','0') 
		*/
		$sql="INSERT INTO message(mt_id, m_content, m_email, m_phone, m_upTime, m_isread, m_rank, m_isDel) VALUES ('$mt_id','$m_content','$m_email','$m_phone','$m_upTime','$m_isread','$m_rank','$m_isDel')";
		$res=$_mysqli->db_noquery_return($sql);
	}
	echo "{'res':'$res'}";
	
?>