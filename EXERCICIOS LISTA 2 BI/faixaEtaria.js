function exe3() {
    let conta = 1, idade
    let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0
    let total = 0
    
    while(conta <= 8) {
    if   (idade = Number(prompt(`Informe a idade da pessoa ${conta}`))){
        f1++;
    }
    else if(idade >= 16 && idade <= 30){
        f2++;
    }
    else if(idade >= 31 && idade <= 45){
        f3++;
    }
    else if(idade >= 46 && idade <= 60){
        f4++;
    }
    else if(idade >= 61 && idade < 130){
        f5++;
    }
    else{
        alert(`Idade Inválida`)
        continue
    }    
    conta++
    total++ 
    }
    alert(`F1 ${f1} F2  ${f2} F3 ${f3} F4 ${f4} F5 ${f5}`)
    }
    f1 = (f1 / total) * 100
    f5(f5 / total) * 100

    alert(
        `A primeira faixa etaria (até 15 anos): ${f1}%\n` +
        `A segunda faixa etaria (16 á 30 anos): ${f2}%\n` +
        `A terceira faixa etaria (31 até 45 anos): ${f3}%\n` +
        `A quarta faixa etaria (46 á 60 anos): ${f4}%\n` +
        `A quinta faixa etaria (acima de 60 anos): ${f5}%\n` 

    )

