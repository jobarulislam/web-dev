const myarray = [10, 209, 32];
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
}
