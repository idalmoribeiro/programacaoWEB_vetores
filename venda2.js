
    //função valor total
    function valorTotal (valor, desconto){
    let valorTotal = valor - (valor * (desconto/100));
    return valorTotal;
    }

    //vetor
    let tabelaVendas = [];

    //capturando a tabela e botões
    let tabela = document.getElementById("tabela");
    let botaoCadastrar = document.getElementById("cadastrar");
    let botaoRemover = document.getElementById("remover");
    

    //PREENCHENDO O VETOR

        //adicionando escutador de evento
        botaoCadastrar.addEventListener("click", criarLinha); 
      
        function criarLinha(){

        //capturando valores dos inputs
        let nome = document.getElementById("nome").value;
        let valor = parseFloat(document.getElementById("valor").value);
        let desconto = parseFloat(document.getElementById("desconto").value);

        //verificação de preenchimento de campos
        if ((nome === "") || (isNaN(valor))){
            alert("Por favor preencha o Nome do Vendedor e o valor do produto");
            return;
        }
        
        //limpando repetidos
        //tabela.innerHTML = ""; 

        //calculando valor com desconto
        let valorFinal = valorTotal(valor, desconto);

        //inserindo novo elemento ao vetor
        tabelaVendas.push({
        id: tabelaVendas.length+1,
        nome,
        valor,
        desconto,
        valorFinal
        });
    
        exibirTabela();

        //limpando inputs para nova entrada de usuário
        document.getElementById("nome").value = "";
        document.getElementById("valor").value = "";
        document.getElementById("desconto").value = "";
        document.getElementById("nome").focus();
        
    }
    
    //  FUNÇÃO EXIBIR TABELA

    function exibirTabela(){
        let linha = "";
        for (let i=0; i < tabelaVendas.length; i++){
            linha = `
            <tr>
                <td> ${i + 1}</td>
                <td> ${tabelaVendas[i].nome}</td>
                <td> ${tabelaVendas[i].valor.toLocaleString("pt-BR", {style: "currency", currency:"BRL"})}</td>
                <td> ${tabelaVendas[i].desconto.toFixed(2)}</td>
                <td> ${tabelaVendas[i].valorFinal.toLocaleString(
                    "pt-BR", {style: "currency", currency: "BRL"})}</td>
            </tr>
            `;
        }
        tabela.innerHTML += linha;

    }

    //REMOVENDO ÚLTIMA LINHA DA TABELA
    //adicionando escutador de evento
    botaoRemover.addEventListener("click", removerLinha);

    function removerLinha(){
        //verificação se existe linha para remover
        if (tabelaVendas.length <= 0){
            alert("ERRO! A tabela está vazia.");
            return;
        }

        tabelaVendas.pop();

        tabela.innerHTML = `
        <tr>
        <th>id</th>
        <th>Nome Vendedor</th>
        <th>Valor</th>
        <th>Desconto</th>
        <th>Valor Total</th>
        </tr>
        `
        exibirTabela();
    }