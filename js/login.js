const $form = document.querySelector("form");
const $signLink = document.querySelector(".sign-up");

$form.addEventListener("submit", logIn);

function logIn(e) {
	e.preventDefault();
	const $emailInput = document.getElementById("email");
	const $passwordInput = document.getElementById("password");
	let user = {
		email: $emailInput.value,
		password: $passwordInput.value,
	};
	fetch(
		"https://blogpost-server-production-d92d.up.railway.app/api/v1/user/login",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}
	)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			localStorage.setItem("access_token", data.data.token);
		});
}

$signLink.addEventListener("click", function () {
	location.replace(location.origin + "/pages/sign.html");
});
