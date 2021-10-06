let example_1 =[ 
1 - '0' + 2, /* №1
результат 3. 
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данный  
1   - number 
'0' - string
2   - number; 
Сложение number + string (неявное преобразование типов) 
Оператор унарного отрицания преобразует свой операнд в числовой тип. '0' -> 0 
1+0+2=3
*/
1 - '-0' + 2, /* № 2 
результат 3. 
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данный:  
1   -   number 
'-0' -  string
2   -   number; 
Сложение number + string (неявное преобразование типов) 
Оператор унарного отрицания преобразует свой операнд в числовой тип. '-0' -> 0 
1-0+2=3
*/
1 - '-0-' + 'NaN', /* № 3
результат NaNNaN.
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данный: 
1     - number;
'-0-' - string;
'NaN' - string
Оператор унарного +/- преобразует свой операнд в числовой тип. 
'-0-' -> NaN
'NaN' -> NaN 
1- NaN + NaN -> NaNNaN
*/
'b' + [NaN + 'ba', 'CC'] - {}, /* № 4
результат NaN
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данный:
'b' - string
NaN - number NaN
'ba'- string
'CC'- string
{}  - number NaN
Оператор унарного +/- преобразует свой операнд в числовой тип. 
'b' -> number NaN
NaN -> number NaN
'ba'-> number NaN
'CC'-> number NaN
{}  -> number NaN
*/
[] + (()=>{}), /* № 5 
результат ()=>{}
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данных:
[]       -  0    number ;
(()=>{}) -  ()=>{} результат автоматического вызова valueOf; 
Конкатенация 
0 и ()=>{} 
*/
[] + (()=>({})), /* № 6 
Результат ()=>({})
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данных: 
[]       -  0    number ;
(()=>({}))  - ()=>({}) результат автоматического вызова valueOf;
конкатенация 0 и ()=>({})
*/
[] + (()=>({}))(), /* № 7 
результат [object Object]
 приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данных: 
[]       -  0    number ;
(()=>({}))() - [object Object] результат автоматического вызова valueOf;
конкатенация 0 и [object Object]
 */
[] + (() => new Object(123))(), /* № 8 
результат 123
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данных: 
[]       -  0    number ;
(() => new Object(123))() - 123 результат автоматического вызова valueOf; 
конкатенация 0 и 123  (string)
 */
{} + (() => new Object(123))(), /* № 9 
результат [object Object]123
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данных: 
{} -  [object Object]   результат автоматического вызова valueOf; 
(() => new Object(123))()        - 123  результат автоматического вызова valueOf;
конкатенация [object Object] и  123 
*/
(() => new Object(123))() + {}, /* № 10 
результат 
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данных: 
(() => new Object(123))() - 123  результат автоматического вызова valueOf;
{} -  [object Object]   результат автоматического вызова valueOf; 
конкатенация 123 и [object Object]  123[object Object] 
*/
({}).valueOf() + 1, /* № 11 
результат [object Object]1 
езультат вызова ({}).valueOf() - [object Object] 
Конкатенация 
[object Object] и 1
*/
{} + 2, /* № 12 
результат [object Object]2
тип данных:
{} -  [object Object]  - результат автоматического вызова valueOf; 
2 - number 
Конкатенация 
[object Object] и 2 
*/
typeof ({}).valueOf() + 2, /* № 13 
результат object2 
результат вызова  typeof ({}) -[object Object]  
JavaScript автоматически вызывает valueOf при обнаружении объекта, когда ожидается примитивное значение. 
результат вызова [object Object].valueOf() - object
object + 2 ->  object2 
*/
+{}, /* № 14 
результат NaN
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данных: 
{} -  [object Object]  - результат автоматического вызова valueOf; 
Оператор унарного +/- преобразует свой операнд в числовой тип.
+{} -> NaN 
*/
+{}+[], /* № 15 
результат NaN 
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данный: 
{}  - [object Object]; результат автоматического вызова valueOf; 
[]  - 0 
Оператор унарного +/- преобразует свой операнд в числовой тип.
+{} -> NaN
+[] -> 0  
Конкатенация 
NaN + 0 -> NaN 
*/
+[], /* № 16
результат 0 
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данный:
[] - number 
Оператор унарного +/- преобразует свой операнд в числовой тип.
[] -> 0 

*/
+[]+{}, /* № 17 
результат 0[object Object]
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данный:
[] - 0 number;
{} - [object Object]  результат автоматического вызова valueOf; ; 
Конкатенация строк 
0  и [object Object];

*/
+[10, 1]+{}, /* №18
результат NaN[object Object]
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данный:
+[10, 1] - NaN; 
{}       - [object Object]; 
Конкатенация строк 
NaN и [object Object];
*/
{} + [10] /* № 19 
результат [object Object]10
приоритет операций: + и - имеет одинакове значение 13 
Ассоциативность: слева направо
тип данный:
{}     -[object Object] ;  number NaN
[10]   - number      
Оператор унарного +/- преобразует свой операнд в числовой тип.
[10] -> 10
Конкатенация строк 
[object Object] и  10
*/
] 


let numberOfExample = 0 ; 
let task_4 = function show(value) {
     numberOfExample++;
    console.log("example " + numberOfExample + " = "+value + " typeOf = " + typeof(value))
    
}
/* 
task_4(example_1); */
example_1.forEach(element => task_4(element));


let a = (()=>{});
console.log("typeOf = "+ a+ " = " + typeof(a));

let b = (()=>{}) ;
console.log("b = "+ b + "; Number(b) = " +Number(b) +  "; typeof b = " + typeof(Number(b)))

let c = (() => new Object(123))();
console.log("valueOf() = " + c.valueOf() )