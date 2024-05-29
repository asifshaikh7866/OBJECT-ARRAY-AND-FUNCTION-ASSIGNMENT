var inventory = [];
var product1 = {
    name: "Honda CD125",
    model: "2023",
    cost: 240990,
    quantity: 50,
};
var product2 = {
    name: "Printer",
    model: "2022",
    cost: 300000,
    quantity: 800,
};
var product3 = {
    name: "Honda Civic",
    model: "2024",
    cost: 4500000,
    quantity: 15
};
inventory = [product1, product2, product3];
console.log(inventory);
var accessThirdProperty = [inventory[2].quantity];
console.log(accessThirdProperty);
var newProduct = {
    name: "Laptop",
    model: "New",
    cost: 65000,
    quantity: 70,
};
;
var updatedInventory = [product1, product2, product3, newProduct];
console.log(updatedInventory);
var accessSecondProperty = [updatedInventory[1].name];
console.log(accessSecondProperty);
