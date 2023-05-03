function sendMail() {
	let params = {
		from_name: document.getElementById("fullName").value,
		email_id: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};

	emailjs.send("service_gss4unv", "template_q8ai6we", params).then(
		function (response) {
			console.log("SUCCESS! ", response.status, response.text);
		},
		function (error) {
			console.log("FAILED", error);
		}
	);
}
