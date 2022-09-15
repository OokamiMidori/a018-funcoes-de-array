const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
function caixaAlta(parametro) {
    let variavel = {...parametro}
    variavel.nome = parametro.nome.toUpperCase()
    variavel.profissao = parametro.profissao.toUpperCase()
    variavel.username = parametro.username.toUpperCase()
    variavel.senha = parametro.senha.toUpperCase()
    return variavel
}
console.log(caixaAlta(objeto))
//parte 2
function textoCorrido(parametro){
    return `${parametro.nome} ${parametro.profissao} ${parametro.username} ${parametro.senha}`
}
console.log(textoCorrido(objeto))

//parte 3
function terceiraFuncao (params, funcao) {
    let resolucao = funcao(params)
    return resolucao
}
console.log (terceiraFuncao(objeto,caixaAlta))
console.log(terceiraFuncao(objeto,textoCorrido))