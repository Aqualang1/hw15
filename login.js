const login = document.getElementById('login');
const phone = document.querySelector('#phone');
const btn = document.querySelector("#btn");
const panel = document.querySelector('.panel');
const stamp = document.createElement('div');
const name = document.getElementById('name');
let n = 5;

function counter() {
    stamp.textContent = `you will be redirected after ${n} sec`;
    stamp.classList.add('stamp');
    panel.appendChild(stamp);
    n--;
    if (n >= 0) {
        return setTimeout(counter, 1000);
    } else {
        window.location.href = 'profile.html';
    }
}

let iSvalidLogin = function () {
    return /^[^\s@]{5,}@[^\s@]+\.[^\s@]+$/gi.test(login.value);
}

let isValidName = function () {
    return /[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+/.test(name.value);
}

let IsValidPhone = function () {
    return /^\+?\d{2}?\(?\d{3}?\)?\d{5,7}$/.test(phone.value);
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!isValidName() || !iSvalidLogin() || !IsValidPhone()) {
        stamp.textContent = 'Please, enter valid value';
        stamp.classList.add('stamp');
        panel.appendChild(stamp);
        login.onclick = (event) => panel.removeChild(stamp);
        phone.onclick = (event) => panel.removeChild(stamp);
    } else {
        document.getElementById("loader").style.display = "block";
        console.log(`Hello, ${name.value}! your login:  ${login.value}, your phone: ${phone.value}`);
        counter();
    }
})

// const iSvalidLogin = ;

// const iSvalidLogin = (login.value) => /^[^\s@]{5,}@[^\s@]+\.[^\s@]+$/gi;
