const $list = document.querySelector(".list");
const $signLink = document.getElementById("sign-link");
const $loginLink = document.getElementById("login-link");

function fetchBlogs() {
	fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs")
		.then((res) => res.json())
		.then((data) => renderBlogs(data.data));
}

function renderBlogs(data) {
	console.log(data);
	data.forEach((blog) => {
		console.log(blog);
		const $item = document.createElement("li");
		$item.classList.add("list__item", "item");
		$item.innerHTML = `
      <a href="../pages/single.html?blog-id=${blog._id}">
      <img class="main-img" src=${blog.image}
      alt="img"
      width="266"
      height="172"/> </a>
      <div class="item__content">
        <h3 class="item__title">${blog.title}</h3>
        <p class="item__text">${blog.description}</p>
        <div class="item__prof">
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
            alt=""
            width="40"
            height="40"
          />
          <div class="item__author author">
            <h4 class="author__name">${blog.author}</h4>
            <span class="author__sub">Author</span>
          </div>
        </div>
      </div>
    `;

		function viewRecipe(id) {
			window.location.href = `single.html?id=${id}`;
		}

		$list.appendChild($item);
	});
}

fetchBlogs();

$signLink.addEventListener("click", function () {
	location.replace(location.origin + "/pages/sign.html");
	$signLink.href = `${location.replace(location.origin + "/pages/sign.html")}`;
});
$loginLink.addEventListener("click", function () {
	location.replace(location.origin + "/pages/login.html");
});
