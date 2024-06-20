
let user = {
   name: "John",
   age: 30,
   city: "Kyiv",
   country: "Ukraine",
   

  
   getUserInfo: function() {
       return `Name: ${this.name}\nAge: ${this.age}\nCity: ${this.city}`;
   }
};


console.log(user.getUserInfo());
