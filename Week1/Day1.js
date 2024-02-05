/** @var
 * you can redeclare
 * var name = 'jane'
 * var name = 'john'
 * you can reassign a variable
 * var name = 'jane'
 * name= 'john'
 *
 */

/** @let
 * you can't redeclare
 * you can reassign
 * let name = 'jane'
 * name = 'john'
 * 
 */

/** @const
 * you can't redeclare
 * you can't reassign
 * 
 */

// DATA TYPES
/**PRIMATIVE DATA TYPES
 * @STRINGS - characters/numbers wrapped in quotes -> 'dan', "dam", '123'
 * @NUMBERS - decimal, whole numbers, negtive numbers -> 1, 1.5, -1
 * @BOOLEANS - true or false
 * @UNDEFINED - no value assigned
 * @NULL - nothing
 */

/**NON-PRIMATIVE DATA TYPES
 * @LISTS - arrays [1,2,3,4,5], ['dan','james','john']
 * @OBJECTS - dictionaries (key/value pairs)
 */

//OPERATORS
/**
 * @ADDITION -> +
 * @SUBTRACTION -> -
 * @DIVISION -> /
 * @MULTIPILICATION -> *
 * @MODULUS -> %
 */

//AREA AND PERIMETER CALCULATIONS
//parseInt
//parseFloat

let length = prompt('length of rectangle?')
let width = prompt('width of rectangle?')

let finallength = parseFloat(length)
let finalwidth = parseFloat(width)

let area = finallength * finalwidth
let perimeter = 2 * (finallength + finalwidth)
console.log(finallength)
console.log(finalwidth)

console.log("area")
console.log(area)
console.log("perimeter")
console.log(perimeter)
/**
 * @NamingRules
 * Pascal Case- ThisIsPascalCase
 * CamelCase- thisIsCamelCase
 * Snake_Case- this_is_snake_case
 * Kebab-Case-this-is-kebab-case
 */
