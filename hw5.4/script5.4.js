const number = parseInt(prompt('Введіть ціле число:'));

if (!isNaN(number)) {
    if (number <= 1) {
        console.log('Число не є простим.');
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log('Число є простим.');
        } else {
            console.log('Число не є простим.');
        }
    }
} else {
    console.log('Введене значення не є числом.');
}
