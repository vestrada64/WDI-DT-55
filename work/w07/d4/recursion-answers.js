// Exercise A1

function sumDigits(n) {

	if (n < 10) {
		return n	
	}

	return n%10 + sumDigits(Math.floor(n/10))

}

console.log(sumDigits(198))
console.log(sumDigits(78))

// Exercise A2

function pow(base, power) {
	
	if (power === 1) {
		return base
	}

	return base * pow(base, power-1)	
	
}

console.log(pow(2,3))
