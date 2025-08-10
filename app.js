//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array global para armazenar os nomes dos amigos.
let amigos = [];

/**
 * Adiciona um amigo à lista.
 * Esta função é chamada pelo botão "Adicionar".
 */
function adicionarAmigo() {
    // Seleciona os elementos do HTML com os quais vamos trabalhar.
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim(); // Pega o valor e remove espaços extras.

    // Valida se um nome foi realmente digitado.
    if (nome === '') {
        alert('Por favor, digite o nome do amigo.');
        return; // Interrompe a função.
    }

    // Valida se o nome já existe na lista (evita duplicados).
    if (amigos.includes(nome)) {
        alert('Nome já adicionado! Por favor, digite um nome diferente.');
        nomeInput.value = ''; // Limpa o campo para o usuário.
        return;
    }

    // Adiciona o nome ao nosso array 'amigos'.
    amigos.push(nome);

    // Atualiza a lista de nomes na tela.
    atualizarLista();

    // Limpa o campo de input e coloca o foco nele para a próxima digitação.
    nomeInput.value = '';
    nomeInput.focus();
}

/**
 * Realiza o sorteio de um único amigo da lista.
 * Esta função é chamada pelo botão "Sortear amigo".
 */
function sortearAmigo() {
    // Seleciona o elemento que exibirá o resultado.
    const resultado = document.getElementById('resultado');

    // Valida se há amigos suficientes para o sorteio.
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para poder sortear!');
        return;
    }

    // Sorteia um índice aleatório do array.
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Pega o nome no índice sorteado.
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela, dentro da lista `<ul>` com id "resultado".
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

/**
 * Função auxiliar para atualizar a lista de amigos na tela.
 */
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os nomes novamente.

    // Para cada nome no array 'amigos', cria um item `<li>` e o adiciona na lista.
    for (let nome of amigos) {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    }
}
