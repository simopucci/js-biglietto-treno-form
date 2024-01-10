const usernameInput = document.getElementById('username-input');
const userKm = document.getElementById('user-km');
const userAge = document.getElementById('user-age');
const printButton = document.getElementById('print-button');
const userName = document.getElementById('user-name');
const finalPrice = document.getElementById('final-price');
const userTicket = document.getElementById('user-ticket');

printButton.addEventListener('click', function() {
    const username = usernameInput.value;
    console.log(username);
    userName.innerHTML = `${username}`;

    const userKmValue = userKm.value;
    console.log(userKmValue);
    const userAgeValue = userAge.value;
    console.log(userAgeValue);

    const priceKm = userKmValue * 0.21;
    console.log(priceKm);

    let discount;

    if (isNaN(userKmValue) || isNaN(userAgeValue)) {
        alert('I dati inseriti non sono corretti');
    } else {
        if (userAgeValue < 18) {
            const discount20 = priceKm * 20 / 100;
            discount = priceKm - discount20;
        }
        else if (userAgeValue > 65) {
            const discount40 = priceKm * 40 / 100;
            discount = priceKm - discount40;
        }
        else {
            discount = priceKm;
        }
    }
    console.log(discount);
    finalPrice.innerHTML = '€' + ' ' + discount.toFixed(2);

    userTicket.classList.remove('d-none');
})

