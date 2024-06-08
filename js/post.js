document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector("form");
	const tagBtn = document.querySelector(".tag-btn");
	const submitBtn = document.querySelector(".submit-btn");

	const postData = {
		title: "",
		description: "",
		image: "",
		tags: [],
		author: "Ibrokhim Jalalov",
	};

	tagBtn.addEventListener("click", function (event) {
		event.preventDefault();
		const tag = document.getElementById("tag").value;
		if (tag && !postData.tags.includes(tag)) {
			postData.tags.push(tag);
		}
	});

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		postData.title = document.getElementById("title").value;
		postData.description = document.getElementById("description").value;
		postData.image = document.getElementById("image").value;

		console.log("Post data:", postData);

		fetch(
			"https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("access_token"),
				},
				body: JSON.stringify(postData),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	});
});

let token = localStorage.getItem("access_token");
let user = token.split(".");
let userInfo = JSON.parse(atob(user[1]));

const $nameEl = document.querySelector(".author__name");
$nameEl.textContent = userInfo.email;

const $role = document.querySelector(".author__sub");

$role.textContent = userInfo.role;
