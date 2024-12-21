const postListDOM = document.querySelector(".post-list");
const postUI = (posts) => {
    let result = '';
    posts.forEach(post => {
        result += `
            <li class="post-item">
                <div class="post-body">
                    <span class="post-id">Post Id: <b>${post.id}</b></span>
                    <strong class="post-title">${post.title}</strong>
                    <p class="post-content">${post.body}</p>
                </div>
                <button class="post-button">Read More</button>
            </li>
        `;
    });
    postListDOM.innerHTML = result;
}
//! AJAX
/* const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.responseText;
        const data = JSON.parse(response);
        console.log(response); 
        postUI(data);
    } else {
        console.error("Request failed with status: " + xhr.status);
    }
}

xhr.send(); */

//! FETCH

/* fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => postUI(data)).catch((error) => console.log(error)); */

//! Async & Await

const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    postUI(data);

}

window.addEventListener("DOMContentLoaded", () => {
    getData();
})



