interface idPessoal{
    nome:string;
    sobrenome: string;
    idade: number;
    estadoCivil: string;
    ativo?: boolean;
}

let hobbiesPessoal: string[] = [
    "realizar trade na Web3",
    "assistir ao Corinthians",
    "cozinhar",
    "viajar",
    "estudar programação"
];

interface enderecoPessoal{
    endereco: string;
    número: number;
    complemento?: string | number;
    bairro: string | number;
    cidade: string;
    estado: string;
}


let idPessoal = {
    nome: "Daniel",
    sobrenome: "Moura",
    idade: 44,
    estadoCivil: "casado",
    ativo: true
};

let enderecoPessoal = {
    endereco: 'Rua dos Cravos',
    número: 78,
    complemento: 'Apto. 201',
    bairro: '15 de Novembro',
    cidade:'Cachoeiro de Itapemirim',
    estado: 'ES'
};



console.log(`O usuário ${idPessoal.nome} ${idPessoal.sobrenome},estado civil: ${idPessoal.estadoCivil}, tem ${idPessoal.idade} anos de idade. `);
console.log(`Seu principal hobbie é ${hobbiesPessoal[0]} e seu segundo maior hobbie é ${hobbiesPessoal[4]}.`)
console.log(`As demais atividades das quais gosta são: ${hobbiesPessoal[1]}, ${hobbiesPessoal[2]} e ${hobbiesPessoal[3]}.`)
console.log(`Seu endereço é: ${enderecoPessoal.endereco}, nº ${enderecoPessoal.número}, ${enderecoPessoal.complemento}, Bairro: ${enderecoPessoal.bairro}, Cidade: ${enderecoPessoal.cidade}-${enderecoPessoal.estado}.`)
