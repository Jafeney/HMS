<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8'); 
	/*引入公共方法库*/
    // require '/Library/WebServer/Documents/HMS/API/util/common.php'; 
	require 'E:/wamp/www/HMS/API/util/common.php'; 

	/**
	 * @desc 获取初始化数据（第一页全部留言+3类留言的总数）
	 * @example http://www.hms.com/HMS/API/action/admin/messages_data.act.php?page=0&rows=10
	 */
    
    // GET方式获取每页显示的行数
    $page_rows = $_GET['rows']; 
    // GET方式获取每页的起始数字 (注意：页码page从0开始计时)
    $page_start = $_GET['page']*$page_rows; 

    // 分类获取记录
    $all = formatJson($_mysqli->db_query_all("SELECT * FROM message WHERE m_isDel=0 ORDER BY m_upTime desc LIMIT $page_start,$page_rows")); 
    $needRead = formatJson($_mysqli->db_query_all("SELECT * FROM message WHERE m_isDel=0 AND m_isRead=0 ORDER BY m_upTime desc LIMIT $page_start,$page_rows")); 
    $hasRead = formatJson($_mysqli->db_query_all("SELECT * FROM message WHERE m_isDel=0 AND m_isRead=1 ORDER BY m_upTime desc LIMIT $page_start,$page_rows")); 

    echo '{'.'"all":'.$all.',"needRead":'.$needRead.',"hasRead":'.$hasRead.'}';

?>