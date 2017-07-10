var shoppingList = [];

var total = 0;

function add(item){
  shoppingList.push(item);
}

var total = 0;
var createP = document.createElement('p');
function clickToAdd(){

var groceryName = document.getElementById("item-name").value;
  console.log(groceryName);
  var groceryPrice = parseFloat(document.getElementById("item-price").value);
  console.log(groceryPrice);


var container = document.createElement("ul");
  document.body.appendChild(container);

var para = document.createElement('li');
    para.innerText = (groceryName +  ' - $ '+ groceryPrice.toFixed(2));
    container.appendChild(para);
total += groceryPrice;
console.log(total);

var final = document.getElementById('finalNum');

 createP.innerText = total.toFixed(2);
  final.appendChild(createP);
};
