class BankAccount {
   
   constructor(initialBalance) {
       this.balance = initialBalance;
   }

  
   getBalance() {
       return this.balance;
   }

 
   deposit(amount) {
       if (amount > 0) {
           this.balance += amount;
       } else {
           console.log("Amount must be positive");
       }
   }

 
   withdraw(amount) {
       if (amount > 0 && amount <= this.balance) {
           this.balance -= amount;
       } else if (amount > this.balance) {
           console.log("Insufficient funds");
       } else {
           console.log("Amount must be positive");
       }
   }
}


const account1 = new BankAccount(1000);

console.log(account1.getBalance()); 

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance()); 
