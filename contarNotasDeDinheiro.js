function contarNotasDeDinheiro(dinheiro){
    let resto = 0
    
    let notasDeCem = Math.floor(dinheiro / 100)
    resto = dinheiro % 100
        
    let notasDeCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    
    let notasDeDez = Math.floor(resto / 10)
    resto = resto % 10
    
    let notasDeCinco = Math.floor(resto / 5)
    resto = resto % 5
    
    let notasDeUm = resto

    const listaQuantidadeDeNotas = [
        {quantidade: notasDeCem, valor: 100},
        {quantidade: notasDeCinquenta, valor: 50},
        {quantidade: notasDeDez, valor: 10},
        {quantidade: notasDeCinco, valor: 5},
        {quantidade: notasDeUm, valor: 1}
    ]
    
    const mensagem = []

    for(let quantidadeValor of listaQuantidadeDeNotas){
        let {quantidade, valor} = quantidadeValor
        if(quantidade > 0){
            mensagem.push(`${quantidade} nota(s) de R$ ${valor}`)
        }
    }
    
    console.log(mensagem.join("\n"))
}

contarNotasDeDinheiro(1578)