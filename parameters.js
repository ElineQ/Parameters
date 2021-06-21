

const the_age = function (number) {
    console.log('enter age');
    if (number >= 18) {
        console.log('hello there');
    }
    else (number <= 18) {
        console.log('hello kiddo');
    }

};

const PriceProduct = function (number) {
    console.log("Product price");
    if (number) {
        return Math.abs(number);
    }
    return number;
};

const PriceToPay = function (number) {
    console.log("Price");
    if (number * 0.21) {
        return number;
    }
    return number * origin
};

const VAT = function (number) {
    console.log("Tax");
    return number - origin;
};

const ShowVAT = function (number) {
    console.log("How mutch is the VAT");
    const PriceProduct = PriceProduct(number);
    const PriceToPay = PriceToPay(FullNumber);
    const VAT = VAT(Tax);
    return Tax;
};

console.log(doComplexCalculation());