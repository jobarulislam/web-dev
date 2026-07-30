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
        <div class="js_todo">
        <div class="name">${name}</div>
        <div class="duedate">${duedate}</div> 
        <button class="delete"
        onclick="todo.splice(${i}, 1);
        rendertodo();
        ">Delete</button>
        </div>`;
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
