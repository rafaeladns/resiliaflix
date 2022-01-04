
function resultadoApi(apiResposta){
    $('.list-content').css('display', 'none')
    $('#infoFilme').css('display', 'flex')
    $('#tituloFilme').html(`${apiResposta.Title}`)
    $('#diretor').html(`Diretor: ${apiResposta.Director}`)
    $('#ano').html(`Ano: ${apiResposta.Year}`)
    $('#lancamento').html(`Lançamento: ${apiResposta.Release}`)
    $('#duracao').html(`Duração: ${apiResposta.Runtime}`)
    $('#historia').html(`Sinopse: ${apiResposta.Plot}`)
    $('#poster').html(`<img src="${apiResposta.Poster}">`)
}

function apiErro(error){
    $('.lista-filmes').css('display', 'none')
    $('#infoFilme').css('display', 'flex')
    $('#diretor').empty()
    $('#ano').empty()
    $('#lancamento').empty()
    $('#duracao').empty()
    $('#historia').empty()
    $('#poster').empty()
    $('#tituloFilme').html(`${error}`)
}