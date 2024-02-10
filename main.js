let plusButton = document.querySelector('#plus');
let ammount = document.querySelector('#amount');
let logoLink = document.querySelector('#logo');
let countPlastic = 1;

let cardContainer = document.getElementById("cardContainer");
let cardTemplate = document.getElementById("cardTemplate");

let result = document.querySelector('.result');

let resultAddition = document.querySelector('.result-addition');

function addCard() {
    var template = document.getElementById("cardTemplate");
    var cardClone = template.content.cloneNode(true);
    document.getElementById("cardContainer").appendChild(cardClone);
  }

  function removeCard() {
    var cards = document.getElementsByClassName("card");
    if (cards.length > 0) {
      var lastCard = cards[cards.length - 1];
      lastCard.parentNode.removeChild(lastCard);
      calculateTotal();
    }
  }

  function selectIcon(button) {
    var card = button.closest(".card");
    var buttons = card.getElementsByClassName("icon-button");

    // Удаление класса "selected" у других кнопок
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected");
    }

    button.classList.add("selected");
  }

  function calculateTotal() {
    var cards = document.getElementsByClassName("card");
    var totalSum = 0;

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var quantityInput = card.querySelector(".card input");
      var quantity = parseFloat(quantityInput.value);
      var pricePerKg = 0;

      var buttons = card.getElementsByClassName("icon-button");
      for (var j = 0; j < buttons.length; j++) {
        if (buttons[j].classList.contains("selected")) {
          pricePerKg = parseFloat(buttons[j].dataset.price);
          break;
        }
      }

      totalSum += quantity * pricePerKg;
    }

    // alert("Общая сумма: " + totalSum.toFixed(2) + " рублей");

    if (totalSum > 0) {
      result.textContent = `${totalSum.toFixed(2)} рублей`;
      resultAddition.classList.remove('hide-element')
    } else {
      result.textContent = `введите данные`;
      resultAddition.classList.add('hide-element')
    }
  }
  addCard();