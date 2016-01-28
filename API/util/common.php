<?php
	
	header('Content-Type:text/html;charset=utf-8');
	
	//定义一个常量来授权,防止非法调用
	define('IN_TG', TRUE);
	if(!defined('IN_TG')){
		exit("Access Defined!");
	}
	
	//拒绝低版本的php
	if(PHP_VERSION<'5.0'){
		exit('Version is too low!');
	}

	//引入函数库操作类
	require 'E:/wamp/www/HMS/API/util/SQLhelper.class.php';
	//引入基本操作方法库
	require 'E:/wamp/www/HMS/API/util/util.func.php';

	/*返回导航栏元素*/
	$_mysqli=new sqlhelper();

?>