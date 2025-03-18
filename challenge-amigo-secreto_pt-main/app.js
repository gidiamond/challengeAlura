let amigos = [];

function adicionarAmigo() {
    // Captura o valor inserido no campo de texto
    let nome = document.getElementById("amigo").value;

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        // Adiciona o nome ao array 'amigos'
        amigos.push(nome);

        // Exibe o array no console para depuração (opcional)
        console.log(amigos);

        // Limpa o campo de texto após adicionar o nome
        document.getElementById("amigo").value = "";

        // Atualiza a lista de amigos na tela
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    // Obtém o elemento da lista no HTML
    let listaElement = document.getElementById("listaAmigos");

    // Limpa a lista para evitar duplicação
    listaElement.innerHTML = "";

    // Adiciona cada amigo à lista HTML
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
    } else {
        // Gera um índice aleatório
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Seleciona o amigo sorteado
        let amigoSorteado = amigos[indiceAleatorio];

        // Exibe o amigo sorteado na tela
        let resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = "Amigo sorteado: " + amigoSorteado;
    }
}

