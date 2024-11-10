enum diasSemana {
    Segunda = 'Segunda-feira',
    Terca = 'Terca-feira',
    Quarta = 'Quarta-feira',
    Quinta = 'Quinta-feira',
    Sexta = 'Sexta-feira',
    Sabado = 'Sabado',
    Domingo = 'Domingo',
    }

enum FeriadosNac {
    AnoNovo = 'Ano Novo',
    Carnaval = 'Carnaval',
    Paixao = 'Sexta-feira Santa',
    Tiradentes = 'Inconfidencia Mineira',
    Trabalhadores = 'Dia dos Trabalhadores',
    Corpus = 'Corpus Christi',
    Independencia = 'Independencia do Brasil',
    Natal = 'Natal',
}

function ehFimDeSemana(dia: diasSemana | FeriadosNac): boolean {
    const finaisDeSemana = [diasSemana.Sabado, diasSemana.Domingo];
  
    if (finaisDeSemana.includes(dia as diasSemana)) {
      return true;
    }
    return Object.values(FeriadosNac).includes(dia as FeriadosNac);
  }
  
  console.log(ehFimDeSemana(diasSemana.Domingo));
  console.log(ehFimDeSemana(diasSemana.Quinta));
  console.log(ehFimDeSemana(FeriadosNac.AnoNovo));  
  console.log(ehFimDeSemana(diasSemana.Sabado)); 
  console.log(ehFimDeSemana(FeriadosNac.Independencia));
  console.log(ehFimDeSemana(FeriadosNac.Carnaval));

    