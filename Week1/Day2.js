//let school = 'Zindua'

//if (school === 'Zindua') {
//    console.log('Zindua School')
//} else{
//    console.log('Not Zindua School')
//}

/**
 * LOGICAL OPERATORS
 * @strictlyequal -> ===
 * @and -> &&
 * @or -> ||
 * @greaterthan -> >
 * @lessthan -> <
 * @greaterthanorequalto -> >=
 * @lessthanorequalto -> <=
 * @not -> !
 * @notequal -> !==
 */

// SWITCH STATEMENT
// let name = 'DOG'
// switch (name){
//     case 'isaac':
//         console.log('i am isaac')
//         break;
//     case 'gwaro':
//         console.log('i am gwaro')
//         break;
//     default:
//         console.log('i am not isaac or gwaro')
//         break;        
// }

// FUNCTIONS
// function consoleHello() { //function declaration
 
//     console.log('hello') //function definition
// }

// consoleHello() //function call/invocation

// FOR LOOPS
// for (let i=0; i<10; i++) {
//     console.log(i)
// }
// let n= prompt('enter number')
// let sum= 0
// for (m=1; m<n;m++){
//     let p= m%3
//     let q= m%5

//     if(p===0 || q===0){
//         sum= sum+m
//     }    
// }
// console.log(sum)

// @FUNCTION EXPRESSION
const add= function(a,b){
    return a+b
}
console.log(add(10,20))

// @ARROW FUNCTIONS
const add2=(a,b)=>{
    return a+b
}
console.log(add2(10,20))

// @TEMPLATE LITERALS
const name='dan'
const school='Zindua school'

const sentence= `my name is ${name} currently at ${school}`
console.log(sentence)