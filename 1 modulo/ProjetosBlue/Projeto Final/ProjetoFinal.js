const prompt = require("prompt-sync")();
let inimigo,jogadaPlayer,jogadaInimigo,euMorri,inimigoMorreu,proximaFase,grupoContador=0,a,terreno,tipoLutador,control=0;
//Criação de classe para personagem
class Personagem {
    constructor(name='',forcaExtra=0,dano,velocidade,hp,quantidadeItens=0,nivel,xp) {
    this.name = name;
    this.forcaExtra = forcaExtra;
    this.dano = dano;
    this.velocidade = velocidade;
    this.hp = hp;
    this.quantidadeItens = quantidadeItens;
    this.nivel = nivel;
    this.xp=xp;
    }
}
class Inimigo extends Personagem {
    constructor(name,forcaExtra,dano,velocidade,hp,quantidadeItens,nivel,xp,status,vulnerabilidade){
        super(name,forcaExtra,dano,velocidade,hp,quantidadeItens,nivel,xp)
        this.status = status;
        this.vulnerabilidade = vulnerabilidade;
    }
}
//criação de classe para torneios
class Torneio{
    constructor (tipo,premio,titulo,venceu){
        this.tipo=tipo;
        this.premio=premio;
        this.titulo=titulo;
        this.venceu=venceu;
    }
    quartasFinal(){
        console.log('\n=====QUARTAS DE FINAL======')
        resetPlayer()
        setInimigos()
        batalha()
    }
    semiFinal(){
        if(proximaFase===true){
            console.log('\n======SEMI-FINAL======')
            resetPlayer()
            setInimigos()
            batalha()
        }
    }
    final(){ 
        if(proximaFase===true){
            console.log('\n======GRANDE FINAL======')
            resetPlayer()
            setInimigos()
            batalha()
        }
        if(proximaFase===false){
            console.log('Você perdeu o torneio')
        }
    }
}
class Regional extends Torneio{
    super (tipo,premio,titulo,venceu){
    }
    faseGrupos(){
        console.log('=======INÍCIO DO TORNEIO======')
        console.log('\n=====FASE DE GRUPOS=======')
        console.log('PRIMEIRA BATALHA')
        resetPlayer()
        setInimigos()
        batalha();
        if(proximaFase===true){
            grupoContador++
        }
        console.log('SEGUNDA BATALHA')
        resetPlayer()
        setInimigos()
        batalha();
        if(proximaFase===true){
            grupoContador++
        }
        console.log('TERCEIRA BATALHA')
        resetPlayer()
        setInimigos()
        batalha();
        if(proximaFase===true){
            grupoContador++
        }
        proximaFase = false;
        if(grupoContador>=1){ 
            proximaFase = true;
        }
    }
    quartasFinal(){
        super.quartasFinal()
    }
    semiFinal(){
        super.semiFinal()
    }
    final(){ 
        super.final()
    }
}
class Mundial extends Regional{
    super (tipo,premio,titulo,venceu){}
    faseGrupos(){
        super.faseGrupos()
    }
    oitavasFinal(){
        console.log("\n======== OITAVAS DE FINAL ==========");
        resetPlayer()
        setInimigos()
        batalha();
    }
    quartasFinal(){
        super.quartasFinal()
    }
    semiFinal(){
        super.semiFinal()
    }
    final(){ 
        super.Final()
    }
}
//Criação de ambientes
class Ambiente {
    constructor(periculosidade,topografia,danoAleatorio){
        this.periculosidade=periculosidade;
        this.topografia= topografia;
        this.danoAleatorio=danoAleatorio;
    }
}
//Menu de funções
//funções de sorte
const rolarDado = function(){
    dado=[1,2,3,4,5,6];
    valorDado=dado[Math.floor(Math.random()*dado.length)];
    return
}
const sorteioOpcoes = function(){
    opcoes=[1,2,3];
    escolhaSorteada=opcoes[Math.floor(Math.random()*opcoes.length)];
}
//funçoes de batalha
const ataquePlayer = function(){//Função que determina rodada do player na batalha
    if(inimigoMorreu==false){//verifica se o inimigo tá vivo
    do{
        jogadaPlayer=0
        console.log('\n1 - Ataque Básico\n2 - Ataque Especial\n3 - Poção');
        let escolhaAtaque = prompt('Você escolhe qual ataque?');
        if(escolhaAtaque == 1){//comando de ataque básico
            jogadaPlayer++
            inimigo.hp = inimigo.hp - eu.dano
            console.log(`\nSeu dano foi: ${eu.dano}`)
            console.log(`O HP de ${inimigo.name} agora é: ${inimigo.hp}\n`);
        }else if(escolhaAtaque==2){//comando de ataque especial
            jogadaPlayer++
            rolarDado()//determina na sorte se o ataque irá atingir o inimigo
            if(valorDado<=2){
                console.log('\nVocê errou o ataque')
            }else{
                rolarDado()//sorte para definir a potencia do ataque
                dano1=valorDado*eu.forcaExtra/10
                rolarDado()//sorte determina a velocidade
                dano2=valorDado*eu.velocidade/10
                danoTotal=eu.dano+dano1+dano2
                inimigo.hp = inimigo.hp-danoTotal
                console.log(`\nSeu dano foi: ${danoTotal}`)
                console.log(`O HP de ${inimigo.name} agora é: ${inimigo.hp}\n`);  
            }
        }else if(escolhaAtaque==3){//usar poção
            if(eu.quantidadeItens>0){
                jogadaPlayer++
                eu.quantidadeItens--
                eu.hp=eu.hp*1.2
                console.log(`Seu novo HP é ${eu.hp}`)
            }else if(eu.quantidadeItens==0){//verifica se a poção no iventario do player
                console.log('Poção indisponível. Tente novamente...')
            }
        }else{
            console.log('Escolha inválida. Tente novamente...')
        }
    }while(jogadaPlayer == 0)
    if(inimigo.hp<=0){//verifica se o inimigo morreu
        console.log('Você derrotou seu inimigo')
        inimigoMorreu = true;
        proximaFase=true;
    }
}
return
}
const turnoInimigo=function(){//função que determina rodada do inimigo na batalha
    if (euMorri==false){
        do{//jogadas do inimigo serão sempre aleatórias
            jogadaInimigo=0
            sorteioOpcoes()
            if(escolhaSorteada == 1){
                console.log(`\n                             Você foi atingido por um ataque básico`)
                jogadaInimigo++
                eu.hp = eu.hp - inimigo.dano
                console.log(`                               O dano sofrido foi: ${inimigo.dano}`)
                console.log(`                               O HP de ${eu.name} agora é: ${eu.hp}`);
            }else if(escolhaSorteada==2){
                jogadaInimigo++
                rolarDado()
                if(valorDado<=2){
                    console.log(`                           ${inimigo.name} errou o ataque`)
                }else{
                    rolarDado()
                    dano1=valorDado*inimigo.forcaExtra/10
                    rolarDado()
                    dano2=valorDado*inimigo.velocidade/10
                    danoTotal=inimigo.dano+dano1+dano2
                    eu.hp = eu.hp-danoTotal
                    console.log(`                           O dano foi: ${danoTotal}`)
                    console.log(`                           O HP de ${eu.name} agora é: ${eu.hp}`);  
                }
            }else if(escolhaSorteada==3){
                if(inimigo.quantidadeItens!=0){
                    jogadaInimigo++
                    inimigo.quantidadeItens--
                    inimigo.hp=inimigo.hp*1.2
                    console.log(`                           ${inimigo.name} usou uma poção`)
                    console.log(`                           O novo HP de ${inimigo.name} é ${inimigo.hp}`)
                }else{}
            }    
        }while(jogadaInimigo == 0)
        if(eu.hp<=0){
            console.log('                                   Você foi derrotado')
            euMorri = true;
            proximaFase = false;
        }
    }
return
}
const batalha = function(){//Função que engloba todo funcionamento da batalha
    a=eu.nivel//comparador para função subir de nivel
    euMorri=false;
    inimigoMorreu=false;
    ambienteAleatorio()//gera ambiente
    do{
        if(euMorri===false){//rodada player
            ataquePlayer()
        }
        if(inimigoMorreu===false){//rodada inimigo
            turnoInimigo()
        }if(euMorri===false && inimigoMorreu===false){//efeito do ambiente na batalha
            vulnerabilidade()
            danoAmbiente()
        }
    }while(euMorri !=true && inimigoMorreu !=true)
    if(euMorri==true){
        console.log('                                           \nVocê saiu do torneio')
        if (local.venceu===true){
            console.log(`Você venceu o torneio local e vai para casa com ${local.premio} e é o ${local.titulo}`)
        }else{
            console.log('Você vai para casa de mão abanando...')
        }
        if (regional.venceu===true){
            console.log(`Você venceu o torneio local e vai para casa com ${local.premio+regional.premio} e é o ${regional.titulo}`) 
        }else{  
        }
    }else if(inimigoMorreu==true){
        console.log('PARABÉNS\nVocê ganhou a batalha!!!')
        eu.xp=eu.xp+40
        subirNivel()
        if (local.venceu===true){
            console.log(`Você venceu o torneio local e vai para casa com ${local.premio} e é o ${local.titulo}`)
        }
        if (regional.venceu===true){
            console.log(`Você venceu o torneio local e vai para casa com ${local.premio+regional.premio} e é o ${regional.titulo}`) 
        }
    }
}
//funções que determinam inimigos e ambientes
const setInimigos =function(){
    let listaNomes =['Leonidas','Victor Belfort','Anderson Silva','Gustavo Molina','Temistocles','Mike Tyson','Aquiles','Odisseu','Hercules','Menelau'];
    nomeInimigo=listaNomes[Math.floor(Math.random()*listaNomes.length)];
    //Lutador Ágil
    let inimigo0a = new Inimigo(nomeInimigo,5,10,5,100,1,0,eu.xp,'Lutador Ágil',3),
    inimigo1a= new Inimigo(nomeInimigo,4,11,7,110,1,1,eu.xp,'Lutador Ágil',3),
    inimigo2a= new Inimigo(nomeInimigo,4,12,7,121,1,2,eu.xp,'Lutador Ágil',3),
    inimigo3a= new Inimigo(nomeInimigo,4,13,7,133,1,3,eu.xp,'Lutador Ágil',3),
    inimigo4a= new Inimigo(nomeInimigo,4,14,7,146,1,4,eu.xp,'Lutador Ágil',3),
    inimigo5a= new Inimigo(nomeInimigo,5,15,9,160,1,5,eu.xp,'Lutador Ágil',3),
    inimigo6a= new Inimigo(nomeInimigo,5,16,9,175,1,6,eu.xp,'Lutador Ágil',3),
    tipoANivel=[inimigo0a,inimigo1a,inimigo2a,inimigo3a,inimigo4a,inimigo5a,inimigo6a];
    //Lutador Pesado
    let inimigo0b = new Inimigo(nomeInimigo,5,10,5,100,1,0,eu.xp,'Lutador Pesado',2),
    inimigo1b= new Inimigo(nomeInimigo,7,11,4,110,1,1,eu.xp,'Lutador Pesado',2),
    inimigo2b= new Inimigo(nomeInimigo,7,12,4,121,1,2,eu.xp,'Lutador Pesado',2),
    inimigo3b= new Inimigo(nomeInimigo,7,13,4,133,1,3,eu.xp,'Lutador Pesado',2),
    inimigo4b= new Inimigo(nomeInimigo,7,14,4,146,1,4,eu.xp,'Lutador Pesado',2),
    inimigo5b= new Inimigo(nomeInimigo,9,15,5,160,1,5,eu.xp,'Lutador Pesado',2),
    inimigo6b= new Inimigo(nomeInimigo,9,16,5,175,1,6,eu.xp,'Lutador Pesado',2),
    tipoBNivel= [inimigo0b,inimigo1b,inimigo2b,inimigo3b,inimigo4b,inimigo5b,inimigo6b]
    //LutadorPrecavido
    let inimigo0c = new Inimigo(nomeInimigo,5,10,5,100,2,0,eu.xp,'Lutador Precavido',1),
    inimigo1c= new Inimigo(nomeInimigo,5,11,5,125,2,1,eu.xp,'Lutador Precavido',1),
    inimigo2c= new Inimigo(nomeInimigo,5,12,5,136,2,2,eu.xp,'Lutador Precavido',1),
    inimigo3c= new Inimigo(nomeInimigo,5,13,5,148,2,3,eu.xp,'Lutador Precavido',1),
    inimigo4c= new Inimigo(nomeInimigo,5,14,5,161,2,4,eu.xp,'Lutador Precavido',1),
    inimigo5c= new Inimigo(nomeInimigo,7,15,7,175,2,5,eu.xp,'Lutador Precavido',1),
    inimigo6c= new Inimigo(nomeInimigo,7,16,7,190,2,6,eu.xp,'Lutador Precavido',1),
    tipoCNivel= [inimigo0c,inimigo1c,inimigo2c,inimigo3c,inimigo4c,inimigo5c,inimigo6c]
    sorteioOpcoes();
    if(escolhaSorteada==1){
        inimigo=tipoANivel[eu.nivel]
        return console.log(inimigo)
    }else if(escolhaSorteada==2){
        inimigo=tipoBNivel[eu.nivel]
        return console.log(inimigo)
    }else if(escolhaSorteada==3){
        inimigo=tipoCNivel[eu.nivel]
        return console.log(inimigo)
    }
return console.log(inimigo)
}
const ambienteAleatorio =function(){
    sorteioOpcoes()
    if(escolhaSorteada==1){
        console.log('         O terreno sorteado foi: Planicie')
        console.log(planicie)
        terreno=1
    }else if (escolhaSorteada ==2){
        console.log('         O terreno sorteado foi: Colina')
        console.log(colina)
        terreno=2
    }else if(escolhaSorteada ==3){
        console.log('         O terreno sorteado foi: Floresta')
        console.log(floresta)
        terreno=3
    }
return
}
const vulnerabilidade = function(){
        if(eu.vulnerabilidade == 1 && terreno ==1){
            rolarDado()
            danoExtra = valorDado*planicie.danoAleatorio/10
            console.log(`\nVocê tomou ${danoExtra} de dano extra por ser vulnerável a esse terreno`)
            eu.hp=eu.hp-danoExtra
        }
        if(inimigo.vulnerabilidade == 1 && terreno ==1){
            rolarDado()
            danoExtra = valorDado*planicie.danoAleatorio/10
            console.log(`       \n${inimigo.name} tomou ${danoExtra} de dano extra por ser vulnerável a esse terreno`)
            inimigo.hp=inimigo.hp-danoExtra
        }
        if(eu.vulnerabilidade == 2 && terreno ==2){
            rolarDado()
            danoExtra = valorDado*colina.danoAleatorio/10
            console.log(`\nVocê tomou ${danoExtra} de dano extra por ser vulnerável a esse terreno`)
            eu.hp=eu.hp-danoExtra
        }
        if(inimigo.vulnerabilidade == 2 && terreno ==2){
            rolarDado()
            danoExtra = valorDado*colina.danoAleatorio/10
            console.log(`       \n${inimigo.name} tomou ${danoExtra} de dano extra por ser vulnerável a esse terreno`)
            inimigo.hp=inimigo.hp-danoExtra
        }
        if(eu.vulnerabilidade == 3 && terreno ==3){
            rolarDado()
            danoExtra = valorDado*floresta.danoAleatorio/10
            console.log(`\nVocê tomou ${danoExtra} de dano extra por ser vulnerável a esse terreno`)
            eu.hp=eu.hp-danoExtra
        }
        if(inimigo.vulnerabilidade == 3 && terreno ==3){
            rolarDado()
            danoExtra = valorDado*floresta.danoAleatorio/10
            console.log(`       \n${inimigo.name} tomou ${danoExtra} de dano extra por ser vulnerável a esse terreno`)
            inimigo.hp=inimigo.hp-danoExtra
        }
    return
}
const danoAmbiente =function(){
    console.log('                   O dano do ambiente foi: 2')
    eu.hp=eu.hp-2
    inimigo.hp=inimigo.hp-2
    return
}

//funções que manipulam o pós batalhar
const resetPlayer = function(){
    if(eu.vulnerabilidade ==3) {//lutador ágil
        eu.quantidadeItens = 1;
        if(eu.nivel==0){
            eu.forcaExtra = 5;
            eu.dano = 10;
            eu.velocidade = 5;
            eu.hp = 100;
        }
        if(eu.nivel>=1 && eu.nivel<=4){
            eu.forcaExtra = 4;
            eu.velocidade = 7;
        if(eu.nivel==1){
            eu.dano = 11;
            eu.hp = 110;
        }else if(eu.nivel==2){;
            eu.dano = 12;
            eu.hp = 121;
        }else if(eu.nivel==3){
            eu.dano = 13;
            eu.hp = 133;
        }else if(eu.nivel==4){
            eu.dano = 14;
            eu.hp = 146;
        }
        }   
    if (eu.nivel>=5){
            eu.forcaExtra = 5;
            eu.velocidade = 9;
    if(eu.nivel==5){
            eu.dano = 15;
            eu.hp = 160;
        }else if(eu.nivel==6){
            eu.dano = 16;
            eu.hp = 175;
        }
    }
    }else if(eu.vulnerabilidade ==2) {//lutador Pesado
        eu.quantidadeItens = 1;
        if(eu.nivel==0){
            eu.forcaExtra = 5;
            eu.dano = 10;
            eu.velocidade = 5;
            eu.hp = 100;
        }
        if (eu.nivel>=1 && eu.nivel<=4){
            eu.forcaExtra = 7;
            eu.velocidade = 4;
        if(eu.nivel==1){
            eu.dano = 11;
            eu.hp = 110;
        }else if(eu.nivel==2){
            eu.dano = 12;
            eu.hp = 121;
        }else if(eu.nivel==3){
            eu.dano = 13;
            eu.hp = 133;
        }else if(eu.nivel==4){
            eu.dano = 14;
            eu.hp = 146;
        }
    }
    if (eu.nivel>=5){
        eu.forcaExtra = 9;
        eu.velocidade = 5;
        if(eu.nivel==5){
            eu.dano = 15;
            eu.hp = 160;
        }else if(eu.nivel==6){
            eu.dano = 16;
            eu.hp = 175;
        }
    }
    }if(eu.vulnerabilidade ==3) {//lutador precavido
        if(eu.nivel==0){
            eu.forcaExtra = 5;
            eu.dano = 10;
            eu.velocidade = 5;
            eu.hp = 100;
            eu.quantidadeItens = 1;
        }
        if(eu.nivel>=1 && eu.nivel<=4){
            eu.forcaExtra = 5;
            eu.velocidade = 5;
            eu.quantidadeItens = 2;
        }if(eu.nivel==1){
            eu.dano = 11;
            eu.hp = 125;
        }else if(eu.nivel==2){
            eu.dano = 12;
            eu.hp = 136;
        }else if(eu.nivel==3){
            eu.dano = 13;
            eu.hp = 148;
        }else if(eu.nivel==4){
            eu.dano = 14;
            eu.hp = 161;
        }
    }
    if(eu.nivel>=5){
        eu.forcaExtra = 7;
        eu.velocidade = 7;
        eu.quantidadeItens = 2;
        if(eu.nivel==5){
            eu.dano = 15;
            eu.hp = 175;
        }else if(eu.nivel==6){
            eu.dano = 16;
            eu.hp = 190;
        }
    }
return
}
 const subirNivel=function(){
     if(eu.xp<50){
         eu.nivel=0
     }else if(eu.xp>=50 && eu.xp<120){
         eu.nivel=1;
     }else if(eu.xp>=120 && eu.xp<218){
         eu.nivel=2
     }else if(eu.xp>=218 && eu.xp<355){
         eu.nivel=3
     }else if(eu.xp>=355 && eu.xp<547){
         eu.nivel=4
     }else if(eu.xp>=547 && eu.xp<816){
         eu.nivel=5
     }else if(eu.xp>=816){
         eu.nivel=6
     }
     //comparando nivel antes e depois da batalha
     if(a == eu.nivel){
     }else if(a<eu.nivel){
         console.log(`\nVocê subiu de nível!!!\nSeu nível agora é: ${eu.nivel}`)
     }
 }
//game
//determinando os ambientes e torneios
var planicie =new Ambiente(1,'Planície',5)
var colina=new Ambiente(2,'Colina',5)
var floresta=new Ambiente(3,'Floresta',5)
let local = new Torneio('Local',10000,'Campeão Local',false)
let regional = new Regional('Regional',1000000,'Campeão Regional',false)
let mundial= new Mundial('MUNDIAL',10000000,"Campeão mundial",false)
//explicação
console.log('\nVocê saiu da sua aldeia em busca de dinheiro, fama e glória')
console.log('Você poderá lutar em até 3 torneios para se consagrar em sua jornada')
console.log('Comece escolhendo o nome do seu guerreiro')
let nome = prompt('Qual é o seu nome?')
let eu = new Personagem(nome,5,10,5,100,1,0,1)
console.log(eu)
console.log('Agora vamos aprimorar seu personagem\nEscolha com sabedoria pois cada tipo pode ser vital no sucesso da sua jornada\nEscolha o tipo de personagem')
console.log('1- Lutador ágil\n + velocidade\n - força extra')
console.log('2- Lutador pesado\n - velocidade\n + força extra')
console.log('3- Lutador precavido\n + hp\n + item')
delete eu
while(tipoLutador !=1 && tipoLutador !=2 && tipoLutador!=3){
    tipoLutador = prompt('Digite o número equivalente a sua escolha')
    if (tipoLutador == 1){
        eu = new Inimigo(nome,5,10,5,100,1,0,0,false,3)
    }else if (tipoLutador == 2){
        eu = new Inimigo(nome,5,10,5,100,1,0,0,false,2)
    }else if (tipoLutador == 3){
        eu = new Inimigo(nome,5,10,5,100,1,0,0,false,1)
    }else{
        console.log('valor inválido')
    }
}
console.log(eu)
console.log('\nAgora pense bem nas suas escolhas de ataque....')
console.log('1- Ataque Básico\nSempre tira 10 do hp do seu oponente')
console.log('2- Ataque especial\nSe estiver se sentindo sortudo o ataque especial tira mais dano mas também pode fazer você errar')
console.log('3- Poção\nRecupera 20% do seu HP. Quantidade limitada por batalha\nUse com sabedoria.\n')
console.log('O ambiente também provoca dano a cada rodada. \nTome cuidado\n você é mais vulnerável em alguns ambientes')
local.quartasFinal()
local.semiFinal()
local.final()
    if(proximaFase===true){
        local.venceu=true;
        do{
            let voltaCasa = prompt('Deseja ir para o próximo torneio?').toUpperCase().slice(0,1)
            if(voltaCasa=='S'){
                regional.faseGrupos()
                regional.quartasFinal()
                regional.final()
                control++
            }else if(voltaCasa=='N'){
                console.log(`Você venceu o torneio local e é o ${local.titulo}e leva pra casa ${local.premio}`)
                control++
                break
            }else{
                console.log('Valor Inválido.Digite sim ou não')
            }
    
        }while(control!==1)
        if (proximaFase===true){
            regional.venceu=true
            control=0
            do{
               voltaCasa = prompt('Deseja ir para o próximo torneio?').toUpperCase().slice(0,1);
                if(voltaCasa=='S'){
                    mundial.faseGrupos()
                    mundial.oitavasFinal()
                    mundial.quartasFinal()
                    mundial.semiFinal()
                    mundial.final();
                    if (proximaFase===true){
                        console.log(`Você é o maior de todos o grande ${mundia.titulo}e leva pra casa ${(local.premio+regional.premio+mundial.premio)}`)
                    }else{ 
                        console.log(`Você venceu o torneio local e o regional é o ${local.titulo}e ${regional.titulo} leva pra casa ${(local.premio+regional.premio)}`)
                    }
                }else if(voltaCasa=='N'){
                    console.log(`Você venceu o torneio local e o regional é o ${local.titulo}e ${regional.titulo} leva pra casa ${(local.premio+regional.premio)}`)
                    control++
                    break
                }else{
                console.log('Valor Inválido.Digite sim ou não')
                }

            }while(control!==1)
        }
    }