<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/**
	 * @desc 审阅留言（支持批量操作）
	 * @example http://www.hms.com/HMS/API/action/admin/messages_look.act.php?id=1,2,3
	 */

	// GET方式获取选择的需要审阅的留言,并用','切割成数组
    $look_arr = explode(',',$_GET['id']); 

    // 从cookie里获取管理员id
    $a_id = $_COOKIE['userId'];

    // 获取当前时间
    $now = date('Y-m-d h:i:s',time());

    // 根据id循环执行审阅操作（即把m_idRead 设为 1 ）
    $success_flag=true;
    for($i=0;$i<sizeof($look_arr);$i++){

    	$sql="UPDATE message SET m_isRead=1,a_id=$a_id,m_operateTime='$now' where m_id=$look_arr[$i]";
    	$res = $_mysqli->db_noquery($sql);
    	if(!$res){
    		$success_flag=false;
    		break;
    	}
    }

    if($success_flag){
    	echo '{"res":true}';
    }else{
    	echo '{"res":false}';
    }
?>