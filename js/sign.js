const $form = document.querySelector("form");
const $btn = document.querySelector(".btn");
const $loginLink = document.querySelector(".log-in");

$form.addEventListener("submit", userRegister);

function User(firstName, lastName, email, password) {
	this.name = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
}

function userRegister(e) {
	e.preventDefault();
	const $firstName = document.getElementById("first-name");
	const $lastName = document.getElementById("last-name");
	const $email = document.getElementById("email");
	const $password = document.getElementById("password");

	let newUser = new User(
		$firstName.value,
		$lastName.value,
		$email.value,
		$password.value
	);

	fetch(
		"https://blogpost-server-production-d92d.up.railway.app/api/v1/user/register",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		}
	)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			location.replace(location.origin + "/pages/login.html");
		});
}

$loginLink.href = location.origin + "/pages/login.html";
// $loginLink.target = "_blank";
