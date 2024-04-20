let endpoint = 'https://api.jikan.moe/v4/top/anime'
fetch(endpoint)
.then((res) => res.json())
.then((data) => console.log(data.data))
