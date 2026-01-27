//start of script.js 


let inventory = [];


function findProductIndex(productName) {
  let lowerName = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerName) {
      return i;
    }
  }
  return -1;
}


function addProduct(product) {
  let lowerName = product.name.toLowerCase();
  let index = findProductIndex(lowerName);

  if (index !== -1) {
    
    inventory[index].quantity += product.quantity;
    console.log(`${lowerName} quantity updated`);
  } else {
   
    inventory.push({ name: lowerName, quantity: product.quantity });
    console.log(`${lowerName} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  let lowerName = productName.toLowerCase();
  let index = findProductIndex(lowerName);

  if (index === -1) {
    console.log(`${lowerName} not found`);
    return;
  }

  let product = inventory[index];

  if (product.quantity < quantity) {
    console.log(`Not enough ${lowerName} available, remaining pieces: ${product.quantity}`);
  } else {
    product.quantity -= quantity;

    if (product.quantity === 0) {
      inventory.splice(index, 1);
    } else {
      console.log(`Remaining ${lowerName} pieces: ${product.quantity}`);
    }
  }
}

addProduct({name: "flour", quantity: 20}); 
addProduct({name: "rice", quantity: 5});

console.log(findProductIndex("flour"));  
console.log(findProductIndex("FloUr")); 
console.log(findProductIndex("FlourX"));

addProduct({name: "FLOUR", quantity: 5});
addProduct({name: "sugar", quantity: 10});

removeProduct("oil", 5);
removeProduct("FLOUR", 5);
removeProduct("rice", 5);
removeProduct("sugar", 15);


//end of script.js

