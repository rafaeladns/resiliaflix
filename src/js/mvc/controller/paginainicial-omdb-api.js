//Vai controlar o input e chamar a API quando o filme for digitado//
let filme = ''

let botao = document.getElementById('botaoPesquisar')
botao.addEventListener('click' ,()=>{
    filme = $('input-pesquisa').val();
    
    apiFilme(filme)
  
})