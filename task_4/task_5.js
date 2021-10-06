let example_2 = [
0 == null, /* № 1 
результат false
Case 
<object vs <string>, <number>, <symbol>>
0 - false
null falsy  
*/
null == undefined,/* №2
результат true
case   null == undefined -> return true
*/
1 == {}, /* № 3 
результат  false
case 
<object vs <string>, <number>, <symbol>>
{} Toprimitive  "[object Object]"
case  <number> == <string>  
toNamber "[object Object]" -> NaN -> fasle 
Итого true -- false


*/
{} == 1,/* № 4
результат false 
case 
<object vs <string>, <number>, <symbol>>
{} Toprimitive -> valueOf() = [object Object] ->  ToNamber ->  NaN -> false 
fasle -- 1 (true) 
*/ 


({}) == 1, /* № 5 
результат false
case 
<object vs <string>, <number>, <symbol>> 
({}) Toprimitive -> valueOf() = [object Object] ->  ToNamber ->  NaN -> false 
fasle -- 1 true 
*/

({toString: () => '12'}) == 12 /* № 6 
результат true
Case 
<object vs <string>, <number>, <symbol>>
({toString: () => '12'}) ToPrimitiv ->  valueOf() = 12 
12 = 12 true
*/
]

console.log("-----------------")

let number = 0 ; 
let task_5 = function show(value) {
     number++;
    console.log("example " + number + " = "+ value )
 
}

example_2.forEach(element => task_5(element));


let v = ({}); 

console.log("typeOff v.valueOf() = " + typeof(v) );
/* console.log("toPromitive = " + ToPrimitive(v, number)) */
console.log("valueOf() = " + v.valueOf() )
console.log("ToNamber = " + Number(v) )

if (v){
    console.log("v = true" )
} else {console.log("v = false" )}

