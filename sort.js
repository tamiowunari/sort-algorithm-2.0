function compareSold(colaA, colaB){
    return colaA.sold - colaB.sold;
}
function compareName(colaA, colaB){
   if(colaA.name > colaB.name){ return 1; }
   else if(colaA.name == colaB.name){ return 0; }
   else{ return -1; }
}
function compareCalories(colaA, colaB){
    return colaA.calories - colaB.calories;
}
function compareColors(colaA, colaB){
    if(colaA.color > colaB.color){ return 1; }
    else if(colaA.color == colaB.color){ return 0; }
    else{ return -1; }
}
function printProducts(products){
    for(i=0; i < products.length; i++){
        console.log(`Name: ${products[i].name}, calories: ${products[i].calories}, color: ${products[i].color}, sold: ${products[i].sold}`);
    }
}


let products = [ 
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

products.sort(compareSold);
console.log(`Products sorted by bottles sold: `);
printProducts(products);

products.sort(compareCalories);
console.log(`
Products sorted by calories: `);
printProducts(products);

products.sort(compareName);
console.log(`
Products sorted by name: `);
printProducts(products);

products.sort(compareColors);
console.log(`
Products sorted by colors: `);
printProducts(products);
