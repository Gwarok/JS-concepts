const parentcontainer= document.querySelector('.parent')

const childcontainer= document.createElement('div')
childcontainer.classList.add('child')

parentcontainer.appendChild(childcontainer)
console.log(childcontainer)

const innerchild = document.createElement('div')
innerchild.classList.add('innerchild')

childcontainer.appendChild(innerchild)
// parent.innerHTML=`
// <div>
//     <div>
//     </div
// </div>
// `