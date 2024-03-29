/*
  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0,
  addBooks (numberBooks) {
    if (this.booksIn === this.spaces) {
      return 'A caixa já está cheia'
    }

    if (this.booksIn + numberBooks <= this.spaces) {
      this.booksIn += numberBooks
      const livroOuLivros = this.booksIn === 1 ? 'livro' : 'livros'
      return `Há ${this.booksIn} ${livroOuLivros} na caixa`
    }
    
    return (
      `${this.spaces - this.booksIn === 1 ? 
        `Só cabe mais ${this.spaces - this.booksIn} livro` : 
        `Só cabem mais ${this.spaces - this.booksIn} livros`}`
    )
  }
}
console.log(booksBox.addBooks(1))
console.log(booksBox.addBooks(2))
console.log(booksBox.addBooks(6))
