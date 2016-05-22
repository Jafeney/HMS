#关于毕设

1.Ueditor 是怎么用的？ (富文本编辑器)
首先要引入三方的JS类库 
- ueditor.config.js  适配文件
- ueditor.all.min.js 真正的类库

UE.getEditor('editor')   参数是DOM节点的ID（唯一的） 

2. utf-8 是全局使用的编码方式。

3. 轮播轮播 slide 
<img src="图片的网址或路径" /> 

4.主外键关系从图上怎么看 
》指向的那张表是当前表的外键 

5. Ajax请求有两种方式一种是 get 、post

6. jQuery Ajax已经做好了封装 $.getJSON   $.ajax   
   res.res 1或0    

7.$('#login-submit').on('click',function(e) 
  e 就是这个事件的参数 
  preventDefault 阻止默认事件   

8. 从index（管理主页）开始，所有的JS写在了app.js里面 