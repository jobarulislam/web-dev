/*const myarray = [10, 209, 32];
console.log(myarray);

console.log(myarray[0]);
myarray[1] = 'ayan';
console.log(myarray[1]);
console.log(myarray);

tArray = [ 100, 'hello', false, [1 , 2], {name: 'arry' , time: 2.30} ];
console.log(tArray[4]);

myarray.push('hey');
console.log(myarray);
myarray.splice(0, 1);
console.log(myarray);

console.log(typeof myarray);
console.log( Array.isArray(myarray));

console.log(tArray.length);
let i = 0;
while(i <= 5){
    console.log(i);
    i++;
}

for(let i = 1; i <=5; i++){
    console.log(i);
}

let randomNumber = 0 ;
while(randomNumber < 0.5){
    randomNumber = Math.random();
}

console.log(randomNumber);

for(let i = 0; i < myarray.length; i++)
{
    console.log(myarray[i]);
}

const num = [2, 3, 5];
let total = 0;
for(let i= 0 ; i  < num.length; i++)
{
    const nums = num[i];
    total = total + nums;
}
console.log(total);
const numDouble = [];
 for(let i = 0; i < 5; i++)
 {
    const nums = i + 1;
    numDouble.push(nums * 2);
 }
 console.log(numDouble);


const todo = [];
rendertodo();
function rendertodo(){
    let todoHTML = '';

    for (let i = 0; i < todo.length; i++)
    {
        const todoname = todo[i];
        const html = `<p>${todoname}</p>`;
        todoHTML = todoHTML + html;
    }

    console.log(todoHTML);
   const show = document.querySelector('.div_show');
   show.innerHTML = todoHTML;
}
function add(){
const addElement = document.querySelector('.input_add');
const name = addElement.value;
todo.push(name);
console.log(todo);

addElement.value = '';
rendertodo();
}*/
// part 2 of arrays and loops
const todo = [{name : '', duedate:''}];
rendertodo();
function rendertodo(){
    let todoHTML = '';

    for (let i = 1; i < todo.length; i++)
    {
        const todoObject = todo[i];
        const name = todoObject.name;
        const duedate = todoObject.duedate;
        //const {name , duedate} = todoObject;
        const html = `
        <div class="name">${name}</div>
        <div class="duedate">${duedate}</div> 
        <button class="delete"
        onclick="todo.splice(${i}, 1);
        rendertodo();
        ">Delete</button>`;
        todoHTML = todoHTML + html;
    }
   const show = document.querySelector('.div_show');
   show.innerHTML = todoHTML;
}
function add(){
const inputText = document.querySelector('.input_text');
const name = inputText.value;
const inputdate = document.querySelector('.input_date');
const duedate  = inputdate.value;
todo.push({name : name , duedate : duedate});

inputText.value = '';
inputdate.value = '';
rendertodo();
}

//arrays refarence
const array1 = [1, 3, 4];
const array2 = array1.slice();
array2.push(5);
console.log(array2);
console.log(array1);

//destructuring
const array3 = [1, 3, 3];
const [fast , secend] =[1, 2, 3]; 
console.log(secend);

//breck and contiune method on loops
for (let i = 0 ;  i<= 10 ; i++){
    if(i % 5 === 0 ){
        continue;
    }
    console.log(i);
    if (i=== 7){
        break;
    }
}
console.log("while loop");
let j = 0 ;
while(j <= 10){
    if(j % 3 === 0){
        j++;
        continue;
    }
    console.log(j);
    j++;
}
function numDouble(nums){
const numDouble = [];
 for(let i = 0; i < nums.length; i++)
 {
    const num = nums[i];
    if (num === 0){
        //break;
        return numDouble;
    }
    numDouble.push(num * 2);
 }
 return numDouble;
}

console.log(numDouble([13,2,3,0,4]));

