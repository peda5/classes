class heroi{
    constructor(nome, tipo, idade){
    this.nome = nome
    this.tipo = tipo
    this.idade = idade
}
ataque(){
    let ataque = " ";

    switch(this.tipo){
        case "Mago":
            ataque = "Magia"
            break;
        case  "Guerreiro":
            ataque = "Espada"
            break;
        case "Ninja":
            ataque = "Shuriken"
            break;
        case "Monge":
            ataque = "Artes marciais"
            break;
        default:
            ataque = "Ataque desconhecido...";    

    }
console.log(`O ${this.nome}, O ${this.tipo}, com idade de ${this.idade}, usou ${ataque}!!`)
}
}


let heroi1 = new heroi(" Hanzo Hattori", "Ninja", 36)
let heroi2 = new heroi("Roderick", "Mago", 82 )
let heroi3 = new heroi("Yngvarr", "Guerreiro", 43 )
let heroi4 = new heroi(" Kaelan", "Monge", 39 )
heroi1.ataque()
heroi3.ataque()
heroi2.ataque()
heroi4.ataque()