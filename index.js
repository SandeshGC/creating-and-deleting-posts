let id = 0; //initializing id 0
function removePost(id) { //removes a post
   const post = document.getElementById("post-" + id);
//   console.log(post);
//   console.log(id);
  post.remove();
}
function likePost(id) {  //to like and unlike a post
  const post = document.getElementById("post-" + id);
//   console.log(post);
  const likeBtn = document.getElementById("like-post-" + id);
//   console.log(likeBtn);
  if (likeBtn.innerText === "Like") {
    likeBtn.style.backgroundColor = "rgb(50,100,255)";
    likeBtn.style.color = "#f1faee";
    likeBtn.textContent = "Unlike";
  } else {
    likeBtn.style.backgroundColor = "#e5e5e5";
    likeBtn.style.color = "#000000";
    likeBtn.textContent= "Like";
  }
}
//n = nth position to add new post
let count = 0;
function addPost() {  //adding a post
  const addPostBtn = document.getElementById("add-new-post");
  const postsContainer = document.getElementById("container"); //the container that contains all posts
//   console.log(postsContainer);
//   console.log(addPostBtn);
  //creating new remove button
  const newRemoveBtn = document.createElement("button");
  newRemoveBtn.classList.add("remove-btn", "btn");
  newRemoveBtn.textContent = "X";
  newRemoveBtn.setAttribute("onclick", `removePost(${count})`);
  newRemoveBtn.setAttribute("id", `remove-post-${count}`);
  //creating new like button
  const newLikeBtn = document.createElement("button");
  newLikeBtn.classList.add("like-btn", "btn");
  newLikeBtn.textContent = "Like";
  newLikeBtn.setAttribute("id", `like-post-${count}`);
  newLikeBtn.setAttribute("onclick", `likePost(${count})`);
  //creating <p> element that contains content of post
  const postText = document.createElement("p");
  const inputText = document.getElementById("new-post-text");  //element that takes user input
  if (inputText.value.length === 0 || inputText.value.trim()==0) {   //checking if the post is empty or contains only whitespaces
    window.alert("Your post is empty!"); 
    inputText.value=""  //resetting the input field
  } else {
    postText.textContent = `${inputText.value}`;  //puts the content of post in the paragraph
//creating div element container for new post
    const newPostContainer = document.createElement("div");
    newPostContainer.setAttribute("id", `post-${count}`);
    newPostContainer.classList.add("post");
    newPostContainer.appendChild(newRemoveBtn);
    newPostContainer.appendChild(postText);
    newPostContainer.appendChild(newLikeBtn);

    postsContainer.prepend(newPostContainer);
    count++; //no. of posts is increased.
    inputText.value= ""; //input field is reset after posting is done
  }
}
