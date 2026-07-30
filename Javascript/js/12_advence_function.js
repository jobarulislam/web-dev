/*    function greeting(){
        console.log('hello');
    }
    greeting();
    const num =2;
    const function1 = function(){ 
        console.log('hello2');

    };
    console.log(function1);
    console.log(typeof function1);
    function1();

    const object1 ={
    num : 2,
    fun : function(){console.log('hello3');}
    };

    object1.fun();

    function display(param){
        console.log(param);
    }

    display(2);

    function run(pra){
    pra();
    }
    run(function(){
    console.log('hello4');
    });

    setTimeout(function(){
        console.log('timeout');
        console.log('timeout2');
    }, 2000);
    console.log('next line');

    setInterval(function(){console.log('interval')}, 3000);

    console.log ('the');
   [
    'make dinner',
    'wash dishes',
    'watch tv'
   ].forEach(function(value, index){
    if(value === 'wash dishes'){return;}
    console.log(index);
    console.log(value); 
   });

   //arrow function
   const arrowfunction = (p1, p2) => {
    console.log(p1);
    console.log(p2 + 1);
    return 5;
    };
    arrowfunction('i' ,3);

    const oneParm = parm => {
        console.log(parm + 1);
    };
    oneParm('hello');

    const oneline = ()=> 2+3;
    console.log(oneline());

    const object2 = {
        method : () => {

        },
        method(){

        }
    };

const buttonElement = document.querySelector('.js-button');

const eventL = () => {console.log('click')};
buttonElement.addEventListener('click', eventL);

buttonElement.removeEventListener('click', eventL);
buttonElement.addEventListener('click', ()=>{
    console.log('hello');
});*/

const a = [1 , -3, 5].filter((value, index)=>{
   /* if(value >=0){
        return true;
    }
    else{
        return false;
    }*/
   return value >=0;
});
console.log(a);

const b = [11, 12,32].map((value, index)=>{
    return value + 10;
});
console.log(b);

const c = [11, 12,32].map(value => value + 10);
console.log(c);