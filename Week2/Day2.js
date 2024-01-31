let redbutton= document.querySelector('.button1')
 let greenbutton= document.querySelector('.button2')
 document.body.style.backgroundColor="blue"
 let initialc = document.body.style.backgroundColor
 redbutton.style.backgroundColor="red"
 greenbutton.style.backgroundColor="green"

 redbutton.addEventListener('click',(e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor="red"
 })    
 greenbutton.addEventListener('click',(e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor="green"
 })

 document.body.addEventListener('click',()=>{
    if(document.body.style.backgroundColor !== initialc){
        document.body.style.backgroundColor = initialc
    }
 })