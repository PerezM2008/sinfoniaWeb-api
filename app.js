'use strict'



async function buscarArtistaMusica(nome) {
    const nomeCodificado = encodeURIComponent(nome.trim());
    const URL = `https://musicbrainz.org/ws/2/artist/?query=${nomeCodificado}&fmt=json`;
    const response = await fetch(URL); //Faz a requisição HTTP GET para a URL construída.
    
    const formatJson = await response.json()
    console.log(formatJson)
    
    return formatJson.artist;
}

async function buscarArtista() {
    const inputArtist = document.getElementById('buscar-artista').value.trim()
    const listaResultados = document.getElementById('catalogo')
    // console.log(inputArtist)

    const buscar = await buscarArtistaMusica(inputArtist)

    console.log(typeof buscar)

    if((buscar)){ //Array.isArray() => Serve para garantir que o "Buscar" deve ser um Array antes de chamar o ForEach
        buscar.forEach((item) => {

           // const nomeMusica = document.createElement('h1')

            const containerArtista = document.createElement('div')
            containerArtista.classList.add('lista');

            listaResultados.appendChild(containerArtista);


        });
    }

    // console.log(buscar)
    // const nomePesquisado = inputArtist.value;
    // const listArtist = document.createElement('lista');
    // listArtist.classList.add('lista')

    // if (nomePesquisado) {
    //     const artistas = await buscarTituloMusica(nomePesquisado)
    //     listArtist = artistas;
    //     return listArtist;

    // } else {
    //     listArtist = '<p style="color: red;">Por favor, digite um nome de artista.</p>'
    //     return;
    // }

}
