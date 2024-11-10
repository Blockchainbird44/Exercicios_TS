interface Produto{
    nomeProduto: string | number;
    codProduto?: number;
    classProduto?: string;
    precoProduto: number;
    disponivel: boolean;
}

const filtroProdDisponivel = (produtos:Produto[]):Produto[] => {
    return produtos.filter((produtos)=>produtos.disponivel);
};

const filtroClassProduto = (produtos:Produto[], classProduto: string): Produto[] => {
    return produtos.filter((produto) => produto.classProduto === classProduto);
};

const produtos: Produto[] = [
    {nomeProduto: 'Master Class python 2º Ed.', codProduto: 301001, classProduto: 'Programação', precoProduto: 250, disponivel: true},
    {nomeProduto: 'Fundamentos de JS. Ed. revista e atualizada', codProduto: 301103, classProduto: 'Programação', precoProduto: 190, disponivel: false},
    {nomeProduto: 'Construindo Startups de sucesso', codProduto: 301204, classProduto: 'Administração', precoProduto: 499, disponivel: true},
    {nomeProduto: 'Typescript Descomplicado', codProduto: 301300, classProduto: 'Programação', precoProduto: 196, disponivel: true},
    {nomeProduto: 'Como administrar negócios de sucesso', codProduto: 302455, classProduto: 'Administração', precoProduto: 285, disponivel: false},
];

console.log('Resultado da busca: DISPONÍVEIS:');
console.log(filtroProdDisponivel(produtos));
console.log('***************************************************');
console.log('Resultado da busca: CLASSE PRODUTO:')
console.log(filtroClassProduto(produtos,'Administração'));