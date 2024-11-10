let buscarDados = (tempo: number): Promise<string> =>{
    return new Promise(resolve => {
      setTimeout(() => resolve(`Dados carregados com sucesso em ${tempo/1000} seg.`), tempo);
    });
  };
  
  const exibirDados = async (tempo: number) => {
    const dados = await buscarDados(tempo);
    console.log(dados);
  };
  
  exibirDados(25000);
  exibirDados(15000);
  exibirDados(10000);
  exibirDados(5000);
  exibirDados(1000);
  exibirDados(2500);

function setTimeout(arg0: () => void, tempo: number) {
  throw new Error("Function not implemented.");
}
