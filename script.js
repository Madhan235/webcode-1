var main_div = document.createElement('div');
main_div.setAttribute('class', 'container text-center');
main_div.style.boxSizing = 'border-box';
document.body.appendChild(main_div);

  
var input_bar = document.createElement('input');
input_bar.setAttribute('type', 'text');
input_bar.setAttribute('autofocus', 'true');
input_bar.setAttribute('placeholder', 'Enter Any name');
input_bar.setAttribute('id', 'getUsername');

main_div.appendChild(input_bar);

input_bar.required = true;

 
var submit_button = document.createElement('button');
submit_button.setAttribute('type', 'button');
submit_button.setAttribute('class', 'btn-primary btn-lg');
submit_button.setAttribute('id', 'submit_button');  
 
submit_button.textContent = 'Submit';
submit_button.setAttribute('onclick', 'details()');
main_div.appendChild(submit_button);

 


var resultContainer = document.createElement('div');
resultContainer.setAttribute('class', 'container text-center result');
resultContainer.innerHTML =  `
<p>Count : </p>
<p>Country_id : </p>
<p>Probability : </p>
`
 
document.body.appendChild(resultContainer);

async function details() {
    try {
        var input_val = document.getElementById('getUsername').value.trim();

        if (input_val === "") {
         resultContainer.innerHTML =  `
             <p style="color:rgb(198, 33, 48)"><b>Name Cannot be Empty</b></p>
         `;
         return;
     }
     
        var url = await fetch(`https://api.nationalize.io?name=${input_val}`);
        var fetch_url = await url.json();

        if (Array.isArray(fetch_url.country)) {
            var countryInfo = fetch_url.country.map(item => `
                <p><b>Country Id : ${item.country_id}</b></p>
                <hr/>
                <p><b>Probability : ${item.probability}</b></p>
                <hr/>
            `);

            var countryInfoString = countryInfo.join('');

            resultContainer.innerHTML = `
                <p><b>Count: ${fetch_url.count}</b></p>
                <hr/>
                ${countryInfoString}
            `;
        } else {
            resultContainer.innerHTML = `<p>No country data found</p>`;
        }

        document.body.appendChild(resultContainer);
    } catch (error) {
        console.log(error);
    }
}

 

