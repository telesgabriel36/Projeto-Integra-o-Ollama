$(document).ready(function () {
  $("#btnAtualizarResposta").click(function () {
    var pergunta = $("#CampoPergunta").val();
    var metodo = $("#campoMetodo").val();
    console.log(metodo);

    $.ajax({
      url: "/?handler=Pergunta", //Aponta o handler específico de acordo com a escolha no dropdown
      type: "POST", //Nunca mais esquecer que deve ser em caixa alta!!
      data: { pergunta: pergunta , modoPergunta: metodo }, // Envia a pergunta como dados para o handler buscar a resposta com a api
      success: function (data) {
        $("#CampoResposta").html(data); // Atualiza o conteúdo do container "Campo resposta na page cshtml"
      },
    });
  });
});
