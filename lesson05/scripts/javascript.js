const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){ 
    if (input.value !==''){
        let li = document.createElement("li");
        let deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = 'X';
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });
    }

    else{
        alert("This is blank");
    }        

});

input.focus();
input.value ='';




                                        