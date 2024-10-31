function getPrimeFactors(num) {
    const factors = new Set();
    let divisor = 2;

    while (num >= 2) {
        if (num % divisor === 0) {
            factors.add(divisor);
            num /= divisor;
        } else {
            divisor++;
        }
    }
    // console.log("factors 🍔 : ", Array.from(factors));
    
    return Array.from(factors);
}

function checkPrimeFactors(num, count) {
    return getPrimeFactors(num).length === count;
}

function findPrimeFactorCount(count) {
    let number = 2;
    while(true)  {
        const first = checkPrimeFactors(number, count);
        const second = checkPrimeFactors(number + 1, count);
        const third = checkPrimeFactors(number + 2, count);
        const fourth = checkPrimeFactors(number + 3, count);
        if (first && second && third && fourth) {
            return number;
        }
        number++;
    }
}

const main = () => {
    const primeFactors = 4
    const result = findPrimeFactorCount(primeFactors);
    console.log("result 🥳 : ", result);
    
};

main()

module.exports = { getPrimeFactors, checkPrimeFactors, findPrimeFactorCount };