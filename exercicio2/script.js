const arrayNumeros = [1,2,3,4,5,6,7,8]

const arrayMultiplicado = arrayNumeros.map((numero) => {
       return numero* 3
})
let triplos = arrayMultiplicado
 const arrayDividido = arrayNumeros.map((numero) => {
    return numero/2
 })
 let metade = arrayDividido
 console.log(`Essas são as metades do array${metade} \nEsses são os triplos do array ${triplos}`)