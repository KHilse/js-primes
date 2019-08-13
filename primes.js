function isPrime(num) {
	// Special cases
	if (num < 1) { return false; }
	if (num === 2) { return true; }

	// 2) Iterate through to the square root of num
	// 		a) Check if the number is evenly divisible by the iterator
	//		b) If it is, it isn't prime
	//		c) If we complete the loop without finding a divisor, it is prime

	var checkMax = Math.max(2, Math.floor(Math.sqrt(num)));
	//console.log(`${checkMax - 1} iterations required`);
	for (var i = 2; i <= checkMax; i++) {
		if ((num % i) == 0) {
			return false;
		}
	}
	return true;
}

console.log("1:", isPrime(1));
console.log("2:", isPrime(2));
console.log("3:", isPrime(3));
console.log("4:", isPrime(4));
console.log("5:", isPrime(5));
console.log("31:", isPrime(31));
console.log("51:", isPrime(51));
console.log("3191", isPrime(3191));
console.log("3195", isPrime(3195));
console.log("65535", isPrime(65535));

function getPrimes(num) {
	var result = [];
	for (var i = 2; i <= num; i++) {
		if (isPrime(i)) {
			result.push(i);
		}
	}
	return result;
}

console.log("Primes under 23", getPrimes(23));
console.log("Primes under 230000", getPrimes(230000).length);