let example_2 = [
0 == null, /* № 1 
result false
Case 
<object vs <string>, <number>, <symbol>>
0 - false
null falsy  
*/
null == undefined,/* №2
result true
case   null == undefined -> return true
*/
1 == {}, /* № 3 
result false
case 
<object vs <string>, <number>, <symbol>>
{} ToPrimitive  "[object Object]"
case  <number> == <string>  
toNamber "[object Object]" -> NaN -> fasle 
 true -- false (false)


*/
{} == 1,/* № 4
resultfalse 
case 
<object vs <string>, <number>, <symbol>>
{} Toprimitive -> valueOf() = [object Object] ->  ToNamber ->  NaN -> false 
fasle -- 1 (true) 
*/ 


({}) == 1, /* № 5 
result false
case 
<object vs <string>, <number>, <symbol>> 
({}) Toprimitive -> valueOf() = [object Object] ->  ToNamber ->  NaN -> false 
fasle -- 1  (false)
*/

({toString: () => '12'}) == 12 /* № 6 
result true
Case 
<object vs <string>, <number>, <symbol>>
({toString: () => '12'}) ToPrimitiv ->  valueOf() = 12 
12 = 12 (true)
*/
]

console.log("----------------- task_5 ")

let number = 0 ; 
let task_5 = function show(value) {
     number++;
    console.log("example " + number + " = "+ value )
 
}

example_2.forEach(element => task_5(element));


let v = ({}); 

console.log("typeOff v.valueOf() = " + typeof(v) );
console.log("valueOf() = " + v.valueOf() )
console.log("ToNamber = " + Number(v) )

if (v){
    console.log("v = true" )
} else {console.log("v = false" )}

