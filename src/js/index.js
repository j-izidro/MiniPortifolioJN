/*

objtivo - quando clicar na aba temos que mostrar o conteudo da aba que foi clicada pelo usuario e esconder o conteudo da aba anterior

-passo1 - dar um jeito de pegar os elementos que representam as abas no html

-passo 2 dar um jeito de identificar o clique no elemento da aba

- passo 3 quando o usuario clicar desmarcar a aba selecionada

- passo 4 marcar a aba clicada como selecionado

- passo 5 esconder o conteudo anterior

- passo 6 mostrar o conteudo da aba selecionada 
*/
// - passo 7 - refaturação das dunções de abas

//passo 1
const abas = document.querySelectorAll(".aba");

//passo 2
 // o foreach ele vai entrar em cada aba 
abas.forEach(aba => {
    aba.addEventListener("click", function()
    {
        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)

        //passo 3
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        //passo4
        aba.classList.add("selecionado");

        //5
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");
        //6
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

        informacaoASerMostrada.classList.add("selecionado");

    });
   
});

function selecionarAba(aba){
     //passo 3
    
     const abaSelecionada = document.querySelector(".aba.selecionado");
     abaSelecionada.classList.remove("selecionado")

     //passo4
     aba.classList.add("selecionado");

}

    function mostrarInformacoesDaAba(aba){

          //5
          const informacaoSelecionada = document.querySelector(".informacao.selecionado");
          informacaoSelecionada.classList.remove("selecionado");
          //6
          const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
          const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
  
          informacaoASerMostrada.classList.add("selecionado");
  

    }