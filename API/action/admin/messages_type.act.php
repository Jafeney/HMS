<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require '/Library/WebServer/Documents/HMS/API/util/common.php';

	/**
	 * @desc 分页获取留言列表内容
	 * @example http://www.hms.com/HMS/API/action/admin/messages_type.act.php?page=0&rows=10&type=1
	 */

	// GET方式获取每页显示的行数
    $page_rows = $_GET['rows']; 
    // GET方式获取每页的起始数字 (注意：页码page从0开始计时)
    $page_start = $_GET['page']*$page_rows;
    // GET方式获取需要获取的留言类型（注意：1->所有留言  2->待阅读  3->已阅）
    $type = $_GET['type'];

    // 获取记录总数
    $rows_total = $_mysqli->db_query("select count(*) as count from message where m_isDel=0")['count'];  

    // 根据type的类型查询结果并按照留言发布时间倒序排序 
    switch ($type) {
    	case 1:
    		$sql = "SELECT * FROM message WHERE m_isDel=0 ORDER BY m_upTime desc LIMIT $page_start,$page_rows";
    		break;
    	case 2:
    		$sql = "SELECT * FROM message WHERE m_isDel=0 AND m_isRead=0 ORDER BY m_upTime desc LIMIT $page_start,$page_rows";
    		break;
    	case 3:
    		$sql = "SELECT * FROM message WHERE m_isDel=0 AND m_isRead=1 ORDER BY m_upTime desc LIMIT $page_start,$page_rows";
    		break;	
    	default:
    		break;
    }
    $res = $_mysqli->db_query_all($sql);

    if(sizeof($res)){
    	echo formatJson($res);
    }

?>