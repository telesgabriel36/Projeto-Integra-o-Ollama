namespace Projeto_Integracao_Ollama.Api;

public interface IApiLlama
{
    Task<string> RetornoIA(string pergunta);
}