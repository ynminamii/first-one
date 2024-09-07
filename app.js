function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    if (campoPesquisa == "") {

        section.innerHTML = "<p>Informe o nome do produto no campo acima para pesquisar...</p>";
        return
    }
    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada item do array de dados
    for (let dado of dados) {
        console.log(dado.titulo.includes(campoPesquisa))
        if (dado.linhas.toLowerCase().includes(campoPesquisa) || dado.palavraChave.toLowerCase().includes(campoPesquisa) || dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa)) {
            // Cria uma string HTML para cada resultado, formatando as informações
            resultados += `<div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <h3>${dado.linhas}</h3>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais Detalhes</a>
      </div>`;

        }

    }

    if (!resultados) {
        resultados = "<p>Não encontramos resultados para a sua pesquisa.</p>";
      }

    // Atribui a string com os resultados ao conteúdo da seção HTML
    section.innerHTML = resultados;


}

// Obtém o elemento do campo de pesquisa
const campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona um ouvinte de eventos para a tecla Enter
campoPesquisa.addEventListener('keydown', (event) => {
    // Verifica se a tecla pressionada foi Enter (código 13)
    if (event.key === 'Enter') {
        pesquisar();
    }
});