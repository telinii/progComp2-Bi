function indAMB() {

    //cria os vetores e adiciona os valores

    let regions = []
    let dias = []
    let valor
    let tamanho = 5

    for(let i=0;i<5;i++) {
        regions.push(prompt(`Informe o nome da região ${i+1}`))
    }
    for(let i=0;i<5;i++) {
        dias.push(prompt(`Informe o dia ${i+1}`))
    }

    //cria a matriz e adiciona os niveis de poluição
    let poluicao = []
    for(let i=0;i<5;i++) {
        poluicao[i] = []//cria vetor dentro do vetor
        for(let j=0;j<5;j++) {
            do {
                poluicao[i][j] = parseInt(prompt(`Informe poluição da regiao ${regions[i]}no dia ${dias[i]}`))
            }
            while (valor < 0 || valor > 500) // validação
            poluicao[i][j] = valor // só salva quando for válido

        }

            //diag principal quando ( i == j)
    let diagPrincipal = []
    let somaPrincipal = 0
    for (let i = 0; i < tamanho; i++) {
        diagPrincipal.push(matriz[i][i])
        somaPrincipal += matriz[i][i]
    }
    console.log("Diagonal principal:", diagPrincipal)
    console.log("Média diagonal principal:", (somaPrincipal / tamanho).toFixed(2))


    // 3) Diagonal secundária (quando i + j == tamanho - 1)
    let diagSecundaria = []
    let somaSecundaria = 0
    for (let i = 0; i < tamanho; i++) {
    diagSecundaria.push(matriz[i][tamanho - 1 - i])
    somaSecundaria += matriz[i][tamanho - 1 - i]
}
    console.log("Diagonal secundária:", diagSecundaria)
    console.log("Média diagonal secundária:", (somaSecundaria / tamanho).toFixed(2))


    // 4) Maior valor e posição (linha/região e coluna/dia)
    let maior = -1
    let regiaoMaior = -1
    let diaMaior = -1
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j]
                regiaoMaior = i
                diaMaior = j
        }
    }
}
    console.log(`Maior índice de poluição: ${maior} (Região ${regiaoMaior+1}, Dia ${diaMaior+1})`)   
      
    // 5) Contar quantas vezes o índice foi superior a 300
    let contCritico = 0
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            if (matriz[i][j] > 300) {
                contCritico++
        }
    }
}
    console.log("Quantidade de vezes acima de 300 (nível crítico):", contCritico)


    // 6) Região com menor média (linha com menor média)
    let menorMedia = Infinity
    let regiaoMenor = -1
    for (let i = 0; i < tamanho; i++) {
        let somaLinha = 0
        for (let j = 0; j < tamanho; j++) {
            somaLinha += matriz[i][j]
    }
        let mediaLinha = somaLinha / tamanho
            if (mediaLinha < menorMedia) {
                menorMedia = mediaLinha
                regiaoMenor = i
    }
}
        console.log(`Região com menor média de poluição: Região ${regiaoMenor+1} (Média = ${menorMedia.toFixed(2)})`)



    }

}


    


    
