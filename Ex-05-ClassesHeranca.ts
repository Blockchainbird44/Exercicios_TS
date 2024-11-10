class Animal {
    nomeAnimal: string;
    somAnimal: string;
    constructor(nome: string, som: string) {
      this.nomeAnimal = nome;
      this.somAnimal = som;
    }
    emitirSom(): string {
      return `${this.nomeAnimal} faz ${this.somAnimal}`;
    }
  }
  
  class Cachorro extends Animal {
    racaAnimal: string;
    constructor(nome: string, som: string, raca: string) {
      super(nome, som);
      this.racaAnimal = raca;
    }
    
    latirForte(): void {
      switch (this.racaAnimal) {
        case "Labrador":
          this.somAnimal = "Au-Au-Au...";
          break;
        case "Fila-Brasileiro":
          this.somAnimal = "Rouf-Rouf-Rouf...";
          break;
          case "Pastor-Alemao":
          this.somAnimal = "AU-AU-AU-AU...";
          break;
        default:
          this.somAnimal = "au-au...";
          break;
      }
    }
  }
  
  let capa = new Cachorro("Capa", "au au", "Pastor-Alemao");
  let bravo = new Cachorro("Bravo", "au au", "Labrador");
  let brutus = new Cachorro("Brutus", "au au", "Fila-Brasileiro");
  let caramelo = new Cachorro("Caramelo", "au au", "Vira-Lata");
  
  
console.log('**************************');

console.log(`Raça: ${capa.racaAnimal}`);
capa.latirForte();
console.log('O',capa.emitirSom(),`\n`);
  
  
console.log(`Raça: ${bravo.racaAnimal}`);
bravo.latirForte();
console.log('O',bravo.emitirSom(),`\n`);
  
  
console.log(`Raça: ${brutus.racaAnimal}`);
brutus.latirForte();
console.log('O',brutus.emitirSom(),`\n`);
 
  
console.log(`Raça: ${caramelo.racaAnimal}`);
caramelo.latirForte();
console.log('O',caramelo.emitirSom(),`\n`);

 