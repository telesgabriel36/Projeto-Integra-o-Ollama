using Projeto_Integracao_Ollama.Api;
using Projeto_Integracao_Ollama.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

// Adicionando o serviço de obtenção de regras de prompt
builder.Services.AddScoped<IRegraPromptService, RegraPromptService>();

// Adicionando o serviço de chamada à API do Llama
builder.Services.AddScoped<IApiLlama, ApiLlama>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
