// // localStorage.setItem('boas-vindas','Olá, Dev!')
// // localStorage.setItem('válido',true)

// let mensagem = localStorage.getItem('boas-vindas');
// console.log(mensagem);

// let tipo = localStorage.getItem('válido');
// console.log(tipo);


// // sessionStorage.setItem('selecionados', [1, 2, 3]);
// let lista = sessionStorage.getItem('selecionados').split(',');
// console.log(lista);


// localStorage.clear();

// const produto1 = {
//     id: 1,
//     produto: 'Arroz'
// }

// localStorage.setItem('produto1', produto1);


// const produto2 = {
//     id: 1,
//     produto: 'Arroz'
// }

// const emJSON = JSON.stringify(produto2);
// localStorage.setItem('produto2', emJSON);


// const produto3 = localStorage.getItem('produto2');
// const produtoObjeto= JSON.parse(produto3);

// console.log(produtoObjeto)


const produtos = [
    {id: 1, produto: 'Arroz', preco: 11},
    {id: 2, produto: 'Feijão', preco: 50},
    {id: 3, produto: 'Farinha', preco: 55},
    {id: 4, produto: 'Pão', preco: 17},
]

const armazenarLocal = (chave, valor) =>{
    localStorage.setItem(chave, valor)
}

for (const produto of produtos){
    armazenarLocal(produto.id, JSON.stringify(produto));
}

armazenarLocal('listaProdutos', JSON.stringify(produtos));

class Produto{
    constructor(obj){
        this.nome = obj.produto.toUpperCase();
        this.preco = parseFloat(obj.preco);
    }
    somaICMS(){
        this.preco = this.preco * 1.21;
    }
};

const armazenados = JSON.parse(localStorage.getItem('listaProdutos'));
const produtosLista = [];

for (const objeto of armazenados){
    produtosLista.push(new Produto(objeto))
}
for (const produto of produtosLista){
    produto.somaICMS();
}

console.log(produtosLista);