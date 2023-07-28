window.onload = function () {
	const formInputs = document.querySelectorAll("#contact-form input");
	const submit = document.querySelector("#sendButton");
	document.getElementById("contact-form").addEventListener("submit", function (event) {
		event.preventDefault();
		// these IDs from the previous steps
		emailjs.sendForm("service_gss4unv", "template_q8ai6we", this).then(
			function () {
				console.log("SUCCESS!");

				for (let i = 0; i < formInputs.length; i++) {
					formInputs[i].value = "";
				}

				submit.classList.add("submit");
				submit.innerHTML = "Sended";

				setTimeout(() => {
					submit.classList.remove("submit");
					submit.innerHTML = "Send";
				}, 1500);
			},
			function (error) {
				console.log("FAILED...", error);

				submit.classList.add("failed");
				submit.innerHTML = "Failed";

				setTimeout(() => {
					submit.classList.remove("failed");
					submit.innerHTML = "Send";
				}, 1500);
			}
		);
	});
};
