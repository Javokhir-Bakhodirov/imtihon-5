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
			localStorage.setItem("token", data.data.token);
			location.replace(location.origin + "/pages/post.html");
		});
}

$signLink.href = location.origin + "/pages/sign.html";
// $signLink.target = "_blank";
