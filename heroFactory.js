class hero{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo.toString().toLowerCase()

    }
    atacar() {
        let ataque
        switch (this.tipo) {
            case 'guerreiro':
               ataque = 'Espada'
               break;
            case 'mago':
                ataque = 'Magia'
                break;
            case 'monge':
                ataque = 'Artes Marciais'
                break;
            case 'ninja':
                ataque = 'Shuriken'
                break;
            default:
                throw Error("Tipo de heroi não existente")
                break;
        }


        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }




}

module.exports = hero