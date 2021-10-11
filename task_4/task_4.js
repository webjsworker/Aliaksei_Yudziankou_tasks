
console.log("------------task_4")
let example_1 =[ 
1 - '0' + 2, /* №1
result: 3. 
priority of operations: + and - has the same value 13 
Associativity: left to right
data type:  
1   - number 
'0' - string
2   - number; 
Number + string addition (implicit type conversion)
The unary negation operator converts its operand to a numeric type.'0' -> 0 
1+0+2=3
*/
1 - '-0' + 2, /* № 2 
result: 3. 
priority of operations: + and - has the same value 13 
Associativity: left to right
data type::  
1   -   number 
'-0' -  string
2   -   number; 
Number + string addition (implicit type conversion)
The unary negation operator converts its operand to a numeric type.'-0' -> 0 
1-0+2=3
*/
1 - '-0-' + 'NaN', /* № 3
result: NaNNaN.
priority of operations: + and - has the same value 13  
Associativity: left to right
data type:: 
1     - number;
'-0-' - string;
'NaN' - string
The unary +/- operator converts its operand to a numeric type. 
'-0-' -> NaN
'NaN' -> NaN 
1- NaN + NaN -> NaNNaN
*/
'b' + [NaN + 'ba', 'CC'] - {}, /* № 4
result: NaN
priority of operations: + and - has the same value 13  
Associativity: left to right
data type::
'b' - string
NaN - number NaN
'ba'- string
'CC'- string
{}  - number NaN
The unary +/- operator converts its operand to a numeric type. 
'b' -> number NaN
NaN -> number NaN
'ba'-> number NaN
'CC'-> number NaN
{}  -> number NaN
*/
[] + (()=>{}), /* № 5 
result: ()=>{}
priority of operations: + and - has the same value 13  
Associativity: left to right
data type:
[]       -  0    number ;
(()=>{}) -  ()=>{} the result of the automatic call to valueOf; 
concatenation 
0 and ()=>{} 
*/
[] + (()=>({})), /* № 6 
result: ()=>({})
priority of operations: + and - has the same value 13  
Associativity: left to right
data type: 
[]       -  0    number ;
(()=>({}))  - ()=>({}) the result of the automatic call to valueOf;
concatenation 0 and ()=>({})
*/
[] + (()=>({}))(), /* № 7 
result: [object Object]
priority of operations: + and - has the same value 13  
Associativity: left to right
data type: 
[]       -  0    number ;
(()=>({}))() - [object Object] the result of the automatic call to valueOf;
concatenation 0 and [object Object]
 */
[] + (() => new Object(123))(), /* № 8 
result: 123
priority of operations: + and - has the same value 13  
Associativity: left to right
data type: 
[]       -  0    number ;
(() => new Object(123))() - 123 the result of the automatic call to valueOf; 
concatenation 0 and 123  (string)
 */
{} + (() => new Object(123))(), /* № 9 
result: [object Object]123
priority of operations: + and - has the same value 13  
Associativity: left to right
data type: 
{} -  [object Object]   the result of the automatic call to valueOf; 
(() => new Object(123))()        - 123  the result of the automatic call to valueOf;
concatenation [object Object] and  123 
*/
(() => new Object(123))() + {}, /* № 10 
result:  123[object Object]
priority of operations: + and - has the same value 13  
Associativity: left to right
data type: 
(() => new Object(123))() - 123  the result of the automatic call to valueOf;
{} -  [object Object]   the result of the automatic call to valueOf; 
concatenation 123 and [object Object]  123[object Object] 
*/
({}).valueOf() + 1, /* № 11 
result: [object Object]1 
call result ({}).valueOf() - [object Object] 
concatenation 
[object Object] and 1
*/
{} + 2, /* № 12 
result: [object Object]2
data type:
{} -  [object Object]  - the result of the automatic call to valueOf; 
2 - number 
concatenation 
[object Object] and 2 
*/
typeof ({}).valueOf() + 2, /* № 13 
result: object2 
call result  typeof ({}) -[object Object]  
JavaScript automaticand calls valueOf when an object is detected, when a primitive value is expected. 
call result [object Object].valueOf() - object
object + 2 ->  object2 
*/
+{}, /* № 14 
result: NaN
priority of operations: + and - has the same value 13  
Associativity: left to right
data type: 
{} -  [object Object]  - the result of the automatic call to valueOf; 
The unary +/- operator converts its operand to a numeric type.
+{} -> NaN 
*/
+{}+[], /* № 15 
result: NaN 
priority of operations: + and - has the same value 13 
Associativity: left to right
data type:: 
{}  - [object Object]; the result of the automatic call to valueOf; 
[]  - 0 
The unary +/- operator converts its operand to a numeric type.
+{} -> NaN
+[] -> 0  
concatenation 
NaN + 0 -> NaN 
*/
+[], /* № 16
result: 0 
priority of operations: + and - has the same value 13 
Associativity: left to right
data type::
[] - number 
The unary +/- operator converts its operand to a numeric type.
[] -> 0 

*/
+[]+{}, /* № 17 
result: 0[object Object]
priority of operations: + and - has the same value 13 
Associativity: left to right
data type::
[] - 0 number;
{} - [object Object]  the result of the automatic call to valueOf; ; 
concatenation  
0  and [object Object];

*/
+[10, 1]+{}, /* №18
result: NaN[object Object]
priority of operations: + and - has the same value 13 
Associativity: left to right
data type::
+[10, 1] - NaN; 
{}       - [object Object]; 
concatenation  
NaN and [object Object];
*/
{} + [10] /* № 19 
result: [object Object]10
priority of operations: + and - has the same value 13 
Associativity: left to right
data type::
{}     -[object Object] ;  number NaN
[10]   - number      
The unary +/- operator converts its operand to a numeric type.
[10] -> 10
concatenation  
[object Object] and  10
*/
] 


let numberOfExample = 0 ; 
let task_4 = function show(value) {
     numberOfExample++;
    console.log("example " + numberOfExample + " = "+value + " typeOf = " + typeof(value))
    
}


example_1.forEach(element => task_4(element));


let a = (()=>{});
console.log("typeOf = "+ a+ " = " + typeof(a));

let b = (()=>{}) ;
console.log("b = "+ b + "; Number(b) = " +Number(b) +  "; typeof b = " + typeof(Number(b)))

let c = (() => new Object(123))();
console.log("valueOf() = " + c.valueOf() )