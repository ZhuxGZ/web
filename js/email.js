const DEF_DELAY = 1000;

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms || DEF_DELAY));
}

function sendMail() {
	let inputs = document.querySelectorAll("input[type=text]");
	let placeholders = ["Full Name", "Email", "Message"];

	let params = {
		from_name: inputs[0].value,
		email_id: inputs[1].value,
		message: inputs[2].value,
	};

	if (params.from_name != "" && params.email_id != "" && params.message != "") {
		emailjs.send("service_gss4unv", "template_q8ai6we", params).then(
			function (response) {
				console.log("SUCCESS! ", response.status, response.text);

				for (let i = 0; i < 3; i++) {
					inputs[i].value = "";
					inputs[i].placeholder = placeholders[i];
					inputs[i].classList.remove("input");
				}
			},
			function (error) {
				console.log("FAILED", error);
			}
		);
	} else {
		for (let i = 0; i < 3; i++) {
			if (inputs[i].value == "") {
				inputs[i].classList.add("input");
				inputs[i].placeholder = "Fill this field";
			} else {
				inputs[i].classList.remove("input");
				inputs[i].placeholder = placeholders[i];
			}
		}
	}
}
