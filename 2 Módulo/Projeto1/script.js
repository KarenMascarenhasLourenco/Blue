const  botao  =  document.getElementById ( "botao" ) ;
clique=0
botao.addEventListener("click", function () { // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
clique++
    if(clique==1) {
        document.getElementById ("humor").src="media/Chocado.gif"
        document.getElementById ("humor").alt="chocado"
        document.getElementById ("descricao").innerText="O Cliente está chocado"
        document.getElementById ("react").style.backgroundColor="#ff66c4"
        document.getElementById ("botao").style.backgroundColor="#ff66c4"
    }else if(clique==2) {
        document.getElementById ("humor").src="media/Insatisfeito.gif"
        document.getElementById ("humor").alt="Insatisfeito"
        document.getElementById ("descricao").innerText="O cliente está Insatisfeito"
        document.getElementById ("react").style.backgroundColor="#5271ff"
        document.getElementById ("botao").style.backgroundColor="#5271ff"
    }else if(clique==3){
        document.getElementById ("humor").src="media/Indiferente.gif"
        document.getElementById ("humor").alt="indiferente"
        document.getElementById ("descricao").innerText="O cliente está indiferente"
        document.getElementById ("react").style.backgroundColor="#ffde59"
        document.getElementById ("botao").style.backgroundColor="#ffde59"
    }else if(clique==4){
        document.getElementById ("humor").src="media/Satisfeito.gif"
        document.getElementById ("humor").alt="satisfeito"
        document.getElementById ("descricao").innerText="O cliente está satisfeito"
        document.getElementById ("react").style.backgroundColor="#7ed957"
        document.getElementById ("botao").style.backgroundColor="#7ed957"
    }else if(clique==5){
        document.getElementById ("humor").src="media/Raiva.gif"
        document.getElementById ("humor").alt="raiva"
        document.getElementById ("descricao").innerText="O cliente está com raiva"
        document.getElementById ("react").style.backgroundColor="#ff5757"
        document.getElementById ("botao").style.backgroundColor="#ff5757"
        clique=0
    }
});