// URL da API:
const url = "https://jsonplaceholder.typicode.com/posts"

// Seleção dos Elementos do DOM em variáveis:
const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

// Pegando todos os posts:
async function getAllPosts() {
    const response = await fetch(url);

    console.log(response);
}