const userNumber = parseInt(prompt('Введіть ціле число до 100'));

if (!isNaN(userNumber)) { 
    for (let i = 1; i <= 100; i++) {
        let square = i * i;
        if (square <= userNumber) {
            console.log(i);
        } else {
            break; 
        }
    }
} else {
    console.log('Введене значення не є числом.');
}
