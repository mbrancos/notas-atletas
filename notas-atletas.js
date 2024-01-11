// Dados dos atletas informado no projeto
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Criando uma classe Atletas para poder reaproveitar o código no futuro no próximo campeonato, talvez.
class Atleta {
    constructor(nome, notas) {
        this.nomeCompleto = nome;
        this.notas = notas;
    }

    ordenarNotas() {
      // Ordena as notas
        this.notas.sort(function(a, b) {
            return a - b;
        });
    }

    eliminarExtremos() {
        // Elimina a primeira e a última nota
        this.notas = this.notas.slice(1, -1);
    }

    calcularMedia() {
      // Chama as funções anteriores 
        this.ordenarNotas();
        this.eliminarExtremos();

        // Calcula a média
        let soma = this.notas.reduce(function(acumulador, nota) {
            return acumulador + nota;
        }, 0);

        return soma / this.notas.length;
    }

    exibirInformacoes() {
        // Ordena as notas antes de exibi-las
        let notasOrdenadas = [...this.notas];
        notasOrdenadas.sort(function(a, b) {
            return a - b;
        });
        // A ordenação acima, ao invés de exibir as notas embaralhadas, facilita uma "auditoria" da médias

        console.log(`Atleta: ${this.nomeCompleto}`);
        console.log(`Notas Obtidas: ${notasOrdenadas}`);
        console.log(`Média Válida: ${this.calcularMedia()}\n`);
    }
}

// Importando os dados dos atletas na classe para depois exibir o resultado de saída
let atletasDados = atletas.map(function(dados) {
    return new Atleta(dados.nome, dados.notas);
});

atletasDados.forEach(function(atleta) {
    atleta.exibirInformacoes();
});