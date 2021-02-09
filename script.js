const searchSong = () => {
    const searchInput = document.getElementById('search-fild').value;
    const url = ` https://api.lyrics.ovh/suggest/${searchInput}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showSong(data))
}

const showSong = song => {

}