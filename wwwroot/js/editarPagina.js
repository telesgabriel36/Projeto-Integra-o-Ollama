$(document).ready(function () {
  $("#Arquivotxt").change(function () {
    var arquivoTxt = $(this).prop("files")[0];
    var CampoPergunta = $("#CampoPergunta");
    var campoMetodo = $(
      "#campoMetodo option[value='Pergunta'], #campoMetodo option[value='ExplicarTermo'], #campoMetodo option[value='AnaliseSentimento']"
    );
    var opcaoResumo = $("#campoMetodo option[value='Resumo']");

    if (arquivoTxt) {
      CampoPergunta.prop("disabled", true); // Desabilita o campo de pergunta
      campoMetodo.prop("disabled", true); // Desabilita o campo de método
      opcaoResumo.prop("selected", true); // Joga automaticamente para a opção de resumo
    } else {
      CampoPergunta.prop("disabled", false); // Habilita o campo de pergunta
      campoMetodo.prop("disabled", false); // Habilita o campo de método
      $("#campoMetodo option:enabled").first().prop("selected", true);
    }
  });
});
