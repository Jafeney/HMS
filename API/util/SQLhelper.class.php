<?php

	/*数据库操作类，定义增删改查方法*/

	// require 'E:/wamp/www/HMS/API/util/db_config.php';
	require '/Library/WebServer/Documents/HMS/API/util/db_config.php';
	//数据库访问方法（查。增，删，改）
	class sqlhelper extends mysqli
	{
		//其中的sqlstr是SQL语句
		//result是查询结果
		//bol是操作成功标志
		private $link;
		private $result;
		private $bol=false;

		//魔术方法
		function __construct(){
			$this->open_link();
		}

		//开启连接
		private function open_link(){
			$this->link=new mysqli($GLOBALS['HOST'],$GLOBALS['USER'],$GLOBALS['PASSWORD'],$GLOBALS['DBNAME']) or die("数据库连接失败！".mysqli_error());
			$this->link->select_db($GLOBALS['DBNAME']) or die("数据库选择失败！".mysqli_error());
			$this->link->set_charset("UTF8");
		}

		//关闭连接
		private function close_result(){
			// if($this->result){
			// 	$this->result->free_sult();//关闭结果集
			// }
		}

		//查询方法--返回一条记录
		public function db_query($sqlstr){
			if(empty($this->link)){
				$this->open_link();
			}
			$this->result=$this->link->query($sqlstr);
			if($this->result){
				$row=$this->result->fetch_array(MYSQLI_ASSOC);
			}else {
				$row=null;
			}
			$this->close_result();
			return $row;
		}

		//查询方法返回一个数组即全部的查询结果集
		public function db_query_all($sqlstr){
			if(empty($this->link)){
				$this->open_link();
			}
			$this->result=$this->link->query($sqlstr);
			$result_array=array();
			if($this->result){
				while ($row = $this->result->fetch_array(MYSQLI_ASSOC))
				{
					array_push($result_array,$row);
				}
			}else {
				$result_array=null;
			}
			$this->close_result();
			return $result_array;
		}

		//非查询，增删改操作
		public function db_noquery($sqlstr){
			if(empty($this->link)){
				$this->open_link();
			}
			$this->bol=false;
			try{
				$this->bol=$this->link->query($sqlstr);
			}catch (Exception $ex){
				$this->bol=false;
			}
			$this->close_result();
			return $this->bol;
		}

		//插入一条记录返回操作行的id  成功就为其ID号，失败就为0
		public function db_noquery_return($sqlstr){
			if(empty($this->link)){
				$this->open_link();
			}
			$this->bol=false;
			try{
				$this->bol=$this->link->query($sqlstr);
			}catch (Exception $ex){
				$this->bol=false;
			}
			if($this->bol){
				$this->result=$this->link->insert_id;//取得新增行的id
			}
			else {
				$this->result=null;
			}
			$this->close_result();
			return $this->result;
		}

		//非查询方法，增删改操作，有事物特点---$sqlstr是SQL语句数组
		public function db_noquery_trans($sqlstr){
			if(empty($this->link)){
				$this->open_link();
			}
			$this->link->autocommit(0);//设置事物机制自动提交关闭
			if($sqlstr){
				//循环执行sql语句
				foreach ($sqlstr as $sql){
					$this->bol=$this->link->query($sql);
					if(!$this->bol){
						break;
					}
				}
				//判断是否提交事物
				if($this->bol){
					$this->link->commit();//提交事物
				}
				else{
					$this->link->rollback();//回滚事物
				}
			}else{
				$this->bol=false;
			}
			$this->link->autocommit(1);//恢复事物自动提交机制
			$this->close_result();
			return $this->bol;
		}
	}
?>