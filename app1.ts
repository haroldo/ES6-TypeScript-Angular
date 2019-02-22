class Carro{
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo:string, numeroDePortas: number)
    {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void{
        this.velocidade = this.velocidade + 10
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number{
        return this.velocidade
    }
}



class Concessionaria{
    private endereco: string
    private listadecarros: Carro[]

    constructor(endereco:string,listadeCarros: Carro[]){
        this.endereco = endereco
        this.listadecarros = listadeCarros
    }

    public fornecerEnderesso(): String{
        return this.endereco
    }

    public mostrarListaDeCarros():Carro[]{
        return this.listadecarros
    }
}


class Pessoa{
    private nome: string
    private carroPreferido: any
    private carro: Carro

    constructor(nome:string,carroPreferido:string)
    {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): String{
        return this.nome 
    }

    public dizerCarroPreferido():string{
        return this.carroPreferido
    }

    public comprarCarro(carro:Carro):void{
        this.carro=carro
    }

    public dizerCarroQueTem():Carro{
        return this.carro
    }
}

/* criar carros*/
let carroA = new Carro('nissan',4)
let carroB = new Carro('veloster',4)
let carroC = new Carro('fusca',4)

/*Montar lista de carros da consessionaria */
let listadeCarros:Carro[] = [carroA,carroB,carroC]


let concessionaria = new Concessionaria('rua domingues',listadeCarros)

/*Exibir a lista de carros */
//console.log(concessionaria.mostrarListaDeCarros())


/*Comprar o carro */

let cliente = new Pessoa('Haroldo','nissan')

console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro:Carro)=>{

    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }

})


console.log(cliente.dizerCarroQueTem())