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

function JafeneyPrompt(your_title){
	var $JafeneyPrompt=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyPrompt'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'></div>");
	var $JModelInput=$("<textarea class='am-modal-prompt-input'></textarea>");
	var $JModelFooter=$("<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>");
	$JModelBody.append($JModelInput);
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyPrompt.append($JDialog);
	$('#all_operate').append($JafeneyPrompt);
}

function JafeneyPromptAddUser(your_title){
	var $JafeneyPrompt=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyPrompt'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'></div>");
	var $JModelInput1=$("<label class='am-fl am-margin-left'>学号</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>");
	var $JModelInput2=$("<label class='am-fl am-margin-left'>姓名</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>");
	var $JModelInput3=$("<label class='am-fl am-margin-left'>班级</label> <select class='am-modal-prompt-input am-fr'><option>13计算机班</option><option>13信管1班</option><option>13信管2班</option><option>14计算机班</option><option>14信管1班</option><option>14信管2班</option></select><div class='am-cf am-margin-bottom-sm'></div>");	
	var $JModelFooter=$("<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>");
	$JModelBody.append($JModelInput1);
	$JModelBody.append($JModelInput2);
	$JModelBody.append($JModelInput3);
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyPrompt.append($JDialog);
	$('#all_operate').append($JafeneyPrompt);
}


function JafeneyPromptAddFile(your_title){
	var $JafeneyPrompt=$("<div class='am-modal am-modal-prompt' tabindex='-1' id='JafeneyPrompt'></div>");
	var $JDialog=$("<div class='am-modal-dialog'></div>");
	var $JModelHead=$("<div class='am-modal-hd'><i class='am-icon-smile-o am-margin-right-sm'></i>"+your_title+"</div>");
	var $JModelBody=$("<div class='am-modal-bd'></div>");
	var $JModelInput1=$("<label class='am-fl am-margin-left'>文档标题</label> <input type='text' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>");
	var $JModelInput2=$("<label class='am-fl am-margin-left'>文档位置</label> <input type='file' class='am-modal-prompt-input am-fr'><div class='am-cf'></div>");
	var $JModelInput3=$("<label class='am-fl am-margin-left'>文档简介</label> <textarea class='am-modal-prompt-input am-fr'></textarea><div class='am-cf am-margin-bottom-sm'></div>");	
	var $JModelFooter=$("<div class='am-modal-footer'><span class='am-modal-btn' data-am-modal-cancel>取消</span><span class='am-modal-btn' data-am-modal-confirm>确定</span></div>");
	$JModelBody.append($JModelInput1);
	$JModelBody.append($JModelInput2);
	$JModelBody.append($JModelInput3);
	$JDialog.append($JModelHead);
	$JDialog.append($JModelBody);
	$JDialog.append($JModelFooter);
	$JafeneyPrompt.append($JDialog);
	$('#all_operate').append($JafeneyPrompt);
}


















