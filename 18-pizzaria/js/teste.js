function fazerPedido(){

    //Se o nome estiver vazio, mostrar uma alerta()
    //Se não for vazio, faça o restante do script

    //Selecionar o tamanho das pizzas,
    //Se selecionado for igual a Pequeno, valor é 25
    //Se selecionado for igual Médio, valor é 35
    //Se selecionado for igual Grande, valor é 50
    let selecionado = document.querySelector("input[name='tamanho']:checked");
    console.log('Tamanho:' + selecionado.value);

    //Pegar a quantidade de elementos selecionado em selecionados.length
    //multiplicar por 5
    let selecionados = document.querySelectorAll("input[name='adicionais']:checked");
    console.log('Quantidade: ' + selecionados.length)
    //o valor do cálculo será inserito igual a linha 21, no lugar de 54, será
    //o valor final da sona
    let valorTotal = document.querySelector("#total h2 strong")
    console.log('Valor total: ' + valorTotal.textContent)
    valorTotal.textContent = 54;
    console.log('Valor total alterado: ' + valorTotal.textContent)
}