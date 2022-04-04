let id = 0;
function removePost(id) {
  let post = document.getElementById("post-" + id);
  console.log(post);
  console.log(id);
  post.remove();
}
function likePost(id) {
  let post = document.getElementById("post-" + id);
  console.log(post);
  let likeBtn = document.getElementById("like-post-" + id);
  console.log(likeBtn);
  if (likeBtn.innerText === "Like") {
    likeBtn.style.backgroundColor = "rgb(50,100,255)";
    likeBtn.style.color = "#f1faee";
    likeBtn.innerText = "Unlike";
  } else {
    likeBtn.style.backgroundColor = "#e5e5e5";
    likeBtn.style.color = "#000000";
    likeBtn.innerText = "Like";
  }
}
//n = nth position to add new post
let count = 0;
function addPost() {
  let addPostBtn = document.getElementById("add-new-post");
  let postsContainer = document.getElementById("all");
  console.log(postsContainer);
  console.log(addPostBtn);
  //creating new remove button
  let newRemoveBtn = document.createElement("button");
  newRemoveBtn.classList.add("remove-btn", "btn");
  newRemoveBtn.textContent = "X";
  newRemoveBtn.setAttribute("onclick", `removePost(${count})`);
  newRemoveBtn.setAttribute("id", `remove-post-${count}`);
  //creating new like button
  let newLikeBtn = document.createElement("button");
  newLikeBtn.classList.add("like-btn", "btn");
  newLikeBtn.textContent = "Like";
  newLikeBtn.setAttribute("id", `like-post-${count}`);
  newLikeBtn.setAttribute("onclick", `likePost(${count})`);
  //creating <p> element
  let postText = document.createElement("p");
  let inputText = document.getElementById("new-post-text");
  if (inputText.value.length === 0 || inputText.value.trim()==0) {
    window.alert("Your post is empty!");
    inputText.value=""
  } else {
    postText.innerText = `${inputText.value}`;
    //creating div element for new post
    let newPost = document.createElement("div");
    newPost.setAttribute("id", `post-${count}`);
    newPost.classList.add("post");

    newPost.appendChild(newRemoveBtn);

    newPost.appendChild(postText);
    newPost.appendChild(newLikeBtn);

    postsContainer.prepend(newPost);
    count++; //no. of posts is increased.
    inputText.value= "";
  }
}
