// setTimeout(()=>{
//     console.log('processo assincrono')
// },2000);


// console.log('1 - inicio')
// setTimeout(()=>{
//     console.log('2 - meio')
// }, 5000)
// console.log('3 - fim')

const btn = document.getElementById('botao');
const popup = document.getElementById('popup')

btn.addEventListener('click', ()=>{

    popup.classList.add('popup-active')
    
    setTimeout(()=>{
        popup.classList.remove('popup-active')
    },2500);

});