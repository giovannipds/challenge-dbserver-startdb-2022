class Forca {
  #letrasChutadas = []
  #palavraInicial = ''
  #vidas = 6
  #estadoDoJogo = "aguardando chute"
  #palavra

  constructor(palavra) {
    this.#palavraInicial = palavra; // abacaxi
  }

  chutar(letraOuPalavra) {
    // logica de nao chutar palavras
    if (typeof letraOuPalavra === 'string' && letraOuPalavra.length > 1) {
      // --this.#vidas // nao tenho certeza se tira vida aqui ainda
      return
    }

    // logica de nao chutar letras ja chutadas
    if (this.#letrasChutadas.includes(letraOuPalavra)) {
      return
    }

    // logica de gravar letras chutadas
    this.#letrasChutadas.push(letraOuPalavra)

    // logica de tirar vidas
    if (this.#palavraInicial.indexOf(letraOuPalavra) === -1) {
      --this.#vidas
    }

    // var palavra = "abacaxi"
    var novaPalavra = []
    for (var i = 0, total = this.#palavraInicial.length; i < total; i++) {
      var letra = this.#palavraInicial[i]
      if (this.#letrasChutadas.includes(letra) && this.#palavraInicial.indexOf(letra) !== -1) {
        novaPalavra.push(letra)
      } else {
        novaPalavra.push('_')
      }
    }
    this.#palavra = novaPalavra

    // logica de alterar estado
    if (this.#vidas <= 0) {
      this.#estadoDoJogo = 'perdeu'
    }

    // logica de ganhar
    if (this.#palavraInicial === this.#palavra.join('')) {
      this.#estadoDoJogo = 'ganhou'
    }
  }

  buscarEstado() {
    return this.#estadoDoJogo;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.#letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.#vidas, // Quantidade de vidas restantes
          palavraInicial: this.#palavraInicial,
          palavra: this.#palavra,// Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
          // abacaxi
          // a_a_a__
          estado: this.buscarEstado()
      }
  }
}

module.exports = Forca;
