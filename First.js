const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


function getUniqueProductCount()
{
let tv=0;
let ac=0;
let fan=0;
for(let i=0;i<listOfProducts.length;i++)
{
if(listOfProducts[i].productName==="TV")
{
tv++;
}
else if(listOfProducts[i].productName==="AC")
{
ac++;
}
else
{
fan++;
}
}

let obj={
    "TV":tv,
    "AC":ac,
    "FAN":fan
}
let obj1=Object.assign({},obj);
console.log(JSON.stringify(obj1));
}

getUniqueProductCount();