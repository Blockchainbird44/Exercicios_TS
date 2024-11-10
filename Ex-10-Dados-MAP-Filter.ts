function filtrarPrecosAltos(precos: number[], corte: number = 100): number[] {
    return precos
      .filter(preco => preco > corte)
      .map(preco => preco * 0.90); // concede 10% de desconto
  }
  
  console.log(filtrarPrecosAltos([20, 70, 85, 200, 140, 1500]));
  console.log(filtrarPrecosAltos([50, 1500, 2000, 300], 450));