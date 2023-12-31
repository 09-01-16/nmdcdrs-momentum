const loginForm = document.querySelector('#login');
const loginInput = document.querySelector('#login input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem('username', username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!`;
    document
        .querySelector('#greeting-clock')
        .classList.remove(HIDDEN_CLASSNAME);
    document.querySelector('#quote').classList.remove(HIDDEN_CLASSNAME);
    document.querySelector('#todo').classList.remove(HIDDEN_CLASSNAME);
    document.querySelector('#weather').classList.remove(HIDDEN_CLASSNAME);
    // document.querySelector('#github').classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem('username');

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
