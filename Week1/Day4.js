/**
 * @OBJECTS
 */
// let person = {
//     name : 'john',
//     age : 30,
//     school : 'zindua',
//     personalities :['kind','hardworking'],
//     stubborn: false,
//     hobbies:{
//         indoor:['reading','cooking'],
//         outdoor:['hiking','swimming']
//     },
//     sound: function(){
//         console.log('Hello!')
//     }
// }
// console.log(person['age']) ->Bracket notation
// conssole.log(person.age) ->Dot notation
// person['gender'] = 'male'

let people=[
    {
        name:'Dave',
        age:30,
        city:'Nairobi'
    },
    {
        name:'Jane',
        age:50,
        city:'Machakos'
    },
    {
        name:'Justin',
        age:50,
        city:'Nairobi'
    }
]

function groupby(arr, property) {
    let grouped ={}
    for(let i=0;i<arr.length;i++){
        let person=arr[i]
        let key=person[property]

        if(!grouped[key]){
            grouped[key]=[person]
        }else{
            grouped[key].push(person)
        }  
    }
    console.log(grouped)
}
groupby(people, 'city')

let fruits= ['apples','peaches','oranges']
fruits.push('bananas');
fruits.unshift('watermelons');
console.log(fruits)