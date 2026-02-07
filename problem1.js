
const currentPrice = 1200;
const discount = 40;


function newPrice(currentPrice, discount) {
    if(typeof currentPrice === "number" && typeof discount === "number" && discount > 0  && discount < 100){
    const totalDiscount = (currentPrice * discount) / 100
    const totalPrice = (currentPrice - totalDiscount).toFixed(3);
    return totalPrice;
    }
    else{
        return "Invalid"
    }
}


// output here
const result1 = newPrice(currentPrice, discount);
console.log(result1); 