//Javascript document

let productChoose = document.querySelector('select');

//making the url to select the defined text files.
function updateDisplay(product) {
	product = product.replace(" ", "_");
	product = product.toLowerCase();
    let url = product + ".txt";
}

//updating the display while choosing a product.
productChoose.onchange = function() {
	let product = productChoose.value;
	updateDisplay(product);
};

//fetching the data from text files.
fetch(url).then(function(response) {
    response.text().then(function(text) {
       console.log (text);                  
    });  
  }); 
    
updateDisplay('Product 1');
productChoose.value = 'Product 1';