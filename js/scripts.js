function exe0(){
    let nota //guarda as notas
    let conta = 1 //conta de 1 a 6
    let soma = 0
    while(conta <= 6) {
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ //conta = conta + 1

    }
    let media = soma / 6
    // mostra o resultado
    alert(`A média das notas é ${media.toFixed(1)}`)

}

function pesquisaSatisfacao() {
    let conta = 1 //varia de 1 a 10
    let nota = 0 //vai ser informada pelo usuario
    let contaSatisfeitos = 0 //inicialmente, nenhum satisfeito
    let contaInsatisfeitos = 0 //inicialmente, nenhum insatisfeito
    let soma = 0 // inicialmente, soma é 0
    while(conta <= 10) {
        nota = Number(prompt(`Informe a nota(0 a 10) do participante ${conta}`))
        if(nota >= 8 && nota <= 10) {
            contaSatisfeitos++ //contaSatisfeitos = contaSatisfeitos + 1
        }
        else if(nota >=0 && nota < 5) {
            contaInsatisfeitos++ //contaInsatisfeitos = contaInsatisfeitos + 1 
        }
        else if (nota < 0 || nota > 10) { // || é OU
            alert(`Nota Inválida`)
            continue // volta para o inicio, sem incrementar conta
        }
        soma = soma + nota // soma = soma + nota
        conta++ //conta = conta + 1
    } 
    alert(`Satisfeitos ${contaSatisfeitos} \n
           Insatisfeitos ${contaInsatisfeitos} \n
           Média das notas ${(soma/10).toFixed(2)}`)
    
}