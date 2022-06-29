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

function getUniquePrducts()
{
   
var tv_quantity = 0;
var ac_quantity = 0;
var fan_quantity = 0;


    for(let i=0;i<listOfProducts.length;i++)
    {
     if(listOfProducts[i].productName == "TV"){
        tv_quantity += listOfProducts[i].quantity;
     }
     else if(listOfProducts[i].productName=="AC")
     {
         ac_quantity+=listOfProducts[i].quantity;
     }
     else
     {
         fan_quantity+=listOfProducts[i].quantity;
     }
    }

   var obj=[
       ...new Map(listOfProducts.map((l)=>[l["productName"],l])).values(),
   ];

   for(var i=0;i<obj.length;i++)
   {
  if(obj[i].productName=="TV")
  {
    obj[i].quantity=tv_quantity;
  }
  else if(obj[i].productName=="AC")
  {
    obj[i].quantity=ac_quantity;
  }
  else{
    obj[i].quantity=fan_quantity;
  }
   }
    
   console.log(obj);
}
getUniquePrducts();