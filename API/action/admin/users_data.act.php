<?php

	/*设置文档类型和编码方式*/
	header('Content-Type:text/json;charset=utf-8');
	/*引入公共方法库*/
	require '/Library/WebServer/Documents/HMS/API/util/common.php';

	/**
	 * @desc 分页获取客户列表内容
	 * @example http://www.hms.com/HMS/API/action/admin/users_data.act.php?page=0&rows=10
	 */

	// GET方式获取每页显示的行数
    $page_rows = $_GET['rows']; 
    // GET方式获取每页的起始数字 (注意：页码page从0开始计时)
    $page_start = $_GET['page']*$page_rows;

    // 获取记录总数
    $rows_total = $_mysqli->db_query("select count(*) as count from customer where c_isDel=0")['count'];  

    // 查询结果按照用户登记时间倒序排序 
    $sql = "select * from customer where c_isDel=0 order by c_upTime desc limit $page_start,$page_rows";
    $res = $_mysqli->db_query_all($sql);

    if(sizeof($res)){
    	echo formatJson($res);
    }
?>