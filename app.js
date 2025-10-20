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
    const nomePesquisado = inputArtist.value;
    const listArtist = document.getElementById('lista');

    if(!nomePesquisado){
        listArtist = '<p style="color: red;">Por favor, digite um nome de artista.</p>'
        return;
    }

    const artistas = await buscarTituloMusica(nomePesquisado)

    exibirResultadoArtista(artistas, cardElement);
}

buscarTituloMusica("Madonna");