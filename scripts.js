// Seleciona os elementos do DOM
const form = document.querySelector("form");
const input = document.getElementById("name");
const ul = document.getElementById("ul");
const templateItem = document.querySelector(".item");
const alertDiv = document.querySelector(".alert");

// Adiciona um evento ao formulário para capturar o clique no botão de adicionar
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o envio do formulário e recarregamento da página

  // Obtém o valor digitado no input
  const inputValue = input.value.trim();

  // Verifica se o input não está vazio
  if (inputValue !== "") {
    // Clona o item template
    const novoItem = templateItem.cloneNode(true);

    // Altera o conteúdo do span no novo item
    const conteudo = novoItem.querySelector("span");
    conteudo.textContent = inputValue;

    // Adiciona o novo item à lista
    ul.appendChild(novoItem);

    // Limpa o campo de input após adicionar o item
    input.value = "";
  } else {
    alert("Por favor, insira um item válido!");
  }
});

// Adiciona um evento de clique na lista para delegar a funcionalidade de exclusão
ul.addEventListener("click", function (event) {
  // Verifica se o clique foi no botão de lixo ou dentro dele
  if (event.target.tagName === "IMG" || event.target.tagName === "BUTTON") {
    // Encontra o <li> correspondente ao botão de lixo clicado
    const item = event.target.closest("li");

    // Remove o <li> da lista
    if (item) {
      item.remove();

      // Mostra o alerta ao excluir o item
      mostrarAlerta();
    }
  }
});

// Função para mostrar o alerta por 2 segundos
function mostrarAlerta() {
  // Adiciona a classe para tornar o alerta visível
  alertDiv.classList.add("visible");

  // Remove a classe após 2 segundos
  setTimeout(() => {
    alertDiv.classList.remove("visible");
  }, 2000);
}

// Seleciona o botão de fechar dentro do alerta
const closeAlertButton = alertDiv.querySelector("svg.close");

// Adiciona um evento de clique ao botão de fechar
closeAlertButton.addEventListener("click", function () {
  // Remove a classe 'visible' para esconder o alerta instantaneamente
  alertDiv.classList.remove("visible");
});