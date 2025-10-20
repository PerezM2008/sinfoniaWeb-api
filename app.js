'use strick'



async function buscarTituloMusica (nome) {
    const nomeCodificado = encodeURIComponent(nome.trim());

    const URL = `https://musicbrainz.org/ws/2/artist/?query=${nomeCodificado}&fmt=JSON`;

    const response = await fetch(URL);

    const data = await response.json();
    return data.artist || [];
    
}

async function buscarArtista() {
    const inputArtist = document.getElementById('buscar-artista');
    const namePesquisado = inputArtist.value;
    const listArtist = document.getElementById('lista')
}

buscarTituloMusica("Madonna");