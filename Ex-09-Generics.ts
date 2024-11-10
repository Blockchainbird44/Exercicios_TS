function reverterArray<T>(items: T[]): T[] {
    let conjunto: {[key:string]: T[]} = {};

    items.forEach(item => {
        let tipo = typeof item;

        if (!conjunto[tipo]) {
            conjunto[tipo] = [];
        }
        conjunto[tipo].push(item);
    })

    const conjuntoNovo: T[] = Object.values(conjunto).reduce((acc, elemento) => acc.concat(elemento),[]);

    return conjuntoNovo.reverse();
}

console.log(reverterArray([10,20,30,40,50]));
console.log(reverterArray(['uva', 'melão','laranja', 'banana', 'abacate']));
console.log(reverterArray(['a', 2, 'c', 5.5, 'Olá', true, 5500, false]));