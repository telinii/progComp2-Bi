let placasNvidia = [
    {
    modelo: "RTX 3060-12GB",
    marca: "biostar",
    ram: "12GB",
    velocidadeMemoria: "15Gbps",
    raytracing: "SIM",
    boostclock: 1777,
    configMemo: "GDDR6",
    intMemoria: "192bit",
    larguraDeBanda: "360GB/s",
    cores: "3584"
    
},
{
    modelo: "RTX 4060-8GB",
    marca: "biostar",
    ram: "8GB",
    velocidadeMemoria: "17Gbps",
    raytracing: "SIM",
    boostclock: 2535,
    configMemo: "GDDR6",
    intMemoria: "128 bits",
    larguraDeBanda: "272GB/s",
    cores: "3072"
},
{
    modelo: "RTX 5060-8GB",
    marca: "biostar",
    ram: "8GB",
    velocidadeMemoria: "28Gbps",
    raytracing: "SIM",
    boostclock: 2497,
    configMemo: "GDDR7",
    intMemoria: "128 bits",
    larguraDeBanda: "448GB/s",
    cores: "3072"
}
]

    for(let i = 0; i < placasNvidia.length; i++) {
    console.log(placasNvidia[i].modelo)
    }

    for(let i =0; i < placasNvidia.length; i++) {
        if(placasNvidia[i].boostclock < 2000) {
            console.log(placasNvidia[i].boostclock)
        }
    }

    //especificações das placas (boostclock < 2000 = mostrar)

let melhoresMarcasDeCarro = [
{
    marca: "Toyota",
    modelosConhecidos: "Corolla e Hillux"
},
{
    marca: "Honda",
    modelosConhecidos: "HR-V e Civic"
},
{
    marca: "Chevrolet",
    modelosConhecidos: "Onix e Tracker"
},
{
    marca: "Volkswagem",
    modelosConhecidos: "Golf e Polo"
}


]
    for( let i = 0; i < melhoresMarcasDeCarro.length; i++) {
    console.log(melhoresMarcasDeCarro[i].marca)
    }



    
    
    
    
    
    
    
    
    
    
    
    
    
    console.log(placasNvidia[i].marca)
    console.log(placasNvidia[i].ram)
    console.log(placasNvidia[i].velocidadeMemoria)
    console.log(placasNvidia[i].raytracing)
    console.log(placasNvidia[i].boostclock)
    console.log(placasNvidia[i].configMemo)
    console.log(placasNvidia[i].intMemoria)
    console.log(placasNvidia[i].larguraDeBanda)
    console.log(placasNvidia[i].cores)

    