/**
 * ボタン押下イベント処理
 */
$(function(){
	/**
	 * 選択ボタンクリック処理
	 */
	$(".btn-check").click(function(){
		var primaryClass = "btn-primary";
		var defaultClass = "btn-default";
		var parent = $(this).parents(".menu-group");
		var children = parent.find(".btn");
		for(var child of children){
			if($(child).hasClass(primaryClass)){
				$(child).removeClass(primaryClass);
				$(child).addClass(defaultClass);
			}
		}
		$(this).removeClass(defaultClass);
		$(this).addClass(primaryClass);
	});
});

/**
 * サイドメニュー開閉処理
 */
$(function(){
	$(document).ready(function() {
		$('#simple-menu').sidr({
			displace : false
		});
	});

	$('#overlay, #close-menu-button').click(function() {
		$.sidr('close', 'sidr');
	});
})