document.getElementById('inputForm').addEventListener('submit', function(event) {
   event.preventDefault();

   // Отримання значень з інпутів
   const input1 = document.getElementById('input1').value;
   const input2 = document.getElementById('input2').value;
   const input3 = document.getElementById('input3').value;

   // Зберігання рядків у масив
   const strings = [input1, input2, input3];

   // Перемішування масиву у випадковому порядку
   strings.sort(() => Math.random() - 0.5);

   // Виведення перемішаних рядків за допомогою шаблонних рядків
   const output = `Random order: ${strings[0]}, ${strings[1]}, ${strings[2]}`;

   // Виведення результату в HTML
   document.getElementById('output').innerText = output;
});