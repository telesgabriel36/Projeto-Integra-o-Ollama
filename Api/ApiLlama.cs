namespace Projeto_Integracao_Ollama.Api;

using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Projeto_Integracao_Ollama.Services;

public class ApiLlama : IApiLlama
{
    public async Task<string> RetornoIA(string pergunta)
    {
        var httpClientHandler = new HttpClientHandler();
        var httpClient = new HttpClient(httpClientHandler)
        {
            Timeout = Timeout.InfiniteTimeSpan
        };
        string resposta = "";

        var requestBody = new
        {
            model = "llama3",
            messages = new[]
            {
                new { role = "user", content = pergunta }
            },
            stream = false
        };

        var json = JsonSerializer.Serialize(requestBody);

        var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:11434/api/chat")
        {
            Content = new StringContent(json, Encoding.UTF8, "application/json")
        };

        var response = await httpClient.SendAsync(request);

        if (!response.IsSuccessStatusCode)
        {
            resposta = "Desculpe, não consegui responder agora.";
            Console.WriteLine(resposta);
            return resposta;
        }

        using var contentStream = await response.Content.ReadAsStreamAsync();
        using var doc = await JsonDocument.ParseAsync(contentStream);

        var result = doc.RootElement
            .GetProperty("message")
            .GetProperty("content")
            .GetString();

        resposta = result?.Trim() ?? "Resposta vazia.";

        return resposta;
    }


}