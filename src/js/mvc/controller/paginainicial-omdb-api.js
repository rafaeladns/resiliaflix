//Vai controlar o input e chamar a API quando o filme for digitado//
// let botao = document.getElementById('botaoPesquisar')
// botao.addEventListener('click' ,()=>{
//    let filme = $('input-pesquisa').val();
    
//     apiFilme(filme)
  
// })

function apiFilme(nomeFilme){
    if(nomeFilme ){
        const url = `https://www.omdbapi.com/?apikey=284df65c&t=${nomeFilme}`
        const options = {
            method: 'GET'
        }
    }
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