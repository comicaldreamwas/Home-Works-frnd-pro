
let contactBook = {
   contacts: [
       { name: "John", phone: "1234567890", email: "john@.com" },
       { name: "Jane", phone: "9876543210", email: "jane@.com" },
   ],

   
   findContactByName: function(name) {
       return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
   },

  
   addContact: function(name, phone, email) {
       this.contacts.push({ name: name, phone: phone, email: email });
   }
};


contactBook.addContact("Alice", "5551234567", "alice@.com");


let foundContact = contactBook.findContactByName("Alice");


console.log(foundContact);


console.log(contactBook.contacts);
