<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require 'E:/wamp/www/HMS/API/util/common.php';

	/**
	 * @desc  删除留言（支持批量操作）
	 * @example http://www.hms.com/HMS/API/action/admin/messages_delete.act.php?id=1,2,3
	 */

	// GET方式获取选择的需要删除的留言,并用','切割成数组
    $delete_arr = explode(',',$_GET['id']); 

    // 根据id循环删除（这里是假删除，即把m_idDel 设为 1 ）
    $success_flag=true;
    for($i=0;$i<sizeof($delete_arr);$i++){

    	$sql="UPDATE message SET m_isDel=1 where m_id=$delete_arr[$i]";
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