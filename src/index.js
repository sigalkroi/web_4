// my_variable
// myVariable
// html: <li><text>fdfdfd</text></li>
document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('textInput');
  const textSubmit = document.getElementById('textSubmit');
  const numberInput = document.getElementById('numberInput');
  const numberSubmit = document.getElementById('numberSubmit');
  const listData = document.getElementById('listData');
  const averageValue = document.getElementById('averageValue');
  const highestValue = document.getElementById('highestValue');
  const lowestValue = document.getElementById('lowestValue');
  const belowAverage = document.getElementById('belowAverage');

  let numbers = [];

  textSubmit.addEventListener('click', () => {
    const text = textInput.value;
    listData.innerHTML += `<li>${text}</li>`;
    textInput.value = '';
  });

  numberSubmit.addEventListener('click', () => {
    const number = parseInt(numberInput.value);
    numbers.push(number);
    listData.innerHTML += `<li>${number}</li>`;
    numberInput.value = '';

    calculateStatistics();
  });

  function calculateStatistics() {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;

    averageValue.textContent = avg.toFixed(2);

    const max = Math.max(...numbers);
    highestValue.textContent = max;

    const min = Math.min(...numbers);
    lowestValue.textContent = min;

    const belowAvgCount = numbers.filter(num => num < avg).length;
    belowAverage.textContent = belowAvgCount;
  }
});



var closeElements = document.getElementsByClassName("closeSign")

function updateCloseListeners() {
  for (var i=0; i < closeElements.length; i++) {
    closeElements[i].onclick = function () {
      var parent = this.parentElement;
      parent.style.display = "none";
    }
  }
}
function createListItemAccordingToTheUserInput() {
  var li = document.createElement("li")  // html: <li></li>
  var userInput = document.getElementById("newItem").value
  if (userInput === '') {
    alert("You must write something!")
  } else {
    var text = document.createTextNode(userInput)
    li.appendChild(text)
    document.getElementById("newItem").value = ""
    return li;
  }
  return null;
}

function addNewElement() {
  var li = createListItemAccordingToTheUserInput()
  if (li !== null) {
    var span = document.createElement("span")
    span.className = "closeSign"
    var xSign = document.createTextNode("\u00D7")
    span.appendChild(xSign)
    li.appendChild(span)
    document.getElementById("items").appendChild(li)
    updateCloseListeners()
  }
}


function ChangeColorButton() {
  var heading = document.querySelector("h1");
  heading.style.color = "yellow";
}

function addh4() {
  var h3 = document.querySelector("h3");
  var newHeading = document.createElement("h4");
  newHeading.textContent = "I'm a new heading";
  newHeading.style.color = "red";
  h3.insertAdjacentElement("afterend", newHeading);
}

// Function to add an image below the list
function addImg() {
  var list = document.querySelector("ul");
  var image = document.createElement("img");
  image.src = "1.jpeg";
  list.insertAdjacentElement("afterend", image);
}



