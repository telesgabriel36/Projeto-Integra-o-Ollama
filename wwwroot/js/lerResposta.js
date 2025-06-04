const synth = window.speechSynthesis;

$(document).ready(function () {
  // Espera o evento 'voiceschanged' para garantir que as vozes foram carregadas
  synth.onvoiceschanged = function () {
    const vozes = synth.getVoices();

    $("#btnOuvirResposta").click(function () {
      const CampoResposta = $("#CampoResposta");
      const resposta = CampoResposta.text().trim();

      console.log("Resposta a ser falada:", resposta);

      let mensagem = new SpeechSynthesisUtterance();
      mensagem.lang = "pt-BR"; // Define o idioma
      mensagem.voice = vozes[0];
      mensagem.rate = 2; //Velocidade da voz
      mensagem.pitch = 2; // Define o tom da voz
      mensagem.text = resposta; // Define o texto a ser falado
      synth.speak(mensagem); // Inicia a fala
    });
  };
});
