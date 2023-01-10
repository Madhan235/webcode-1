var main_div = document.createElement('div');
main_div.setAttribute('class', 'container text-center');
main_div.setAttribute('box-sizing', 'border-box');
document.body.appendChild(main_div);


var input_bar = document.createElement('input')
input_bar.setAttribute('type', 'text')
input_bar.setAttribute('placeholder','Enter your name')
input_bar.setAttribute('id', 'getUsername');
main_div.appendChild(input_bar);

var input_val = document.getElementById('getUsername').value;
 input_val.required = true;



var submit_button = document.createElement('button')
submit_button.setAttribute('type', 'submit')
submit_button.setAttribute('class','btn-primary btn-lg')
submit_button.textContent = 'Submit'
submit_button.setAttribute('onclick', 'details()')
main_div.appendChild(submit_button);





 async function details(){
 var url = await fetch(`https://api.nationalize.io?name=${input_val}`);
    var fetch_url = await url.json();

var result = document.createElement('div')
result.setAttribute('class','container text-center')
result.textContent = `Details : ${fetch_url}`;
document.body.appendChild(result);
   } 
 


