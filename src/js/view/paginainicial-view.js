
function resultadoApi(apiResposta){
    $('#slide-container').css('display', 'none')
    $('#main').css('display', 'none')
    $('#rodape').css('display', 'none')
    $('#section-info').css('display', 'flex')
    $('#tituloFilme').html(`${apiResposta.Title}`)
    $('#diretor').html(`Diretor: ${apiResposta.Director}`)
    $('#ano').html(`Ano: ${apiResposta.Year}`)
    $('#duracao').html(`Duração: ${apiResposta.Runtime}`)
    $('#historia').html(`Sinopse: ${apiResposta.Plot}`)
    $('#poster').attr('src', `${apiResposta.Poster}`)
}

function apiErro(error){
    $('#section-info').css('display', 'none')
    $('#infoFilme').css('display', 'flex')
    $('#diretor').empty()
    $('#ano').empty()
    $('#duracao').empty()
    $('#historia').empty()
    $('#poster').empty()
    $('#tituloFilme').html(`${error}`)
}