# Pergunte ao Llama - Sistema de perguntas ao modelo de IA OLLAMA 

## Sobre
O projeto foi desenvolvido durante o 5° semestre do curso de Analise e Desenvolvimento de Sistemas, dentro da disciplina de Tópicos Especiais.

O sistema "Pergunte ao Llama" atua como uma aplicação web, disponibilizando uma interface de interação através de texto que permite ao usuário fazer perguntas e obter respostas do Ollama, especificamente o llama3. 

## Tecnologias
- C#
- ASP.NET Core Razor Pages.
- Ollama (especificamente o llama3)
- JavaScript + AJAX
- Bootstrap

## Funcionalidades
- Pergunta tradicional: O usuário faz uma pergunta e obtem uma resposta sem limitações ou regras aplicadas.
- Explicar termo: A resposta é dada de maneira a explicar o termo de forma conceitual, limitando a resposta em no máximo 100 palavras.
- Analise de Sentimento: O llama analisa a frase e responde de forma clara e objetiva se ela é positiva, negatina ou neutra.
- Resumir Conteúdo: O arquivo .Txt anezado e enviado é interpretado e seu conteúdo é retornado de forma resumida na resposta.
- Ouvir resposta: Toda resposta obtida pode ser ouvida através da função de aúdio.

## Capturas de tela 

### Página Inicial da Aplicação
Visual minimalista e intuitívo.

![Tela Inicial](/docs/images/Pagina-Inicial.png)

### Demonstração 
Utilização da funcionalidade "Explique o Termo"

![Explique o Termo](docs/images/Sistema-Rodando.gif)

## Pré-Requisitos
- [.NET SDK 8.0 ou superior](https://dotnet.microsoft.com/en-us/download)
- [Visual Studio 2022 ou superior](https://visualstudio.microsoft.com/)
- Git (para clonar o repositório)
- [Ollama 0.6.8 ou superior](https://ollama.com/)

## Como executar o projeto

1 - Clonar o repositório

``` bash
git clone https://github.com/telesgabriel36/Projeto-Integra-o-Ollama.git
```

2 - Acessar o diretório do projeto

``` bash
cd Projeto-Integra-o-Ollama
```

3 - Restaurar pacotes

``` bash
dotnet restore
```

4 - Executar projeto

```
dotnet run
```

# Autor

*Gabriel Vieira Teles*

https://www.linkedin.com/in/gabriel-vieira-teles-8755142a0/
