document.addEventListener('DOMContentLoaded', function() {
    // Populate blog page
    populateBlog("/blogposts");
});

function populateBlog(blogposts) {
    const blogDisplay = document.getElementById("blogDisplay");

    const copyBlogPost = document.getElementById("copyBlogPost");

    console.log("Blogposts Folder: " + blogposts);
    const blogJSON = `${blogposts}/blog.json`;
    console.log("Blog JSON: " + blogJSON);

    fetch(blogJSON)
    .then(response => response.json())
    .then(data => {
        data.forEach(blogPost => {
            const clonedBlogPost = copyBlogPost.cloneNode(true);
            clonedBlogPost.removeAttribute("id");

            const imageLinkElement = clonedBlogPost.getElementsByClassName("postImageLink")[0];
            imageLinkElement.href = blogPost.link;

            const imageElement = clonedBlogPost.getElementsByClassName("postImage")[0];
            imageElement.src = blogPost.image;

            const postTitleElement = clonedBlogPost.getElementsByClassName("postTitle")[0];
            postTitleElement.innerText = blogPost.title;
            postTitleElement.href = blogPost.link;
            
            const datePublishedElement = clonedBlogPost.getElementsByClassName("postDate")[0];
            datePublishedElement.innerText = blogPost.datePublished;

            const authorElement = clonedBlogPost.getElementsByClassName("postAuthor")[0];
            authorElement.innerText = blogPost.author;

            const tagsElement = clonedBlogPost.getElementsByClassName("postTags")[0];
            tagsElement.innerText = `Tags: ${blogPost.tags.join(", ")}`;

            const descriptionElement = clonedBlogPost.getElementsByClassName("postDescription")[0];
            descriptionElement.innerText = blogPost.description;

            blogDisplay.appendChild(clonedBlogPost);
        });
    })
    .catch(error => console.error('Error loading blog data:', error));
}
