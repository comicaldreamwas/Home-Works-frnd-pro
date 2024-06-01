const dolarPrise = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    let hryvnas = dollars * dolarPrise;
    console.log(`${dollars} dollars = ${hryvnas} hryvnias`);
}
