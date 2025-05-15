function exe4(){
    let a, b, c, d //valores
    let conta = 1
    let aux //variavel auxiliar
    let grupo = 1 //repete o alert 5 vezes para cada grupo
    while(grupo <= 5) {

    a = Number(prompt(`Informe o valor de A`))
    b = Number(prompt(`Informe o valor de B`))
    c = Number(prompt(`Informe o valor de C`))
    d = Number(prompt(`Informe o valor de D`))

    while(conta <= 3) {
        if(a > b) {
            aux = a;
            a = b; 
            b = aux
        }
        if(b> c) {
            aux = b; 
            b = c; 
            c = aux
        }   
        if(c> d) {
            aux = c; 
            c = d; 
            d = aux
        }
        conta++
        }
        alert(`A ordem crescente${a} ${b} ${c} ${d}`)
        alert(`A ordem decrescente${d} ${c} ${b} ${a}`)
        grupo++
}
}