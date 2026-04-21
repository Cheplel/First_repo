// Write your code here!
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

function displayPosts(posts) {
    const container = document.getElementById('posts');
    container.innerHTML = '';

    posts.forEach(post => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        container.appendChild(li);
    });
}

async function loadRandomPosts(){
    const allPosts = await fetchPosts();
    const randomPosts = allPosts
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

    displayPosts(randomPosts);
}

