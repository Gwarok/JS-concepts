const symbols=('rock','paper','scissors')
let pick = prompt('Please pick one between rock,paper,and scissors')

function picksymbol(){
    const random = math.round(math.random() * symbols.length)
    const pickedsymbol = symbols[random]
    console.log('pickedsymbol')
}
