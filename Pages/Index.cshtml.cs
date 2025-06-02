using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Projeto_Integracao_Ollama.Api;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Projeto_Integracao_Ollama.Services;
namespace Projeto_Integracao_Ollama.Pages;


[IgnoreAntiforgeryToken]//Apenas para teste.
public class IndexModel : PageModel
{
    public string respostaIA = ""; //Variável que armazena a resposta da IA

    private readonly ILogger<IndexModel> _logger;

    private readonly IRegraPromptService _regraPromptService;

    private readonly IApiLlama _apiLlama;

    public IndexModel(ILogger<IndexModel> logger, IRegraPromptService regraPromptService, IApiLlama apiLlama)
    {
        _logger = logger;
        _regraPromptService = regraPromptService;
        _apiLlama = apiLlama;
    }

    public void OnGet()
    {

    }

    public async Task<IActionResult> OnPostPergunta(string pergunta, string modoPergunta)
    {
        pergunta += _regraPromptService.ObterRegra(modoPergunta);

        respostaIA = await _apiLlama.RetornoIA(pergunta); // Obtendo e armazenando a resposta da IA  

        return new PartialViewResult // Retorna a PartialView com a resposta da IA, após o processamento da pergunta
        {
            ViewName = "_ParcialViewResposta",
            ViewData = new ViewDataDictionary<string>(ViewData, respostaIA)
        };
    }
}
