// setTimeout(()=>{
//     console.log('processo assincrono')
// },2000);

// console.log('1 - inicio')
// setTimeout(()=>{
//     console.log('2 - meio')
// }, 5000)
// console.log('3 - fim')



// const btn = document.getElementById('botao');
// const popup = document.getElementById('popup')

// btn.addEventListener('click', ()=>{

//     popup.classList.add('popup-active')
    
//     setTimeout(()=>{ //funçao assincrona
//         popup.classList.remove('popup-active')
//     },2500); //tempo de espera pra começar

// });




// setInterval(()=>{//funcao assincrona de repetição
//     console.log('tic')
// }, 1000)





// let counter = 0;

// const interval = setInterval(()=>{
//     counter++;
//     console.log(`Counter: ${counter}`);

//     if(counter>=5){
//         clearInterval();
//         console.log('O intervalo foi removido')
//     }
// }, 1000);





const eventoFuturo = (res) =>{
    return new Promise((resolve, reject) => { //objeto js q analisa eventos futuros, pode estar pendente, resolvido ou rejeitado
        // if(res === true){
        //     resolve('promessa resolvida')
        // }else{
        //     reject('promessa rejeitada')
        // }

        setTimeout(()=>{
            res ? resolve('promessa resolvida') : reject('promessa rejeitada')
        } ,2000)
    })
};



eventoFuturo(true)
    .then((response)=>{
        console.log(response)
    })
    .catch((erro)=>{
        console.log(erro)
    })
    .finally(()=>{
        console.log('o processo acabou!')
    })



eventoFuturo(false)
    .then((response)=>{
        console.log(response)
    })
    .catch((erro)=>{
        console.log(erro)
    })
    .finally(() => {
        console.log('o processo acabou!')
    })