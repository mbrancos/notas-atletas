# Projeto de Certificação 1 - Pontuação dos Atletas

Bem-vindo!
Através do Programa Floria Mais Tec 2023, após participar da Trilha Dev, fui contemplado com a gratuidade do curso DEVStart do Senai/SC.
(https://devstart.tech)
O Floripa Mais Tec é uma iniciativa da Prefeitura de Florianópolis, em parceria com SENAI/SC, SEBRAE e ACATE, que visa democratizar o acesso ao ensino tecnológico para todos, oferecendo cursos de Tecnologia gratuitos!
(https://floripamaistec.pmf.sc.gov.br/)

O presente código trata-se do primeiro de dois projetos de certificação da Trilha 1 - Lógica de Programação do curso DEVstart.
Neste projeto, precisamos criar uma aplicação em JavaScript para calcular a média de notas de atletas em uma competição de ginástica artística.

## Especificações

Você deve criar uma função que recebe uma matriz de objetos contendo o nome do atleta e suas cinco notas.
A função calculará a média das notas, excluindo a maior e a menor nota do atleta. Em seguida, apresentará ao usuário o nome de cada atleta, suas notas e a média calculada.

### Exemplo de Entrada

```javascript
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 // ... outros atletas ...
];
```

### Exemplo de Saída

```
Atleta: Cesar Abascal
Notas Obtidas: 10, 10, 7.88, 8.42, 9.34
Média Válida: 8.766666666666666
```

## Implementação

Utilize as dicas fornecidas no enunciado do projeto para guiar sua implementação. Você pode explorar o uso de loops, ordenação de arrays e métodos como `.slice()` e `.forEach()`.

## Como Executar

1. Clone este repositório em sua máquina local.
   ```bash
   git clone https://github.com/mbrancos/notas-atletas.git
   ```

2. Navegue até o diretório do projeto.
   ```bash
   cd notas-atletas
   ```

3. Execute o arquivo JavaScript.
   ```bash
   node notas-atletas.js
   ```

## Contribuição

Se desejar contribuir com melhorias, sinta-se à vontade para abrir um pull request. Suas contribuições são bem-vindas!

## Licença

Este projeto é distribuído sob a [Licença MIT](LICENSE).

