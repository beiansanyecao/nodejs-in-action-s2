// currency.js

const canadianDollar = 0.91;

roundTwo = (amount) => {
    return Math.round(amount * 100) / 100;
}

exports.canadianToUS = canadian => roundTwo(canadian * canadianDollar);
exports.USToCanadian = us => roundTwo(us / canadianDollar);