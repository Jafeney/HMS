(function($) {
	'use strict';

	$(function() {
		var $fullText = $('.admin-fullText');
		$('#admin-fullscreen').on('click', function() {
			$.AMUI.fullscreen.toggle();
		});

		$(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
			$.AMUI.fullscreen.isFullscreen ? $fullText.text('关闭全屏') : $fullText.text('开启全屏');
		});

		//日期组件
		$('.jq-date').datepicker({
			dateFormat: 'yy-mm-dd',
			//dayNames : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
			//dayNamesShort : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
			dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
			monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			//monthNamesShort : ['一','二','三','四','五','六','七','八','九','十','十一','十二'],
			altField: '#abc',
			altFormat: 'dd/mm/yy', 

			showWeek: true,
			weekHeader: '周',
			firstDay: 1,
		});
		
		
		//全选
		$('.CheckAllButton').on('click',function(){
			if($(this).attr('value')=='0'){
				$('.CheckAllBody input[type=checkbox]').removeAttr('checked');
				$(this).attr('value','1');
			}
			if($(this).attr('value')=='1'){
				$('.CheckAllBody input[type=checkbox]').attr('checked','checked');
				$(this).attr('value','0')
			}
			
		});
		
		
		/*================================================管理首页=======================================================*/
		$('#save_password').on('click',function(){
			$('#all_operate').empty();
			var flag=1;
			//===================
			///这里写入相关的Ajax操作
			//===================
			
			//如果成功
			if(flag){
				JafeneyAlert("温馨提示","新密码修改成功！");		
			}else{
				JafeneyAlert("温馨提示","操作失败！请重试");		
				
			}
			$('#JafeneyAlert').modal();
		});
		
		$('#save_person_info').on('click',function(){
			$('#all_operate').empty();
			var flag=1;
			//===================
			///这里写入相关的Ajax操作
			//===================
			
			//如果成功
			if(flag){
				JafeneyAlert("温馨提示","个人信息修改成功！");		
			}else{
				JafeneyAlert("温馨提示","操作失败！请重试");		
				
			}
			$('#JafeneyAlert').modal();
		});
		
		$('.am-btn-group .am-icon-check').parent().on('click',function(){
			$('#all_operate').empty();
			var flag=1;
			//===================
			///这里写入相关的Ajax操作
			//===================
			
			//如果成功
			if(flag){
				JafeneyAlert("温馨提示","审阅成功！此留言将移入 ‘已阅留言’列表 。");		
			}else{
				JafeneyAlert("温馨提示","操作失败！请重试");		
				
			}
			$('#JafeneyAlert').modal();
		});
		
		
		//===============删除留言modal================
		$('#message .am-icon-times').parent().on('click',function(){
			$('#all_operate').empty();
			JafeneyComfirm("温馨提示","您确定要删除这条留言吗？");	
			$('#JafeneyComfirm').modal({
				relatedTarget: this,
		        onConfirm: function(options) {
		        	var flag=0;
		          	//=================
		          	//执行相关的Ajax操作
		          	//=================
		          	//如果成功
		          	
					if(flag){
						JafeneyAlert("温馨提示","留言删除成功！");		
					}else{
						JafeneyAlert("温馨提示","操作失败！请重试");		
						
					}
					$('#JafeneyAlert').modal();
		          
		        },
		        onCancel: function() {
		          //什么都不做
		        }
			});
		});
		
//		//===============回复留言modal================
//		$('#message .am-icon-pencil').parent().on('click',function(){
//			$('#all_operate').empty();
//			JafeneyPrompt("留言回复");	
//			$('#JafeneyPrompt').modal({
//				relatedTarget: this,
//		        onConfirm: function(e) {
//		        	var flag=1;
//		          	//=================
//		          	//执行相关的Ajax操作
//		          	//=================
//		          	//如果成功
//		          	
//					if(flag){
//						JafeneyAlert("温馨提示","留言回复成功！留言内容为："+e.data||'');		
//					}else{
//						JafeneyAlert("温馨提示","操作失败！请重试");		
//						
//					}
//					$('#JafeneyAlert').modal();
//		          
//		        },
//		        onCancel: function(e) {
//		          //什么都不做
//		        }
//			});
//		});
		
		/*================================================静态内容=======================================================*/
		$('#save_content').on('click',function(){
			$('#all_operate').empty();
			var flag=1;
			//===================
			///这里写入相关的Ajax操作
			//===================
			
			//如果成功
			if(flag){
				JafeneyAlert("温馨提示","内容提交成功！");		
			}else{
				JafeneyAlert("温馨提示","操作失败！请重试");		
				
			}
			$('#JafeneyAlert').modal();
		});
		
		
		
		/*================================================新闻管理=======================================================*/
		
		//===============编辑新闻modal================
		$('#news .am-icon-pencil-square-o').parent().on('click',function(e){
			e.preventDefault();
			$('#all_operate').empty();
			JafeneyPromptAddNews("修改新闻");	
			$('#JafeneyPrompt').modal({
				relatedTarget: this,
		        onConfirm: function(e) {
		        	var flag=1;
		          	//=================
		          	//执行相关的Ajax操作
		          	//=================
		          	//如果成功
		          	
					if(flag){
						JafeneyAlert("温馨提示","新闻修改成功！新闻内容为："+e.data||'');	
					}else{
						JafeneyAlert("温馨提示","操作失败！请重试");		
						
					}
					$('#JafeneyAlert').modal();
		          
		        },
		        onCancel: function(e) {
		          //什么都不做
		        }
			});
		});
		
		
		//===============删除新闻modal================
		$('.delete_user').on('click',function(e){
			e.preventDefault();
			$('#all_operate').empty();
			JafeneyComfirm("温馨提示","您确定要删除该新闻吗？");	
			$('#JafeneyComfirm').modal({
				relatedTarget: this,
		        onConfirm: function(options) {
		        	var flag=0;
		          	//=================
		          	//执行相关的Ajax操作
		          	//=================
		          	//如果成功
		          	
					if(flag){
						JafeneyAlert("温馨提示","该新闻已被成功删除！");		
					}else{
						JafeneyAlert("温馨提示","操作失败！请先选中要删除的新闻");		
						
					}
					$('#JafeneyAlert').modal();
		          
		        },
		        onCancel: function() {
		          //什么都不做
		        }
			});
		});
		
		
		/*================================================文档管理=======================================================*/
		//===============新增文档modal================
		$('#files .am-icon-plus').parent().on('click',function(){
			$('#all_operate').empty();
			JafeneyPromptAddFile("添加新文档");	
			$('#JafeneyPrompt').modal({
				relatedTarget: this,
		        onConfirm: function(e) {
		        	var flag=1;
		          	//=================
		          	//执行相关的Ajax操作
		          	//=================
		          	//如果成功
		          	
					if(flag){
						JafeneyAlert("温馨提示","新文档添加成功！文档信息为："+e.data||'');		
					}else{
						JafeneyAlert("温馨提示","操作失败！请重试");		
						
					}
					$('#JafeneyAlert').modal();
		          
		        },
		        onCancel: function(e) {
		          //什么都不做
		        }
			});
		});
		
		//===============修改文档modal================
		$('#files .am-icon-pencil-square-o').parent().on('click',function(e){
			e.preventDefault();
			$('#all_operate').empty();
			JafeneyPromptAddFile("修改文档");	
			$('#JafeneyPrompt').modal({
				relatedTarget: this,
		        onConfirm: function(e) {
		        	var flag=1;
		          	//=================
		          	//执行相关的Ajax操作
		          	//=================
		          	//如果成功
		          	
					if(flag){
						JafeneyAlert("温馨提示","文档修改成功！文档信息为："+e.data||'');	
					}else{
						JafeneyAlert("温馨提示","操作失败！请重试");		
						
					}
					$('#JafeneyAlert').modal();
		          
		        },
		        onCancel: function(e) {
		          //什么都不做
		        }
			});
		});
		
		//===============删除文档modal================
		$('.delete_file').on('click',function(e){
			e.preventDefault();
			$('#all_operate').empty();
			JafeneyComfirm("温馨提示","您确定要删除该文档吗？");	
			$('#JafeneyComfirm').modal({
				relatedTarget: this,
		        onConfirm: function(options) {
		        	var flag=0;
		          	//=================
		          	//执行相关的Ajax操作
		          	//=================
		          	//如果成功
		          	
					if(flag){
						JafeneyAlert("温馨提示","该文档已被成功删除！");		
					}else{
						JafeneyAlert("温馨提示","操作失败！请先选中要删除的文档");		
						
					}
					$('#JafeneyAlert').modal();
		          
		        },
		        onCancel: function() {
		          //什么都不做
		        }
			});
		});
		

	});

})(jQuery);