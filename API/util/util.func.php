<?php 

	/*把数组转换为json对象*/
	function arrayToJson($arr){
		$json='{';
		foreach($arr as $key => $value)   
		{      
			$json.='"'.$key.'":'.'"'.$value.'",';
		}
		$json=substr($json,0,strlen($json)-1);
		$json.='}';
		return $json;
	}

	/*把数组集合转换为json数组*/
	function FormatJson($arr){

		if ($arr) {
			$jsonArray='[';
			foreach($arr as $value){
				$jsonArray.=arrayToJson($value).',';
			}
			$jsonArray=substr($jsonArray,0,strlen($jsonArray)-1);
			$jsonArray.=']';
			return $jsonArray;
		} else {
			return '[]';
		}
		
	}

	/**
 	* 获取用户的真实ip地址
 	* @return string
 	*/
	function getIPaddress(){
		$IPaddress='';
		if (isset($_SERVER)){
			if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])){
				$IPaddress = $_SERVER["HTTP_X_FORWARDED_FOR"];
			} else if (isset($_SERVER["HTTP_CLIENT_IP"])) {
				$IPaddress = $_SERVER["HTTP_CLIENT_IP"];
			} else {
				$IPaddress = $_SERVER["REMOTE_ADDR"];
			}
		}else{
			if (getenv("HTTP_X_FORWARDED_FOR")){
				$IPaddress = getenv("HTTP_X_FORWARDED_FOR");
			} else if (getenv("HTTP_CLIENT_IP")) {
				$IPaddress = getenv("HTTP_CLIENT_IP");
			}else{
				$IPaddress = getenv("REMOTE_ADDR");
			}
		}
		return $IPaddress;
	}
?>