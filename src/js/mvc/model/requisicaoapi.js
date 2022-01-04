async function  apiFilme(filme){
    const chave = "284df65c"
    let url =  `https://www.omdbapi.com/?apikey=${chave}&t=${filme}`
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
   
}