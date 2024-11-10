function formataEntrada(valor: string | number | boolean): string | number | boolean{
    if (typeof valor === "string") {
        return valor.toLowerCase();
    }
    if (typeof valor === "number") {
        return valor * 10;
    }
    if (typeof valor === "boolean") {
        return valor;
    }
    return valor;
    }
    console.log(formataEntrada("typescript")); 
    console.log(formataEntrada(9));
    console.log(`O resultado da entrada é:`,formataEntrada(true));