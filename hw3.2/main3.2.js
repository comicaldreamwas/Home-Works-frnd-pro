document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;

    const strings = [input1, input2, input3];

    strings.sort(() => Math.random() - 0.5);

    const output = `Random order: ${strings[0]}, ${strings[1]}, ${strings[2]}`;

    document.getElementById("output").innerText = output;
  });
