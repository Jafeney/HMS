/**
 * @desc 根据不同业务进行的第一次封装
 */

/**
 * @desc 通用Alert提示弹出框
 * @param {[type]} your_title 弹出框的标题
 * @param {[type]} your_content 弹出框的内容
 */
function JafeneyAlert(your_title,your_content){
	var $JafeneyAlert=$("<div class='am-modal am-modal-alert' tabindex='-1' id='JafeneyAlert'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'>"+your_content+"</div>");
	var $JModelFooter=$("<div class='am-modal-footer'><span class='am-modal-btn'>确定</span></div>");
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyAlert.append($JDialog);
	$('#all_operate').append($JafeneyAlert);
}

/**
 * @desc 通用Confirm确认弹出框
 * @param {[type]} your_title 弹出框的标题
 * @param {[type]} your_content 弹出框的内容
 */
function JafeneyComfirm(your_title,your_content){
	var $JafeneyComfirm=$("<div class='am-modal am-modal-confirm' tabindex='-1' id='JafeneyComfirm'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'>"+your_content+"</div>");
	var $JModelFooter=$("<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>");
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyComfirm.append($JDialog);
	$('#all_operate').append($JafeneyComfirm);
}

/**
 * @desc 通用Prompt输入弹出框
 * @param {[type]} your_title 弹出框的标题
 * @param {[type]} your_content 团出框的内容
 */
function JafeneyPrompt(your_title,your_content){
	var $JafeneyPrompt=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyPrompt'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'>"+your_content+"</div>");
	var $JModelInput=$("<textarea class='am-modal-prompt-input'></textarea>");
	var $JModelFooter=$("<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>");
	$JModelBody.append($JModelInput);
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyPrompt.append($JDialog);
	$('#all_operate').append($JafeneyPrompt);
}

/**
 * @desc 定制 添加用户的Prompt输入弹出框 
 * @param {[type]} your_title 弹出框标题
 */
function JafeneyPromptAddUser(your_title){
	var $JafeneyPrompt=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyPrompt'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'></div>");
	var $JModelInput1="<label class='am-fl am-margin-left'>客户姓名</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	var $JModelInput2="<label class='am-fl am-margin-left'>身份证号</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	var $JModelInput3="<label class='am-fl am-margin-left'>性别</label> <select class='am-modal-prompt-input am-fr'><option>男</option><<option>女</option></select><div class='am-cf am-margin-bottom-sm'></div>";	
	var $JModelInput4="<label class='am-fl am-margin-left'>手机号码</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	var $JModelInput5="<label class='am-fl am-margin-left'>常用地址</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	var $JModelInput6="<label class='am-fl am-margin-left'>排序权重</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	var $JModelFooter=$("<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>");
	$JModelBody.append($JModelInput1+$JModelInput2+$JModelInput3+$JModelInput4+$JModelInput5+$JModelInput6);
	
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyPrompt.append($JDialog);
	$('#all_operate').append($JafeneyPrompt);
}

/**
 * @desc 定制 添加图片的Prompt输入弹出框 
 * @param {[type]} your_title 弹出框标题
 */
function JafeneyPromptAddImage(your_title){
	var $JafeneyPrompt=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyPrompt'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'></div>");
	var JModelInput1="<label class='am-fl am-margin-left'>图片标题</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	var JModelInput2="<label class='am-fl am-margin-left'>图片类型</label> <select class='am-modal-prompt-input am-fr'><option >设施</option><option>轮播</option></select><div class='am-cf'></div>";
	var JModelInput3="<label class='am-fl am-margin-left'>图片位置</label> <input type='file' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	var JModelInput4="<label class='am-fl am-margin-left'>图片简介</label> <textarea class='am-modal-prompt-input am-fr'></textarea><div class='am-cf am-margin-bottom-sm'></div>";	
	var JModelInput5="<label class='am-fl am-margin-left'>图片链接</label> <input type='text' class='am-modal-prompt-input am-fr' /><div class='am-cf am-margin-bottom-sm'></div>";	
	var JModelInput6="<label class='am-fl am-margin-left'>排序权重</label> <input type='text' class='am-modal-prompt-input am-fr' /><div class='am-cf am-margin-bottom-sm'></div>";
	var $JModelFooter="<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>";

	$JModelBody.append(JModelInput1+JModelInput2+JModelInput3+JModelInput4+JModelInput5+JModelInput6);
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyPrompt.append($JDialog);
	$('#all_operate').append($JafeneyPrompt);
}

/**
 * @desc 定制 添加产品的Prompt输入弹出框 
 * @param {[type]} your_title 弹出框标题
 */
function JafeneyPromptAddProduct(your_title){
	var $JafeneyPrompt=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyPrompt'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'></div>");
	var JModelInput1="<label class='am-fl am-margin-left'>产品名称</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	var JModelInput2="<label class='am-fl am-margin-left'>产品预览</label> <img class='am-margin' src='http://avatar.csdn.net/F/8/E/1_u011413061.jpg' /><input type='file' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	var JModelInput3="<label class='am-fl am-margin-left'>产品简介</label> <textarea class='am-modal-prompt-input am-fr'></textarea><div class='am-cf am-margin-bottom-sm'></div>";	
	var JModelInput4="<label class='am-fl am-margin-left'>产品价格</label> <input type='text' class='am-modal-prompt-input am-fr' /><div class='am-cf am-margin-bottom-sm'></div>";	
	var JModelInput5="<label class='am-fl am-margin-left'>排序权重</label> <input type='text' class='am-modal-prompt-input am-fr' /><div class='am-cf am-margin-bottom-sm'></div>";
	var $JModelFooter="<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>";

	$JModelBody.append(JModelInput1+JModelInput2+JModelInput3+JModelInput4+JModelInput5);
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyPrompt.append($JDialog);
	$('#all_operate').append($JafeneyPrompt);
}

/**
 * @desc 定制 设施列表的Prompt选择弹出框 
 * @param {[type]} your_title 弹出框标题
 * @param {[type]} your_content 弹出框的内容
 */
function JafeneyListGallery(your_title,your_content){
	var $JafeneyList=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyList'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div id='JModelBody' class='am-modal-bd'>"+your_content+"</div>");
	
	var $JModelFooter="<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>";

	$JModelBody.append();
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyList.append($JDialog);
	$('#all_operate').append($JafeneyList);
}

/**
 * @desc 定制 添加订单的Prompt输入弹出框 
 * @param {[type]} your_title 弹出框标题
 */
function JafeneyPromptAddOrder(your_title){
	var $JafeneyPrompt=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyPrompt'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'></div>");
	var JModelInput1="<label class='am-fl am-margin-left'>客户名称</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	
	var JModelInput2="<label class='am-fl am-margin-left'>应付金额</label> <input type='text' class='am-modal-prompt-input am-fr' /><div class='am-cf am-margin-bottom-sm'></div>";	
	var JModelInput3="<label class='am-fl am-margin-left'>是否支付</label><select class='am-modal-prompt-input am-fr'><option>未支付</option><option>已支付</option></select><div class='am-cf am-margin-bottom-sm'></div>";	
	var JModelInput4="<label class='am-fl am-margin-left'>排序权重</label> <input type='text' class='am-modal-prompt-input am-fr' /><div class='am-cf am-margin-bottom-sm'></div>";
	var $JModelFooter="<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>";

	$JModelBody.append(JModelInput1+JModelInput2+JModelInput3+JModelInput4);
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyPrompt.append($JDialog);
	$('#all_operate').append($JafeneyPrompt);
}

/**
 * @desc 定制 添加主题的Prompt输入弹出框 
 * @param {[type]} 弹出框标题
 */
function JafeneyPromptAddTheme(your_title){
	var $JafeneyPrompt=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyPrompt'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'></div>");
	var JModelInput1="<label class='am-fl am-margin-left'>主题名称</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>";
	
	var JModelInput2="<label class='am-fl am-margin-left'>主题简写</label> <input type='text' class='am-modal-prompt-input am-fr' /><div class='am-cf am-margin-bottom-sm'></div>";	

	var JModelInput3="<label class='am-fl am-margin-left'>主题样式表</label> <input type='text' class='am-modal-prompt-input am-fr' /><div class='am-cf am-margin-bottom-sm'></div>";
	
	var JModelInput4="<label class='am-fl am-margin-left'>排序权重</label> <input type='text' class='am-modal-prompt-input am-fr' /><div class='am-cf am-margin-bottom-sm'></div>";
	var $JModelFooter="<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>";

	$JModelBody.append(JModelInput1+JModelInput2+JModelInput3+JModelInput4);
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyPrompt.append($JDialog);
	$('#all_operate').append($JafeneyPrompt);
}

/**
 * @desc 根据通用的功能进行第二次封装
 */

function AddOne($Title,$Prompt,$Ajax){
	if($('.CheckAllButton').prop('checked')){
		$('.CheckAllButton').trigger('click');
	}
	$('#all_operate').empty();
	$Prompt('添加新'+$Title);
	$('#JafeneyPrompt').modal({
		relatedTarget: this,
        onConfirm: function(e) {
        	if($Ajax){
        		$Ajax(e);
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

function UpdateOne($Title,$Prompt,$Ajax){
	if($('.CheckAllButton').prop('checked')){
		$('.CheckAllButton').trigger('click');
	}
	$('#all_operate').empty();
	$Prompt('编辑'+$Title);
	$('#JafeneyPrompt').modal({
		relatedTarget: this,
        onConfirm: function(e) {
        	if($Ajax){
        		$Ajax(e);
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

function DeleteOne($Title,$Ajax){
	if($('.CheckAllButton').prop('checked')){
		$('.CheckAllButton').trigger('click');
	}
	$('#all_operate').empty();
	JafeneyComfirm("温馨提示","您确定要删除该"+$Title+"吗？");	
	$('#JafeneyComfirm').modal({
		relatedTarget: this,
        onConfirm: function(options) {
			if($Ajax){
				$Ajax();
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

function DeleteSome($Title,$Container,$Ajax){
	$('#all_operate').empty();
	JafeneyComfirm("温馨提示","您确定要删除这些"+$Title+"吗？");	
	$('#JafeneyComfirm').modal({
		relatedTarget: this,
	    onConfirm: function(options) {
	    	var checkBoxs=$($Container+' input[type=checkbox]');
			var selectItems=[];
			$.each(checkBoxs,function(idx,item){
				if(checkBoxs.eq(idx).prop('checked')){
					selectItems.push(checkBoxs.eq(idx).data('id'));
				}
			});
			if(selectItems.length===0){
				JafeneyAlert("温馨提示","请先勾选要删除的内容！");	
			}else{
				if($Ajax){
					$Ajax();
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



