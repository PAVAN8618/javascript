const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const count = document.querySelector('.count')
const changevalue = document.querySelector('.changevalue')
const reset = document.querySelector('.reset')

console.log(changevalue.value)

plus.addEventListener('click',()=>{
    const countValue = parseInt(count.innerText)
    const changedata = parseInt(changevalue.value) || 0
    count.innerHTML = countValue + changedata;
    console.log(changedata)
    
})
minus.addEventListener('click',()=>{
    const countValue = parseInt(count.innerText)
    const changedata = parseInt(changevalue.value) || 0
    count.innerHTML = countValue - changedata;
    
})
reset.addEventListener('click', ()=>{
    count.innerHTML = '';

})