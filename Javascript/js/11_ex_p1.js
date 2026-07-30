const stringArray = [ 'hello' , 'world', 'search', 'good'];
const secendArray = [ 'not', 'found'];
const input = document.querySelector('.input');
function search(){  
    const elementInput = input.value; 
    let found = false;
    for(let i = 0; i< stringArray.length; i++){
    const word = stringArray[i];
    if (word === elementInput){
        console.log(elementInput);
        console.log(i);
        found = true;
        break;
    }
    
}

if(!found){
        console.log(secendArray);
    }
 input.value ='';
}

input.addEventListener('keydown', function (event){
    if (event.key === 'Enter'){
        search();
    }
});

//---11q---
const array =['green', 'black', 'blue', 'red'];
function findIndex(array , word){
    for (let i = 0; i < array.length; i++){
    
        if (word === array[i]){
            console.log(i);
            return i;
        }
        
    }
    console.log(-1)
            return -1;

}
