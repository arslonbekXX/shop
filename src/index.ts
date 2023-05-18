import './assets/styles/main.css';
import { MainService } from './service/main';

const switchLoginFormBtn = document.querySelector<HTMLDivElement>('.login-btn')!;
const switchRegisterFormBtn = document.querySelector<HTMLDivElement>('.create-btn')!;
const loginForm = document.querySelector<HTMLFormElement>('.login-form')!;
const registerForm = document.querySelector<HTMLFormElement>('.sign-form')!;

const loginUsername = document.querySelector<HTMLInputElement>('#login-username')!;
const loginPassword = document.querySelector<HTMLInputElement>('.login-password')!;
const registerFirsname = document.querySelector<HTMLInputElement>('.sign-firsname')!;
const registerLastname = document.querySelector<HTMLInputElement>('.sign-lastname')!;
const registerUsername = document.querySelector<HTMLInputElement>('#sign-username')!;
const registerPassword = document.querySelector<HTMLInputElement>('.sign-password')!;

const mainService = new MainService();

function switchForm(hide: any, show: any) {
  hide.classList.add('hide');
  show.classList.remove('hide');
}

switchRegisterFormBtn.addEventListener('click', () => {
  return switchForm(loginForm, registerForm);
});

switchLoginFormBtn.addEventListener('click', () => {
  return switchForm(registerForm, loginForm);
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const username = loginUsername.value;
  const password = loginPassword.value;

  mainService.signIn(username, password);
  console.log('users = ', mainService.getUserList());
});

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = registerFirsname.value;
  const username = registerUsername.value;
  const password = registerPassword.value;

  try {
    mainService.signUp(name, username, password);
  } catch (err) {
    alert(`[ERROR][❌] ${err.message}`);
  }

  console.log('users = ', mainService.getUserList());
});
