let blackico = document.querySelector("link#black-ico");
let whiteico = document.querySelector("link#white-ico");

matcher = window.matchMedia("(prefers-color-scheme: dark)");
matcher.addListener(onUpdate);

function onUpdate() {
	if (matcher.matches) {
		blackico.remove();
		document.head.append(whiteico);
		console.log(1);
	} else {
		document.head.append(blackico);
		whiteico.remove();
		console.log(0);
	}
}
