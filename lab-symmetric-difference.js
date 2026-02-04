//start of script.js

function diffArray(arr1, arr2){
    return arr1.filter(item=>!arr2.includes(item)).concat(arr2.filter(item=>!arr1.includes(item)));
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));

console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]));

console.log(diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]));

console.log(diffArray(["apple", "banana"], []));

console.log(diffArray([], []));

//end of script.js

