//Eita que minha ansiedade quase me mata, kkk mas deu certo Rangel
//Isaías Levi Tavares da Silva
//37023010
function fazerPedido() {
    // Primeiro, vou pegar o nome do cliente e verificar se ele preencheu.
    let nome = document.querySelector(".input-text input").value.trim();
    if (!nome) {
        alert("Ei! Por favor, preencha o nome antes de fazer o pedido.");
        return; // Se o nome não estiver preenchido, paro por aqui.
    }

    // Agora, vou verificar se o cliente escolheu o tamanho da pizza.
    let tamanhoSelecionado = document.querySelector("input[name='tamanho']:checked");
    if (!tamanhoSelecionado) {
        alert("Por favor, escolha o tamanho da pizza!");
        return; // Se o tamanho não foi selecionado, também paro por aqui.
    }

    // Aqui, vou definir os preços das pizzas com base no tamanho escolhido.
    const precos = { "Pequena": 25, "Média": 35, "Grande": 50 };
    let precoTamanho = precos[tamanhoSelecionado.value]; // Pego o preço correto com base no tamanho.

    // Agora, conto os adicionais que o cliente escolheu e calculo o preço deles.
    let adicionaisSelecionados = document.querySelectorAll("input[name='adicionais']:checked");
    let precoAdicionais = adicionaisSelecionados.length * 5; // Cada adicional custa R$ 5,00.

    // Para calcular o total, somo o preço do tamanho da pizza com o preço dos adicionais.
    let valorTotal = precoTamanho + precoAdicionais;

    // Atualizo o valor total na página para que o cliente veja.
    document.querySelector("#total h2 strong").textContent = valorTotal.toFixed(2).replace('.', ',');

    // Por fim, registro no console um resumo do pedido para acompanhar.
    console.log(`Cliente: ${nome}`);
    console.log(`Tamanho: ${tamanhoSelecionado.value} (R$ ${precoTamanho.toFixed(2).replace('.', ',')})`);
    console.log(`Adicionais: ${adicionaisSelecionados.length} (R$ ${precoAdicionais.toFixed(2).replace('.', ',')})`);
    console.log(`Valor Total: R$ ${valorTotal.toFixed(2).replace('.', ',')}`);
}

