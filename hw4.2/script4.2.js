let userNumber;
do {
    userNumber = prompt("Введіть тризначне число:");
    if (userNumber === null) {
        alert("Ви скасували введення.");
        break;
    }
} while (userNumber.length !== 3 || isNaN(userNumber));


if (userNumber !== null) {
    const number = userNumber.split('').map(Number);

   
    const allSame = number[0] === number[1] && number[1] === number[2];

    

    
    alert(`Всі цифри однакові: ${allSame}`);
}