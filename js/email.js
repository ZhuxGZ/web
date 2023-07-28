window.onload = function () {
	const formInputs = document.querySelectorAll("#contact-form input");
	document.getElementById("contact-form").addEventListener("submit", function (event) {
		event.preventDefault();
		// these IDs from the previous steps
		emailjs.sendForm("service_gss4unv", "template_q8ai6we", this).then(
			function () {
				console.log("SUCCESS!");

				for (let i = 0; i < formInputs.length; i++) {
					formInputs[i].value = "";
				}
			},
			function (error) {
				console.log("FAILED...", error);
			}
		);
	});
};
