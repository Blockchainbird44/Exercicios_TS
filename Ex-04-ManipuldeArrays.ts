function calcularMedia(num: number[]): number {
  let mediaArray = num.reduce((acc, numeros) => acc + numeros, 0);
  return mediaArray / num.length;
  }
  console.log(calcularMedia([50, 20.5, 65, 40, 10.5]));
  console.log(calcularMedia([5, -20, 8, -9]));