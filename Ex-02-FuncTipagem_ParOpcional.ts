const saudacao = (
    nome: string,
    idade?: number,
    cidade?: string,
    país?: string,
    formado?: boolean
  ): string => {
    let mensagem = `Olá, ${nome}!\n`;
    if (idade) {
      mensagem += `Você tem ${idade} anos.\n`;
    }
    if (idade !== undefined && formado === true) {
      mensagem += `Você é um privilegiado, tem ${idade} anos e é letrado!\n`;
    }
    if (cidade && país) {
      mensagem += `Você mora em ${cidade} - ${país}.\n`;
    }
    if (formado !== undefined) {
      mensagem += `Você tem foração superior? ${
        formado ? "Sim? Que bom, parabéns!" : "Não? Que pena! Mas não desista, seu esforço terá recompensa."
      }.\n`;
    }
    return mensagem;
  };
  console.log(saudacao("Kamila"));
  console.log(saudacao("John", 30));
  console.log(saudacao("Maria", 25, "Vitoria", "Brasil"));
  console.log(saudacao("Paulo", 50, "Belo Horizonte", "Brasil", false));
  console.log(saudacao("Daniel", 35, "Oslo", "Noruega", true));
  