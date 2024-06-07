const url = location.search;
const blogId = new URLSearchParams(url).get("blog-id");
const $info = document.querySelector(".info");
const $signLink = document.getElementById("sign-link");

fetch(
	`https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/${blogId}`
)
	.then((response) => response.json())
	.then((data) => renderBlog(data.data));

function renderBlog(data) {
	Array(data).forEach((blog) => {
		console.log(blog);
		$info.innerHTML = `
    <div class="info__content content">
							<h2 class="content__title">${blog.title}</h2>
							<span class="content__tag">#${blog.tags[0]}</span>
						</div>
						<div class="content__img-box">
							<img
								src="${blog.image}"
								alt="img"
								width="969"

							/>
						</div>
						<div class="content__description">
							<p class="content__text">
								${blog.description}
							</p>
						</div>
    `;
	});
}
$signLink.addEventListener("click", function () {
	location.replace(location.origin + "/pages/sign.html");
	$signLink.href = `${location.replace(location.origin + "/pages/sign.html")}`;
});
