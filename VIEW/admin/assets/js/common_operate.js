/**
 * @desc 对常用的操作函数进行二次封装
 */

/*后端PHP接口的根目录*/
var APIURL = "http://www.hms.com/HMS/API/action/admin/";

/*默认的分页行数*/
var ROWS = 20; 

/**
 * @desc 通过Ajax异步加载数据
 * @param {[type]} $Model    [数据模块]
 * @param {[type]} $Page     [页号]
 * @param {[type]} $Callback [回调函数]
 */
function LoadData($Model,$Page,$Callback){
	$.ajax({
		type: 'get',
		url: APIURL+$Model+'_data.act.php',
		data: {
			page: $Page,
			rows: ROWS
		},
		dataType: 'json',
		success: function(res){
			if($Callback){
				$Callback(res);
			}
		}
	});
}

/**
 * @desc 添加操作
 * @param {[type]} $Title  [description]
 * @param {[type]} $Prompt [description]
 * @param {[type]} $Ajax   [description]
 */
function AddOne($Title,$Prompt,$Callback){
	$('#all_operate').empty();
	$Prompt('添加新'+$Title);
	$('#JafeneyPrompt').modal({
		relatedTarget: this,
        onConfirm: function(e) {
        	if($Callback){
        		$Callback(e);
        	}else{
				JafeneyAlert("温馨提示","操作失败！请重试");	
			}
			$('#JafeneyAlert').modal();
        },
        onCancel: function(e) {
          //什么都不做
        }
	});
}

/**
 * @desc 更新操作
 * @param {[type]} $Title    [description]
 * @param {[type]} $Prompt   [description]
 * @param {[type]} $Callback [description]
 */
function UpdateOne($Title,$Prompt,$Callback,$InsertCallback){
	$('#all_operate').empty();

	$Prompt('编辑'+$Title,$InsertCallback);
	$('#JafeneyPrompt').modal({
		relatedTarget: this,
        onConfirm: function(e) {
        	if($Callback){
        		$Callback();
        	}else{
				JafeneyAlert("温馨提示","操作失败！请重试");	
			}
			$('#JafeneyAlert').modal();
        },
        onCancel: function(e) {
          //什么都不做
        }
	});
}

/**
 * @desc 删除单项操作
 * @param {[type]} $Title    [description]
 * @param {[type]} $Callback [description]
 */
function DeleteOne($Title,$Callback){
	$('#all_operate').empty();
	JafeneyComfirm("温馨提示","您确定要删除该"+$Title+"吗？");	
	$('#JafeneyComfirm').modal({
		relatedTarget: this,
        onConfirm: function(options) {
			if($Callback){
				$Callback();
			}else{
				JafeneyAlert("温馨提示","删除失败请重试！");	
			}
			$('#JafeneyAlert').modal();
        },
        onCancel: function() {
          //什么都不做
        }
	});
}

/**
 * @desc 批量删除操作
 * @param {[type]} $Title    [description]
 * @param {[type]} $Callback [description]
 */
function DeleteSome($Title,$Callback){
	$('#all_operate').empty();
	JafeneyComfirm("温馨提示","您确定要删除这些"+$Title+"吗？");	
	$('#JafeneyComfirm').modal({
		relatedTarget: this,
	    onConfirm: function(options) {
	    	var checkBoxs=$('.check-single');
			var selectItems=[];
			$.each(checkBoxs,function(idx,item){
				if(checkBoxs.eq(idx).hasClass('checked')){
					selectItems.push(checkBoxs.eq(idx).data('id'));
				}
			});
			if(selectItems.length===0){
				JafeneyAlert("温馨提示","请先勾选要删除的内容！");	
			}else{
				if($Callback){
					$Callback();
				}else{
					JafeneyAlert("温馨提示","操作失败，请重试！")
				}
			}
			$('#JafeneyAlert').modal();
	    },
	    onCancel: function() {
	      //什么都不做
	    }
	});
}

/**
 * @desc 限制字符串长度
 * @param  {[type]} txt    [待处理的字符串]
 * @param  {[type]} maxlen [最大长度]
 * @return {[type]}        [description]
 */
var txtLengthFormat=function(txt,maxlen){
	var returnStr='';
	if(txt.length>maxlen){
		returnStr=txt.substr(0,maxlen)+'...';
	}else{
		returnStr=txt;
	}
	return returnStr;
}

/**
 * @desc 测试是否已经触发了全选的情形
 * @return {[type]} [description]
 */
function testAllChecked(){
	var source=$('.check-single');
	var flag=true;
	if(source.length){
		$.each(source,function(i){
			if(!source.eq(i).hasClass('checked')){
				flag=false;
			}
		});
	}else{
		flag=false;
	}
	
	if(flag){
		$('#checkAll').addClass('checked');
	}else{
		$('#checkAll').removeClass('checked');
	}
}


/**
 * @desc 分页
 */
function loadPage(pages) {

	var pagePrev = '<li id="go_prev"><a href="javascript:void(0)">«</a></li>';
	var pageItem='';
	var pageNext = '<li id="go_next"><a href="javascript:void(0)">»</a></li>';

	for(var i=0;i<=pages;i++){
		pageItem+= '<li class="page-item" data-page='+i+'><a href="javascript:void(0)">'+(i+1)+'</a></li>';
	}

	$('#pagination-orders').html(pagePrev+pageItem+pageNext);

	// 默认选择第一个 
	$('#pagination-orders li').eq(1).addClass('am-active');
}

//计算天数差的函数，通用  
function  DateDiff(sDate1,  sDate2){    //sDate1和sDate2是2006-12-18格式  
   var  aDate,  oDate1,  oDate2,  iDays; 
   aDate  =  sDate1.split("-");  
   oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]); //转换为12-18-2006格式  
   aDate  =  sDate2.split("-");  
   oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);  
   iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24); //把相差的毫秒数转换为天数  
   return  iDays; 
}   

