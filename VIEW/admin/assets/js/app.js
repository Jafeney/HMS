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

			//获取顶部状态信息
			$.getJSON(APIURL+'sideBar_info.act.php',function(res){
				if(res){
					$('#login-name').html(res.username);
					$('.new-message-count').html(res.messageCount);
				}
			});

			//检查用户登录状态
			$.getJSON(APIURL+'check_login.act.php',function(res){
				if(!res.res){
					location.href="./login.html";
				}
			});

			//注销登录
			$('#login-out').on('click',function(){
				$.getJSON(APIURL+'login_out.act.php',function(res){
					if(res.res){
						location.href="./login.html";
					}
				});
			});
		})();
		
		/**
		 * @page admin-index
		 * @desc 管理首页脚本代码
		 */
		var IndexModule=(function(){
			/**
			 * @desc 主体内容加载
			 */
			$.getJSON(APIURL+'index_data.act.php',function(res){
				if(res){
					console.log(res);
					//今日订单
					$('#today-order-count').html(res.orderCount); 
					//今日客户
					$('#today-customer-count').html(res.customerCount);
					//今日收入
					$('#today-income').html("￥"+res.income);
					//今日留言
					$('#today-message-count').html(res.messageCount);
					//用户名
					$('#input-username').val(res.userName);
					//常住地址
					$('#input-address').val(res.address);
					//邮箱
					$('#input-email').val(res.email);
					//联系电话
					$('#input-phone').val(res.phone);
				}
			});

			/**
			 * @desc 修改密码
			 */
			$('#save_password').on('click',function(){
				$('#all_operate').empty();
				
				var _oldpwd=$('#tb_oldpwd').val();
				var _newpwd=$('#tb_newpwd').val();
				var _renewpwd=$('#tb_repwd').val();

				if(_oldpwd && _newpwd && _renewpwd){
					if(_newpwd!==_renewpwd){
						JafeneyAlert("温馨提示","两次密码输入不一致！");
						$('#JafeneyAlert').modal();
						return false;
					}else{
						$.ajax({
							type:'get',
							url:APIURL+'change_password.act.php',
							data:{
								oldpwd:_oldpwd,
								newpwd:_newpwd
							},
							dataType:'json',
							success:function(res){
								if(res.res==-1){
									JafeneyAlert("温馨提示","旧密码不正确！");
									$('#JafeneyAlert').modal();
									return false;
								}else if(res.res==1){
									JafeneyAlert("温馨提示","恭喜！密码修改成功！");
									$('#JafeneyAlert').modal();
								}else{
									JafeneyAlert("温馨提示","抱歉！请重试！");
									$('#JafeneyAlert').modal();
									return false;
								}
							}
						});
					}
				}else{
					JafeneyAlert("温馨提示","请确保以上三项都不为空！");
					$('#JafeneyAlert').modal();
					return false;	
				}				
			});
			/**
			 * @desc 修改个人信息
			 */
			$('#save_person_info').on('click',function(){
				$('#all_operate').empty();

				var _userName=$('#input-username').val();
				var _address=$('#input-address').val();
				var _email=$('#input-email').val();
				var _phone=$('#input-phone').val();

				if(_userName && _address && _email && _phone){
					if(_phone.length!==11){
						JafeneyAlert("温馨提示","手机号码格式不正确！");
						$('#JafeneyAlert').modal();
						return false;
					}else{
						$.ajax({
							type:'get',
							url:APIURL+'change_password.act.php',
							data:{
								userName:_userName,
								address:_address,
								email:_email,
								phone:_phone
							},
							dataType:'json',
							success:function(res){
								if(res){
									JafeneyAlert("温馨提示","个人信息修改成功！");
									$('#JafeneyAlert').modal();
								}
							}
						});
					}
				}else{
					JafeneyAlert("温馨提示","请确保以上四项都不为空！");
					$('#JafeneyAlert').modal();
					return false;	
				}				
			});

			/**
			 * @desc 取消操作（刷新页面重新加载旧数据）
			 */
			$('.index-submit-cancel').on('click',function(){
				location.replace(location.href);
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
					testAllChecked();
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
					testAllChecked();
				});
			});
			
			/**
			 * @desc 批量删除图片的模态窗口
			 */
			$('#content-image .delete-some').on('click',function(e){
				e.preventDefault();
				DeleteSome('图片',function(){
					$('.check-single.checked').parent().parent().remove();
					testAllChecked();
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
			 * @desc 加载客户列表
			 */
			LoadData('users',0,function(res){
				var i=0,
					len=res.length,
					_htmlArr=[];
				for(i=0;i<len;i++){
					_htmlArr[i]=[
					'<tr>',
						'<td><input type="text" class="checkbox check-single" data-id='+res[i].c_id+' /></td>',
						'<td>'+res[i].c_id+'</td>',
						'<td>'+res[i].c_name+'</td>',
						'<td>'+txtLengthFormat(res[i].c_IDcard,10)+'</td>',
						'<td class="am-hide-sm-only am-text-center">'+res[i].c_sex+'</td>',
						'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+res[i].c_phone+'</td>',
						'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+txtLengthFormat(res[i].c_address,5)+'</td>',
						'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+res[i].c_upTime+'</td>',
						'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+res[i].c_rank+'</td>',
						'<td><div class="am-btn-toolbar">',
							'<div class="am-btn-group am-btn-group-xs">',
								'<button data-id='+res[i].c_id+' class="am-btn am-btn-default am-btn-xs am-text-secondary edit-user">',
									'<span class="am-icon-pencil-square-o"></span> 编辑',
								'</button>',
								'<button data-id='+res[i].c_id+' class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only delete-user" >',
									'<span class="am-icon-trash-o "></span> 删除</button>',
								'</div>',
							'</div>',
						'</td>',
					'</tr>'
					].join('');
				}
				$('#user-list').html(_htmlArr.join(''));
			});

			/**
			 * @desc 添加客户的模态窗口
			 */
			$('#content-users').on('click','#user-add',function(e){
				e.preventDefault();

				AddOne('客户',JafeneyPromptAddUser,function(){
					var source={
						id: 5,
						name: '盛燕妮',
						IDcard: '3330683199311137014',
						sex: '女',
						phone: '18367854560',
						address: '温州医科大学',
						upTime: '2016-02-29 12:23:00',
						rank: 1
					};
					var newTr=[
						'<tr>',
							'<td><input type="text" class="checkbox check-single" data-id='+source.id+' /></td>',
							'<td>'+source.id+'</td>',
							'<td>'+source.name+'</td>',
							'<td>'+txtLengthFormat(source.IDcard,10)+'</td>',
							'<td class="am-hide-sm-only am-text-center">'+source.sex+'</td>',
							'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+source.phone+'</td>',
							'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+txtLengthFormat(source.address,5)+'</td>',
							'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+source.upTime+'</td>',
							'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+source.rank+'</td>',
							'<td><div class="am-btn-toolbar">',
								'<div class="am-btn-group am-btn-group-xs">',
									'<button data-id='+source.id+' class="am-btn am-btn-default am-btn-xs am-text-secondary edit-user">',
										'<span class="am-icon-pencil-square-o"></span> 编辑',
									'</button>',
									'<button data-id='+source.id+' class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only delete-user" >',
										'<span class="am-icon-trash-o "></span> 删除</button>',
									'</div>',
								'</div>',
							'</td>',
						'</tr>'
					].join('');

					$('#user-list').append(newTr);
					testAllChecked();
				});
			});
			
			/**
			 * @desc 编辑客户的模态窗口
			 */
			$('#content-users').on('click','.edit-user',function(e){
				e.preventDefault();
				var self= $(this);
				UpdateOne('客户',JafeneyPromptAddUser,function(){
					var source={
						id: 5,
						name: 'seyaney',
						IDcard: '3330683199311137014',
						sex: '女',
						phone: '18367854560',
						address: '温州医科大学',
						upTime: '2016-02-29 12:23:00',
						rank: 1
					};
					var updateTr=[
						'<td><input type="text" class="checkbox check-single" data-id='+source.id+' /></td>',
						'<td>'+source.id+'</td>',
						'<td>'+source.name+'</td>',
						'<td>'+txtLengthFormat(source.IDcard,10)+'</td>',
						'<td class="am-hide-sm-only am-text-center">'+source.sex+'</td>',
						'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+source.phone+'</td>',
						'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+txtLengthFormat(source.address,5)+'</td>',
						'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+source.upTime+'</td>',
						'<td class="am-hide-sm-only am-hide-sm-only am-text-center">'+source.rank+'</td>',
						'<td><div class="am-btn-toolbar">',
							'<div class="am-btn-group am-btn-group-xs">',
								'<button data-id='+source.id+' class="am-btn am-btn-default am-btn-xs am-text-secondary edit-user">',
									'<span class="am-icon-pencil-square-o"></span> 编辑',
								'</button>',
								'<button data-id='+source.id+' class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only delete-user" >',
									'<span class="am-icon-trash-o "></span> 删除</button>',
								'</div>',
							'</div>',
						'</td>',
					].join('');

					self.parent().parent().parent().parent().html(updateTr);
					testAllChecked();
				});
			});

			/**
			 * @desc 单个客户删除的模态窗口
			 */
			$('#content-users').on('click','.delete-user',function(e){
				e.preventDefault();
				var self=$(this);
				DeleteOne('客户',function(){
					self.parent().parent().parent().parent().remove();
					testAllChecked();
				});
			});

			/**
			 * @desc 批量删除客户的模态窗口
			 */
			$('#content-users .delete-some').on('click',function(e){
				e.preventDefault();
				DeleteSome('客户',function(){
					$('.check-single.checked').parent().parent().remove();
					testAllChecked();
				});
			});
		})();

		/**
		 * @page admin-order
		 * @desc 订单管理模块脚本
		 */
		var OrderManageModule=(function(){
			/**
			 * @desc 添加客户的模态窗口
			 */
			$('#content-order').on('click','#order-add',function(e){
				e.preventDefault();

				AddOne('订单',JafeneyPromptAddUser,function(){
					var source={
						id: 5,
						cName: 'seyaney',
						pName: '单人标准房',
						upTime: '2015-9-15 12:25:30',
						inDate: '2015-9-15',
						outDate: '18367854560',
						total: '120.00',
						isPay: '否',
						payDate: '2015-9-15 12:25:30',
						rank: 1
					};
					var newTr=[
						'<tr>',
							'<td>',
								'<input type="text" class="checkbox check-single" data-id='+source.id+' />',
							'</td>',
							'<td>'+source.id+'</td>',
							'<td>'+source.cName+'</td>',
							'<td>'+source.pName+'</td>',
							'<td class="am-text-center">'+source.upTime+'</td>',
							'<td class="am-text-center">'+source.inDate+'</td>',
							'<td class="am-text-center">'+source.outDate+'</td>',
							'<td class="am-hide-sm-only">¥'+source.total+'</td>',
							'<td class="am-hide-sm-only am-text-center">'+source.isPay+'</td>',
							'<td class="am-hide-sm-only am-text-center">'+source.payDate+'</td>',
							'<td class="am-hide-sm-only am-text-center">'+source.rank+'</td>',
							'<td>',
								'<div class="am-btn-toolbar">',
									'<div class="am-btn-group am-btn-group-xs">',
										'<button data-id='+source.id+' class="am-btn am-btn-default am-btn-xs am-text-secondary edit-order"><span class="am-icon-pencil-square-o"></span> 编辑</button>',
										'<button data-id='+source.id+' class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only delete-order" ><span class="am-icon-trash-o "></span> 删除</button>',
									'</div>',
								'</div>',
							'</td>',
						'</tr>'
					].join('');

					$('#order-list').append(newTr);
					testAllChecked();
				});
			});
			
			/**
			 * @desc 编辑客户的模态窗口
			 */
			$('#content-order').on('click','.edit-order',function(e){
				e.preventDefault();
				var self= $(this);
				UpdateOne('订单',JafeneyPromptAddUser,function(){
					var source={
						id: 5,
						cName: '盛燕妮',
						pName: '单人标准房',
						upTime: '2015-9-15 12:25:30',
						inDate: '2015-9-15',
						outDate: '18367854560',
						total: '120.00',
						isPay: '否',
						payDate: '2015-9-15 12:25:30',
						rank: 1
					};
					var updateTr=[
						'<td>',
							'<input type="text" class="checkbox check-single" data-id='+source.id+' />',
						'</td>',
						'<td>'+source.id+'</td>',
						'<td>'+source.cName+'</td>',
						'<td>'+source.pName+'</td>',
						'<td class="am-text-center">'+source.upTime+'</td>',
						'<td class="am-text-center">'+source.inDate+'</td>',
						'<td class="am-text-center">'+source.outDate+'</td>',
						'<td class="am-hide-sm-only">¥'+source.total+'</td>',
						'<td class="am-hide-sm-only am-text-center">'+source.isPay+'</td>',
						'<td class="am-hide-sm-only am-text-center">'+source.payDate+'</td>',
						'<td class="am-hide-sm-only am-text-center">'+source.rank+'</td>',
						'<td>',
							'<div class="am-btn-toolbar">',
								'<div class="am-btn-group am-btn-group-xs">',
									'<button data-id='+source.id+' class="am-btn am-btn-default am-btn-xs am-text-secondary edit-order"><span class="am-icon-pencil-square-o"></span> 编辑</button>',
									'<button data-id='+source.id+' class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only delete-order" ><span class="am-icon-trash-o "></span> 删除</button>',
								'</div>',
							'</div>',
						'</td>'
					].join('');

					self.parent().parent().parent().parent().html(updateTr);
					testAllChecked();
				});
			});

			/**
			 * @desc 单个客户删除的模态窗口
			 */
			$('#content-order').on('click','.delete-order',function(e){
				e.preventDefault();
				var self=$(this);
				DeleteOne('订单',function(){
					self.parent().parent().parent().parent().remove();
					testAllChecked();
				});
			});

			/**
			 * @desc 批量删除客户的模态窗口
			 */
			$('#content-order .delete-some').on('click',function(e){
				e.preventDefault();
				DeleteSome('新闻',function(){
					$('.check-single.checked').parent().parent().remove();
					testAllChecked();
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
				var self=$(this);
				DeleteOne('订单',function(){
					self.parent().parent().parent().parent().remove();
					testAllChecked();
				});
			});

			/**
			 * @desc 批量删除新闻的模态窗口
			 */
			$('#content-news .delete-some').on('click',function(e){
				$('#all_operate').empty();
				e.preventDefault();
				DeleteSome('新闻',function(){
					$('.check-single.checked').parent().parent().remove();
					testAllChecked();
				});
			});
		})();

		/**
		 * @page admin-message
		 * @desc 留言管理模块
		 */
		var MessageMangeModule=(function(){

			/**
			 * @desc 加载初始化数据
			 */
			LoadData('messages',0,function(res){
				$('#count-all').text(res.all);
				$('#count-needRead').text(res.needRead);
				$('#count-hasRead').text(res.hasRead);
				var data=res.res;
				var source=[];
				for(var i=0,len=data.length;i<len;i++){
					source[i] =[
						'<li>',
							'<div class="admin-task-meta">',
							'<input type="text" style="top:-2px;" class="checkbox check-single" data-id="'+data[i].m_id+'" />',
							'<span class="am-text-danger">'+data[i].m_userName+'</span> &nbsp; &nbsp;<span>'+data[i].m_upTime+'</span> &nbsp; &nbsp;<span class="am-text-defualt">'+data[i].m_phone+'</span>  &nbsp; &nbsp;<span class="am-text-defualt">'+data[i].m_email+'</span><span class="am-text-defualt am-fr operate-time">'+data[i].m_operateTime+'</span>',
							'</div>',
							'<div class="admin-task-bd am-padding-left-sm">'+data[i].m_content,
							'</div>',
							'<div class="am-cf">',
								'<div class="am-btn-toolbar am-fr">',
									'<div class="am-btn-group am-btn-group-xs">',
										'<button data-id="'+data[i].m_id+'" type="button" class="am-btn am-btn-default looked-message"><span class="am-icon-check"></span></button>',
										'<button data-id="'+data[i].m_id+'"  type="button" class="am-btn am-btn-default delete-message"><span class="am-icon-times"></span></button>',
									'</div>',
								'</div>',
							'</div>',
						'</li>'
					].join('');
				}
				$('#message-list').html(source.join(''));

				// 做一次判断，如果留言已阅 则无法继续审阅，只能删除
				var arr=$('.operate-time');
				$.each(arr,function(i,item){
					if(arr.eq(i).text().length){
						arr.eq(i).parent().parent().find('.looked-message').hide();
					}
				});
			});
			
			/**
			 * @desc 选项卡切换
			 */
			$('.tab-header').on('click',function(){
				$(this).addClass('active').siblings().removeClass('active');
				var id = $(this).data('id');
			});

			/**
			 * @desc 已阅单条留言
			 */
			$('#content-message').on('click','.looked-message',function(e){
				var id=$(this).data('id');
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyComfirm("温馨提示","您确定要已经阅读过该留言了吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	$.getJSON(APIURL+'messages_look.act.php?id='+id,function(res){
			        		if(res.res){
			        			JafeneyAlert("温馨提示","该留言已被成功阅读！");
			        			setTimeout(function(){
									location.href=location.href;
								},500);
			        		}else{
			        			JafeneyAlert("温馨提示","操作失败请重试！");	
			        		}
			        		$('#JafeneyAlert').modal();
			        	});
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
			        	var checkBoxs=$('.check-single.checked');
						var selectItems=[];
						$.each(checkBoxs,function(idx,item){
							selectItems.push(checkBoxs.eq(idx).data('id'));
						});
						if(selectItems.length===0){
							JafeneyAlert("温馨提示","请先勾选要批量操作的内容！");
						}else{
							$.getJSON(APIURL+'messages_look.act.php?id='+selectItems.join(','),function(res){
								if(res.res){
									JafeneyAlert("温馨提示","这些留言已被成功阅读！");
									setTimeout(function(){
										location.href=location.href;
									},500);
								}else{
									JafeneyAlert("温馨提示","操作失败请重试！");	
								}
								$('#JafeneyAlert').modal();
							});
						}
			        },
			        onCancel: function() {
			          //什么都不做
			        }
				});
			});
			
			/**
			 * @desc 删除留言
			 */
			$('#content-message').on('click','.delete-message',function(e){
				var id=$(this).data('id');
				e.preventDefault();
				$('#all_operate').empty();
				JafeneyComfirm("温馨提示","您确定要删除该留言吗？");	
				$('#JafeneyComfirm').modal({
					relatedTarget: this,
			        onConfirm: function(options) {
			        	$.getJSON(APIURL+'messages_delete.act.php?id='+id,function(res){
			        		if(res.res){
			        			JafeneyAlert("温馨提示","该留言已被成功删除！");
			        			setTimeout(function(){
			        				location.href=location.href;
			        			},500);
			        		}else{
			        			JafeneyAlert("温馨提示","操作失败请重试！");	
			        		}
			        		$('#JafeneyAlert').modal();
			        	});
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
        	        	var checkBoxs=$('.check-single.checked');
        				var selectItems=[];
        				$.each(checkBoxs,function(idx,item){
        					selectItems.push(checkBoxs.eq(idx).data('id'));
        				});
        				if(selectItems.length===0){
        					JafeneyAlert("温馨提示","请先勾选要批量操作的内容！");
        				}else{
        					$.getJSON(APIURL+'messages_delete.act.php?id='+selectItems.join(','),function(res){
        						if(res.res){
        							JafeneyAlert("温馨提示","这些留言已被成功删除！");
        							setTimeout(function(){
        								location.href=location.href;
        							},500);
        						}else{
        							JafeneyAlert("温馨提示","操作失败请重试！");	
        						}
        						$('#JafeneyAlert').modal();
        					});
        				}
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
