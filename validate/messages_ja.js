/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: JA (Japanese; 日本語)
 */
$.extend( $.validator.messages, {
	required: "このフィールドは必須です",
	required2: $.validator.format("{text}は必須です" ),
	remote: "このフィールドを修正してください",
	email: "有効なEメールアドレスを入力してください",
	Name: "お名前を入力してください",
	url: "有効なURLを入力してください",
	password: "半角英数字記号をそれぞれ1種類以上含む8～100文字となるよう入力してください",
	password2: "8文字以上で入力かつ半角英文字、半角数字、半角記号のいずれか2種類以上組み合わせて設定してください。",
	date: "有効な日付を入力してください",
	dateISO: "有効な日付（ISO）を入力してください",
	number: "ハイフンなしの番号で入力してください",
	digits: "数字のみを入力してください",
	creditcard: "有効なクレジットカード番号を入力してください",
	equalTo: "同じ値をもう一度入力してください",
	extension: "有効な拡張子を含む値を入力してください",
	maxlength: $.validator.format( "{0} 文字以内で入力してください" ),
	minlength: $.validator.format( "{0} 文字以上で入力してください" ),
	rangelength: $.validator.format( "{0} 文字から {1} 文字までの値を入力してください" ),
	range: $.validator.format( "{0} から {1} までの値を入力してください" ),
	step: $.validator.format( "{0} の倍数を入力してください" ),
	max: $.validator.format( "{0} 以下の値を入力してください" ),
	min: $.validator.format( "{0} 以上の値を入力してください" )
} );