const parentcont= document.querySelector('.parent-container')
parentcont.addEventListener('click',(e)=>{
    if(e.target.tagName === 'SPAN'){
        let subContainer = e.target.nextElementSibling
        subContainer.classList.toggle('hidden')
    }
})