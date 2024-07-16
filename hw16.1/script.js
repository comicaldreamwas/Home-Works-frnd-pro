class Student {
   constructor(firstName, lastName, birthYear) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.birthYear = birthYear;
       this.grades = [];
       this.attendance = new Array(25).fill(null);
   }

   getAge() {
       const currentYear = new Date().getFullYear();
       return currentYear - this.birthYear;
   }

   getAverageGrade() {
       if (this.grades.length === 0) {
           return 0;
       }
       const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
       return sum / this.grades.length;
   }

   present() {
       const index = this.attendance.indexOf(null);
       if (index !== -1) {
           this.attendance[index] = true;
       }
   }

   absent() {
       const index = this.attendance.indexOf(null);
       if (index !== -1) {
           this.attendance[index] = false;
       }
   }

   summary() {
       const averageGrade = this.getAverageGrade();
       const attendanceCount = this.attendance.filter(status => status === true).length;
       const attendanceRatio = attendanceCount / 25;

       if (averageGrade > 90 && attendanceRatio > 0.9) {
           return "Молодець!";
       } else if (averageGrade > 90 || attendanceRatio > 0.9) {
           return "Добре, але можна краще";
       } else {
           return "Редиска!";
       }
   }
}


const student1 = new Student("John", "Doe", 2000);
const student2 = new Student("Alice", "Smith", 1999);


student1.grades = [95, 88, 92, 85, 94];
student2.grades = [78, 85, 82, 80, 79];


for (let i = 0; i < 20; i++) {
   student1.present();
}
for (let i = 0; i < 15; i++) {
   student2.present();
}
for (let i = 0; i < 5; i++) {
   student2.absent();
}


console.log(`Вік студента ${student1.firstName} ${student1.lastName}:`, student1.getAge());
console.log(`Середній бал студента ${student1.firstName} ${student1.lastName}:`, student1.getAverageGrade());
console.log(`Відвідуваність студента ${student1.firstName} ${student1.lastName}:`, student1.attendance);
console.log(`Результат студента ${student1.firstName} ${student1.lastName}:`, student1.summary());

console.log(`Вік студента ${student2.firstName} ${student2.lastName}:`, student2.getAge());
console.log(`Середній бал студента ${student2.firstName} ${student2.lastName}:`, student2.getAverageGrade());
console.log(`Відвідуваність студента ${student2.firstName} ${student2.lastName}:`, student2.attendance);
console.log(`Результат студента ${student2.firstName} ${student2.lastName}:`, student2.summary());
