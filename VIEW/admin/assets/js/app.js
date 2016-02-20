(function($) {
	'use strict';
	$(function(){
		/**
		 * @page global
		 * @desc 全局脚本模块
		 */
		var globelModule=(function(){

			//全屏
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

			/*对选择框拓展的特性*/
			$(document).on('click','.check-single',function(){
				if(!$(this).hasClass('checked')){
					$(this).addClass('checked');
					testAllChecked();
				}else{
					$(this).removeClass('checked');
					$('#checkAll').removeClass('checked');
				}
			});

			/*测试是否已经触发了全选的情形*/
			function testAllChecked(){
				var source=$('.check-single');
				var flag=true;
				$.each(source,function(i){
					if(!source.eq(i).hasClass('checked')){
						flag=false;
					}
				});
				if(flag){
					$('#checkAll').addClass('checked');
				}else{
					$('#checkAll').removeClass('checked');
				}
			}
			
			//全选
			$('#checkAll').on('click',function(){
				if(!$(this).hasClass('checked')){
					$(this).addClass('checked');
					$('.check-single').addClass('checked');
				}else{
					$(this).removeClass('checked');
					$('.check-single').removeClass('checked');
				}
			});

			//获取用户登陆信息
			
		})();	
		
		/**
		 * @page admin-index
		 * @desc 管理首页脚本代码
		 */
		var IndexModule=(function(){
			/**
			 * @desc 保存密码
			 */
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
			/**
			 * @desc 保存个人信息
			 */
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
		})();

		/**
		 * @page  admin-image
		 * @desc 图片管理模块脚本
		 */
		var ImageManageModule=(function(){
			/**
			 * @desc 添加图片的模态窗口
			 */
			$('#content-image .am-icon-plus').parent().on('click',function(e){
				e.preventDefault();
				AddOne('图片',JafeneyPromptAddImage,function(){
					console.log('图片插入成功！');
					var source={
						id:5,
						name:'单人标准房',
						thumb:'http://n.baai.com/demo/banner1.jpg',
						intro:'单人标准房',
						link:'http://www.baidu.com',
						createTime:'2015-9-15 12:25:30',
						rank:1
					};
					var newTr='<tr><td><input type="text" class="checkbox check-single" data-id="1" /></td><td>'+source.id+'</td><td>'+source.name+'</td><td>'+source.thumb+'</td><td class="am-hide-sm-only am-text-center">'+source.intro+'</td><td class="am-hide-sm-only am-text-center">'+source.link+'</td><td class="am-hide-sm-only am-text-center">'+source.createTime+'</td><td class="am-hide-sm-only am-text-center">'+source.rank+'</td><td><div class="am-btn-toolbar"><div class="am-btn-group am-btn-group-xs"><button class="am-btn am-btn-default am-btn-xs am-text-secondary edit-image" data-id='+source.id+'><span class="am-icon-pencil-square-o"></span> 编辑</button><button class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only delete-image" data-id='+source.id+'><span class="am-icon-trash-o "></span> 删除</button></div></div></td></tr>';
					$('#image-list').append(newTr);
					if($('.CheckAllButton').prop('checked')){
						$('.CheckAllButton').trigger('click');
					}
				});
			});
			/**
			 * @desc 编辑图片的模态窗口
			 */
			$('#content-image').on('click','.edit-image',function(e){
				e.preventDefault();
				var _id=$(this).data('id');
				UpdateOne('图片',JafeneyPromptAddImage,function(){
					console.log('图片编辑成功！');
				});
			});
			
			/**
			 * @desc 单张图片删除的模态窗口
			 */
			$('#content-image').on('click','.delete-image',function(e){
				var _self=$(this);
				e.preventDefault();
				DeleteOne('图片',function(){
					_self.parent().parent().parent().parent().remove();
				});
			});
			
			/**
			 * @desc 批量删除图片的模态窗口
			 */
			$('#content-image .delete-some').on('click',function(e){
				e.preventDefault();
				DeleteSome('图片','#content-image',function(){
					//$('#content-image').find('input[checked=checked]').parent().parent().remove();
					console.log($('#content-image').find('input[checked=checked]'));
					if($('.CheckAllButton').prop('checked')){
						$('.CheckAllButton').trigger('click');
					}
				});
			});
		})();
  
		/**
		 * @page admin-company
		 * @desc 企业信息管理模块脚本
		 */
		var CompanyManageModule=(function(){
			/**
			 * @desc 保存修改的内容 
			 */
			$('#save-company-info').on('click',function(){
				$('#all_operate').empty();
				var flag=1;
				
				//如果成功
				if(flag){
					JafeneyAlert("温馨提示","内容提交成功！");		
				}else{
					JafeneyAlert("温馨提示","操作失败！请重试");		
				}
				$('#JafeneyAlert').modal();
			});

			/*取消操作，重置内容*/
			$('#reset-company-info').on('click',function(){
				
			});
		})();

		/**
		 * @page admin-product
		 * @desc 产品管理模块脚本
		 */
		var ProductManageModule=(function(){
			/**
			 * @desc 添加产品的模态窗口
			 */
			$('#content-product .am-icon-plus').parent().on('click',function(){
				$('#all_operate').empty();
				JafeneyPromptAddProduct("添加新产品");	
				$('#JafeneyPrompt').modal({
					relatedTarget: this,
			        onConfirm: function(e) {
			        	var flag=1;
			          	
			          	//如果成功
						if(flag){
							JafeneyAlert("温馨提示","新产品添加成功！产品信息为："+e.data||'');		
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
			/**
			 * @desc 编辑产品的模态窗口
			 */
			$('#content-product .am-icon-pencil-square-o').parent().on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyPromptAddProduct("编辑产品");	
				$('#JafeneyPrompt').modal({
					relatedTarget: this,
			        onConfirm: function(e) {
			        	var flag=1;
			          	
			          	//如果成功
						if(flag){
							JafeneyAlert("温馨提示","产品修改成功！产品信息为："+e.data||'');	
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
			/**
			 * @desc 单件产品删除的模态窗口
			 */
			$('#content-product .delete-product').on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyComfirm("温馨提示","您确定要删除该产品吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var flag=0;
			          	
						if(flag){
							JafeneyAlert("温馨提示","该产品已被成功删除！");		
						}else{
							JafeneyAlert("温馨提示","删除失败请重试！");		
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
			/**
			 * @desc 批量删除产品的模态窗口
			 */
			$('#content-product .delete-some').on('click',function(e){
				$('#all_operate').empty();
				e.preventDefault();
				JafeneyComfirm("温馨提示","您确定要删除这些产品吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var checkBoxs=$('#content-product input[type=checkbox]');
    					var selectItems=[];
    					$.each(checkBoxs,function(idx,item){
    						if(checkBoxs.eq(idx).prop('checked')){
    							selectItems.push(checkBoxs.eq(idx).data('id'));
    						}
    					});
    					if(selectItems.length===0){
    						JafeneyAlert("温馨提示","请先勾选要删除的内容！");	
    					}else{
    						JafeneyAlert("温馨提示","删除成功！");
    					}
    					$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});

			/**
			 * @desc 编辑产品对应的设施
			 */
			$('#content-product .btn-gallery').on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				var galleryList='<ul class="gallery-list"><li data-id="1" class="active">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li><li data-id="1">水壶</li></ul>';
				JafeneyListGallery('编辑设施列表',galleryList);
				$('#JafeneyList').modal({
					relatedTarget: this,
			        onConfirm: function(e) {
			        	var flag=1;
			          	
			          	//如果成功
						if(flag){
							JafeneyAlert("温馨提示","设施修改成功！设施信息为："+e.data||'');	
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

			/**
			 * @desc 选择设备
			 */
			$('#all_operate').on('click','.gallery-list>li',function(){
				if($(this).hasClass('active')){
					$(this).removeClass('active');
				}else{
					$(this).addClass('active');
				}
			});
		})();

		/**
		 * @page admin-users
		 * @desc 客户管理模块脚本
		 */ 
		var UserManageModule=(function(){
			/**
			 * @desc 添加客户的模态窗口
			 */
			$('#content-users .am-icon-plus').parent().on('click',function(){
				$('#all_operate').empty();
				JafeneyPromptAddUser("添加新客户");	
				$('#JafeneyPrompt').modal({
					relatedTarget: this,
			        onConfirm: function(e) {
			        	var flag=1;
			          	
			          	//如果成功
						if(flag){
							JafeneyAlert("温馨提示","新客户添加成功！客户信息为："+e.data||'');		
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
			/**
			 * @desc 编辑客户的模态窗口
			 */
			$('#content-users .am-icon-pencil-square-o').parent().on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyPromptAddUser("修改新客户");	
				$('#JafeneyPrompt').modal({
					relatedTarget: this,
			        onConfirm: function(e) {
			        	var flag=1;
			          	
			          	//如果成功
						if(flag){
							JafeneyAlert("温馨提示","客户信息修改成功！客户信息为："+e.data||'');	
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
			/**
			 * @desc 单个客户删除的模态窗口
			 */
			$('#content-users .delete-user').on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyComfirm("温馨提示","您确定要删除该客户吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var flag=0;
			          	
						if(flag){
							JafeneyAlert("温馨提示","该客户已被成功删除！");		
						}else{
							JafeneyAlert("温馨提示","删除失败请重试！");		
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
			/**
			 * @desc 批量删除客户的模态窗口
			 */
			$('#content-users .delete-some').on('click',function(e){
				$('#all_operate').empty();
				e.preventDefault();
				JafeneyComfirm("温馨提示","您确定要删除这些客户吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var checkBoxs=$('#content-users input[type=checkbox]');
						var selectItems=[];
						$.each(checkBoxs,function(idx,item){
							if(checkBoxs.eq(idx).prop('checked')){
								selectItems.push(checkBoxs.eq(idx).data('id'));
							}
						});
						if(selectItems.length===0){
							JafeneyAlert("温馨提示","请先勾选要删除的内容！");	
						}else{
							JafeneyAlert("温馨提示","删除成功！");
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
		})();

		/**
		 * @page admin-order
		 * @desc 订单管理模块脚本
		 */
		var OrderManageModule=(function(){
			/**
			 * @desc 添加订单的模态窗口
			 */
			$('#content-order .am-icon-plus').parent().on('click',function(){
				$('#all_operate').empty();
				JafeneyPromptAddOrder("添加新订单");	
				$('#JafeneyPrompt').modal({
					relatedTarget: this,
			        onConfirm: function(e) {
			        	var flag=1;
			          
			          	//如果成功
						if(flag){
							JafeneyAlert("温馨提示","新订单添加成功！订单信息为："+e.data||'');		
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
			/**
			 * @desc 编辑订单的模态窗口
			 */
			$('#content-order .am-icon-pencil-square-o').parent().on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyPromptAddOrder("编辑订单");	
				$('#JafeneyPrompt').modal({
					relatedTarget: this,
			        onConfirm: function(e) {
			        	var flag=1;
			          	
			          	//如果成功
						if(flag){
							JafeneyAlert("温馨提示","订单修改成功！订单信息为："+e.data||'');	
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
			/**
			 * @desc 单个订单删除的模态窗口
			 */
			$('#content-order .delete-order').on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyComfirm("温馨提示","您确定要删除该订单吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var flag=0;
			          	
						if(flag){
							JafeneyAlert("温馨提示","该订单已被成功删除！");		
						}else{
							JafeneyAlert("温馨提示","删除失败请重试！");		
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
			/**
			 * @desc 批量删除订单的模态窗口
			 */
			$('#content-order .delete-some').on('click',function(e){
				$('#all_operate').empty();
				e.preventDefault();
				JafeneyComfirm("温馨提示","您确定要删除这些订单吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var checkBoxs=$('#content-order input[type=checkbox]');
						var selectItems=[];
						$.each(checkBoxs,function(idx,item){
							if(checkBoxs.eq(idx).prop('checked')){
								selectItems.push(checkBoxs.eq(idx).data('id'));
							}
						});
						if(selectItems.length===0){
							JafeneyAlert("温馨提示","请先勾选要删除的内容！");	
						}else{
							JafeneyAlert("温馨提示","删除成功！");
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
		})();

		/**
		 * @page admin-news
		 * @desc 新闻管理模块脚本
		 */
		var NewsMangeModule=(function(){
			/**
			 * @desc 编辑新闻的跳转
			 */
			$('#content-news .am-icon-pencil-square-o').parent().on('click',function(e){
				e.preventDefault();
				var newsId=$(this).data('id');
				location.href="./admin-add-news.html?id="+newsId;
			});
			
			/**
			 * @desc 删除单条新闻的模态窗口
			 */
			$('#content-news .delete-news').on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyComfirm("温馨提示","您确定要删除该新闻吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var flag=1;
			          	
						if(flag){
							JafeneyAlert("温馨提示","该新闻已被成功删除！");		
						}else{
							JafeneyAlert("温馨提示","删除失败请重试！");		
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});

			/**
			 * @desc 批量删除新闻的模态窗口
			 */
			$('#content-news .delete-some').on('click',function(e){
				$('#all_operate').empty();
				e.preventDefault();
				JafeneyComfirm("温馨提示","您确定要删除这些新闻吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var checkBoxs=$('#content-news input[type=checkbox]');
						var selectItems=[];
						$.each(checkBoxs,function(idx,item){
							if(checkBoxs.eq(idx).prop('checked')){
								selectItems.push(checkBoxs.eq(idx).data('id'));
							}
						});
						if(selectItems.length===0){
							JafeneyAlert("温馨提示","请先勾选要删除的内容！");	
						}else{
							JafeneyAlert("温馨提示","删除成功！");
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
		})();

		/**
		 * @page admin-message
		 * @desc 留言管理模块
		 */
		var MessageMangeModule=(function(){
			/**
			 * @desc 已阅单条留言
			 */
			$('#content-message .looked-message').on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyComfirm("温馨提示","您确定要已经阅读过该留言了吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var flag=1;
			          	
						if(flag){
							JafeneyAlert("温馨提示","该留言已被成功阅读！");		
						}else{
							JafeneyAlert("温馨提示","操作失败请重试！");		
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
			/**
			 * @desc 批量已阅留言
			 */
			$('#content-message .looked-some').on('click',function(e){
				$('#all_operate').empty();
				e.preventDefault();
				JafeneyComfirm("温馨提示","这些留言您确定都阅读了吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var checkBoxs=$('#content-message input[type=checkbox]');
						var selectItems=[];
						$.each(checkBoxs,function(idx,item){
							if(checkBoxs.eq(idx).prop('checked')){
								selectItems.push(checkBoxs.eq(idx).data('id'));
							}
						});
						if(selectItems.length===0){
							JafeneyAlert("温馨提示","请先勾选要批量操作的内容！");	
						}else{
							JafeneyAlert("温馨提示","操作成功！");
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
			
			/**
			 * @desc 删除留言
			 */
			$('#content-message .delete-message').on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyComfirm("温馨提示","您确定要删除该留言吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var flag=1;
			          	
						if(flag){
							JafeneyAlert("温馨提示","该留言已被成功删除！");		
						}else{
							JafeneyAlert("温馨提示","删除失败请重试！");		
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});

			/**
			 * @desc 批量删除留言
			 */
			$('#content-message .delete-some').on('click',function(e){
				$('#all_operate').empty();
				e.preventDefault();
				JafeneyComfirm("温馨提示","您确定要删除这些留言吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var checkBoxs=$('#content-message input[type=checkbox]');
						var selectItems=[];
						$.each(checkBoxs,function(idx,item){
							if(checkBoxs.eq(idx).prop('checked')){
								selectItems.push(checkBoxs.eq(idx).data('id'));
							}
						});
						if(selectItems.length===0){
							JafeneyAlert("温馨提示","请先勾选要删除的内容！");	
						}else{
							JafeneyAlert("温馨提示","删除成功！");
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
		})();

		/**
		 * @page admin-system 
		 * @desc 系统设置模块
		 */
		var SystemSetModule=(function(){
			/**
			 * @desc 添加订单的模态窗口
			 */
			$('#content-system .am-icon-plus').parent().on('click',function(){
				$('#all_operate').empty();
				JafeneyPromptAddTheme("添加新主题");	
				$('#JafeneyPrompt').modal({
					relatedTarget: this,
			        onConfirm: function(e) {
			        	var flag=1;
			          
			          	//如果成功
						if(flag){
							JafeneyAlert("温馨提示","新主题添加成功！主题信息为："+e.data||'');		
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
			/**
			 * @desc 编辑订单的模态窗口
			 */
			$('#content-system .am-icon-pencil-square-o').parent().on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyPromptAddTheme("编辑主题");	
				$('#JafeneyPrompt').modal({
					relatedTarget: this,
			        onConfirm: function(e) {
			        	var flag=1;
			          	
			          	//如果成功
						if(flag){
							JafeneyAlert("温馨提示","主题修改成功！主题信息为："+e.data||'');	
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
			/**
			 * @desc 单个订单删除的模态窗口
			 */
			$('#content-system .delete-theme').on('click',function(e){
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyComfirm("温馨提示","您确定要删除该主题吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var flag=0;
			          	
						if(flag){
							JafeneyAlert("温馨提示","该主题已被成功删除！");		
						}else{
							JafeneyAlert("温馨提示","删除失败请重试！");		
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
			/**
			 * @desc 批量删除订单的模态窗口
			 */
			$('#content-system .delete-some').on('click',function(e){
				$('#all_operate').empty();
				e.preventDefault();
				JafeneyComfirm("温馨提示","您确定要删除这些主题吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	var checkBoxs=$('#content-system input[type=checkbox]');
						var selectItems=[];
						$.each(checkBoxs,function(idx,item){
							if(checkBoxs.eq(idx).prop('checked')){
								selectItems.push(checkBoxs.eq(idx).data('id'));
							}
						});
						if(selectItems.length===0){
							JafeneyAlert("温馨提示","请先勾选要删除的内容！");	
						}else{
							JafeneyAlert("温馨提示","删除成功！");
						}
						$('#JafeneyAlert').modal();
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
		})();
	});

})(jQuery);
