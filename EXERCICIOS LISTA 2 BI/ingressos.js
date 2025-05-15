function exe5() {
    let preco
    let quantidade
    const despesa = 200
    let lucro
    let aux = "" //exibe tudo em um alert, sem precisar de vários


    preco = 5 //inicia com 5
    quantidade = 120 //inicia com 120
    let quantMaior = 0
    let maiorLucro = 0
    let precoMaior = 0

    while(preco >= 1) {
        if(lucro > maiorLucro){
            maiorLucro = lucro
            precoMaior = preco
            quantMaior = quantidade
        }
        lucro = preco * quantidade - despesa //lucro






        aux = aux +"\n" + (`Preço: ${preco} - Quantidade: ${quantidade} - Despesa ${despesa} - lucro: ${lucro} `
            
            
        )
        
        preco = preco - 0.5 //tirando 0.5, assim, alterando as variaveis
        quantidade = quantidade + 26 //crecendo quantidade
    }
    alert(aux)
    alert(`Maior Lucro ${maiorLucro} com preço ${precoMaior} e quantidade ${quantMaior}`)
   

}