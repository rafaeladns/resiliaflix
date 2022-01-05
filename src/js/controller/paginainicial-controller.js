async function apiFilme(id) {
    const result = await requisicaoFilmeTitulo(id)
    resultadoApi(result)
    
} 

async function requisicaoFilmeTitulo(id){
    const url = `https://www.omdbapi.com/?apikey=c6027214&i=${id}`
    let apiResponse = await fetch(url).then(response => response.json());
    console.log(apiResponse)
    return apiResponse

}

$('#botaoPesquisar').on('click', async function(filme){
    filme = document.getElementById('input-pesquisa').value
    let url =  `https://www.omdbapi.com/?apikey=284df65c&t=${filme}`
    let apiResposta = await fetch(url).then(response => response.json());
   console.log(apiResposta)
   try{
       if(apiResposta.Title !== undefined){
        resultadoApi(apiResposta)
       } else {
           throw new Error ('Filme não encontrado. Tente novamente.')
       }
    }catch(error){
        apiErro(error)
   }
})