$(document).ready(function () {
  $("#btnAtualizarResposta").click(function () {
    var pergunta = $("#CampoPergunta").val();
    var metodo = $("#campoMetodo").val();
    var arquivoTxt = $("#Arquivotxt").prop("files")[0];

    //Verifica se o usuário inseriu um arquivo txt (Não está funcionando por ser assincrona)
    if (arquivoTxt) {
      var reader = new fileReader();
      reader.onload = function (e) {
        pergunta = e.target.result; // Lê o conteúdo do arquivo como a pergunta
      };
      reader.readAsText(arquivoTxt);
    }

    $.ajax({
      url: "/?handler=Pergunta", //Aponta o handler específico de acordo com a escolha no dropdown
      type: "POST", //Nunca mais esquecer que deve ser em caixa alta!!
      data: { pergunta: pergunta, modoPergunta: metodo }, // Envia a pergunta como dados para o handler buscar a resposta com a api
      success: function (data) {
        $("#CampoResposta").html(data); // Atualiza o conteúdo do container "Campo resposta na page cshtml"
      },
    });
  });
});
