document.addEventListener("DOMContentLoaded", () => {
    var input = document.getElementById("input");
    var numbers = document.querySelectorAll(".numbers div");
    var text = document.querySelectorAll(".text div");
    var operations = document.querySelectorAll(".operations div");
    var result = document.getElementById("result");
    var del = document.getElementById("delete");
    var clear = document.getElementById("clear");
    var enter = document.getElementById("enter");
  
    var resultDisplayed = false;
  
    for (var i = 0; i < numbers.length; i++) {
      numbers[i].addEventListener("click", (e) => {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
  
        if (resultDisplayed === false) {
          input.innerHTML += e.target.innerHTML;
        } else if (
          resultDisplayed === true &&
          (lastChar === "+" ||
            lastChar === "-" ||
            lastChar === "%" ||
            lastChar === "√" ||
            lastChar === "x" ||
            lastChar === "÷")
        ) {
          resultDisplayed = false;
          input.innerHTML += e.target.innerHTML;
        } else {
          resultDisplayed = false;
          input.innerHTML = "";
          input.innerHTML += e.target.innerHTML;
        }
      });
    }
  
    for (var i = 0; i < operations.length; i++) {
      operations[i].addEventListener("click", (e) => {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
  
        if (
          lastChar === "+" ||
          lastChar === "-" ||
          lastChar === "%" ||
          lastChar === "√" ||
          lastChar === "x" ||
          lastChar === "÷"
        ) {
          var newString =
            currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
        } else if (currentString.length === 0 && e.target.innerHTML === "√") {
          input.innerHTML += "Math.sqrt(";
          console.log("Enter a number first");
        } else {
          input.innerHTML += e.target.innerHTML;
        }
      });
    }
  
    enter.addEventListener("click", () => {
      var inputString = input.innerHTML;
      inputString = inputString
        .replace(/√/g, "Math.sqrt")
        .replace(/%/g, "%")
        .replace(/x/g, "*")
        .replace(/÷/g, "/");
  
      try {
        input.innerHTML = eval(inputString);
        resultDisplayed = true;
      } catch (error) {
        console.log(error);
        input.innerHTML = "Error";
      }
    });
  
    result.addEventListener("click", () => {
      var inputString = input.innerHTML;
      inputString = inputString
        .replace(/√/g, "Math.sqrt")
        .replace(/%/g, "%")
        .replace(/x/g, "*")
        .replace(/÷/g, "/");
  
      try {
        input.innerHTML = eval(inputString);
        resultDisplayed = true;
      } catch (error) {
        input.innerHTML = "Error";
      }
    });
  
    text[0].addEventListener("click", () => {
      input.innerHTML += "(";
    });
  
    text[1].addEventListener("click", () => {
      input.innerHTML += ")";
    });
  
    clear.addEventListener("click", () => {
      input.innerHTML = "";
    });
  
    del.addEventListener("click", () => {
      var currentString = input.innerHTML;
      input.innerHTML = currentString.substring(0, currentString.length - 1);
    });
  });
  