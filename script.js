 const btnPrint = document.querySelector("#print")
btnPrint.addEventListener("click",()=>{
    imprimir({nomeCliente:"Anderson",produtos:[
        {titulo:"Xis rato",preco:25}
    ],mesa:"20"})
})
/**
 * 
 * @param {nome do cliente, mesa, lista de produtos com seus titulos} pedido 
 */
export function imprimir(pedido){
     
        let texto = `Pedido --- ${pedido.nomeCliente}<br>`
        let itens = "Itens do pedido: <br><br>"
        let mesa = `<br>Mesa: ${pedido.mesa}<br>`
        pedido.produtos.forEach((produto)=>{
            itens += `*${produto.titulo}........R$ ${produto.preco.toFixed(2).replace('.', ',')} <br>`;

        })
        texto +=  mesa + itens 
        const win = window.open('', '', 'width=800,height=600');
        win.document.write('<html><head><title>Pedido</title>');
        win.document.write('</head><body>');
        win.document.write(texto);
        win.document.write('</body></html>');
        win.document.close(); // necessary for IE >= 10
        win.focus(); // necessary for IE >= 10*/

        // Adiciona um pequeno atraso antes de disparar a impressão
        setTimeout(function () {
            win.print();
            win.close();
        }, 1000);
}
