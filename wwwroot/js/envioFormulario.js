$(document).ready(function () {
  $("#btnAtualizarResposta").click(async function () {
    const campoPergunta = $("#CampoPergunta");
    const campoMetodo = $("#campoMetodo");
    const inputArquivo = $("#Arquivotxt")[0];

    let pergunta = campoPergunta.val();
    const metodo = campoMetodo.val();
    const arquivoTxt = inputArquivo.files[0];

    // Se tiver arquivo, substitui a pergunta com o conteúdo dele
    if (arquivoTxt) {
      try {
        pergunta = await lerArquivoComoTexto(arquivoTxt);
      } catch (erro) {
        console.error("Erro ao ler o arquivo:", erro);
        alert("Não foi possível ler o arquivo.");
        return;
      }
    }

    // Envia os dados via AJAX
    $.ajax({
      url: "/?handler=Pergunta",
      type: "POST",
      data: { pergunta: pergunta, modoPergunta: metodo },
      success: function (data) {
        $("#CampoResposta").html(data);
      },
      error: function () {
        alert("Ocorreu um erro ao obter a resposta.");
      },
    });
  });
});

//Função para ler o arquivo como texto
function lerArquivoComoTexto(arquivo) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(arquivo);
  });
}
