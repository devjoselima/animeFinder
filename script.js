const searchInput = document.querySelector('#pesquisar');
const searchButton = document.querySelector('#button-search');
const loading = document.querySelector(".loading");

async function searchAnime(){

    const search = document.getElementById('pesquisar').value;
    
    const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${search}`);
    const data = await response.json();

    const containerAnimes = document.querySelector('.animes-container');

    containerAnimes.innerHTML = "";

    for(const anime of data.data){
        const banner =  anime.attributes.posterImage.small;
        const title = anime.attributes.titles.en || anime.attributes.titles.ja_jp;
        // const descricao = anime.attributes.synopsis

        containerAnimes.innerHTML +=  `
        <div class="anime">
            <img src="${banner}" alt="${title}">
            <h3>${title}</h3>
        </div>   
        `;
    }


    return false;
}

searchInput.addEventListener("click", () => searchAnime());
searchButton.addEventListener("click", () => searchAnime());

searchInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        searchAnime()
    }
});