<?php

    /*设置文档类型和编码方式*/
    header('Content-Type:text/json;charset=utf-8');
    /*引入公共方法库*/
    require 'E:/wamp/www/HMS/API/util/common.php';

    /**
     * @desc 编辑客户的内容
     * @example http://www.hms.com/HMS/API/action/admin/users_edit.act.php?id=1&name=盛燕妮&IDcard=330686199401307024&sex=女&phone=18367854605&address=温州医科大学茶山校区&rank=1
     */

    // GET方式获取客户id
    $c_id = $_GET['id'];
    // GET方式获取客户名称
    $c_name = $_GET['name'];
    // GET方式获取客户身份证
    $c_IDcard = $_GET['IDcard'];
    // GET方式获取客户性别
    $c_sex = $_GET['sex'];
    // GET方式获取客户电话号码
    $c_phone = $_GET['phone'];
    // GET方式获取客户常用地址
    $c_address = $_GET['address'];
    // GET方式获取客户排序权重
    $c_rank = $_GET['rank'];

    // 执行更新操作
    $sql = "UPDATE customer SET c_name='$c_name',c_IDcard='$c_IDcard',c_sex='$c_sex',c_phone='$c_phone',c_address='$c_address',c_rank=$c_rank WHERE c_id=$c_id";
    $res = $_mysqli->db_noquery($sql);

    if($res){
        echo '{"res":true}';
    }else{
        echo '{"res":false}';
    }

?>