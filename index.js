jQuery(function($){

	// 入力で同期
	$(".password_value").on("keyup", function() {
		var val = $(this).val();
		$(".password_value").val(val);
		$("#Password").val(val);
	});

	// text <> pass
	$(".password").on("click", "button", function() {
		if ($(this).hasClass("-not-view")) {
			$(".password_not_view").hide();
			$(".password_view").show();
		} else {
			$(".password_view").hide();
			$(".password_not_view").show();
		}
	})

	//バリデーション
	$("#login").on("click", function() {

		$("#loginForm").validate().form();

		$("label.error:empty").remove();
		if ($(".error").length == 0) {
			formSend();
		} else {
			var adjust = -160;
			var pos = Math.floor($(".error").offset().top) + adjust;
			$("html, body").animate({scrollTop: pos}, "slow");
		}
	});

	//フォームの送信
	function formSend() {

		var data = $("#loginForm").serializeArray();
		console.log(data)
		return false;
	}
})