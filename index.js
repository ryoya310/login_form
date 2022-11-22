jQuery(function($){

	// 入力で同期
	$(".password_value").on("keyup", function() {
		var val = $(this).val();
		$(".password_value").val(val);
		$("#Password").val(val);
	});

	// text <> pass
	$(".password_box").on("click", "button", function() {
		if ($(this).hasClass("-not-view")) {
			$(".password_not_view").hide();
			$(".password_view").show();
		} else {
			$(".password_view").hide();
			$(".password_not_view").show();
		}
	})

	var isClick = false;
	//バリデーション
	$("#login").on("click", function() {

		isClick = true;
		checkForm()
	});

	$("#LoginID, #Password").on("keyup", function() {

		if (isClick) {
			checkForm()
		}
	});

	function checkForm() {

		var isLogin = true;
		var LoginID = $("#LoginID").val();
		var regexMail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		var err01 = ""
		if (LoginID == "") {
			err01 = "メールアドレスは必須です。";
			isLogin = false;
		} else if (!regexMail.test(LoginID)) {
			err01 = "正しいメールアドレスを入力してください。";
			isLogin = false;
		} else {
			isLogin = true;
		}
		$(".login_error").find("span").html(err01);

		var Password = $("#Password").val();
		var regexPass = /^((?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*?[!-\/:-@[-`{-~])|(?=.*[0-9])(?=.*?[!-\/:-@[-`{-~])|(?=.*[a-zA-Z])(?=.*[0-9])(?=.*?[!-\/:-@[-`{-~]))$/;
		var err02 = ""
		if (Password == "") {
			err02 = "パスワードは必須です。";
			isLogin = false;
		} else if (!regexPass.test(Password)) {
			err02 = "8文字以上で入力かつ半角英文字、半角数字、半角記号のいずれか2種類以上組み合わせて設定してください。";
			isLogin = false;
		} else {
			isLogin = true;
		}
		$(".password_error").find("span").html(err02);

		if (isLogin) {
			formSend()
		}
	}
	//フォームの送信
	function formSend() {

		var data = $("#login_form").serializeArray();
		console.log(data)
		return false;
	}
})