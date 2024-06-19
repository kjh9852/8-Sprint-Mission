import {
  validateEmail,
  validateEmpty,
  validatePassword,
  isPasswordHide,
} from './validation.js';

let emailInvalid = false;
let passwordInvalid = false;

const loginForm = document.querySelector('.form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const passwordHideBtn = document.querySelector('.hide-btn');

function validateEmailField() {
  const value = emailInput.value;
  emailInvalid = validateEmpty(value, emailInput, 'emailEmpty');

  if (emailInvalid) {
    emailInvalid = validateEmail(value, emailInput, 'emailValid');
  }
  checkFormButton();
}

function validatePasswordField() {
  const value = passwordInput.value;
  passwordInvalid = validateEmpty(value, passwordInput, 'passwordEmpty');

  if (passwordInvalid) {
    passwordInvalid = validatePassword(value, passwordInput, 'passwordValid');
  }

  checkFormButton();
}

function checkFormButton() {
  const loginBtn = document.querySelector('button[type="submit"]');
  const activeLoginBtn = emailInvalid && passwordInvalid;
  loginBtn.disabled = !activeLoginBtn;
}
// 로그인 버튼 활성화

emailInput.addEventListener('blur', function () {
  validateEmailField();
});

passwordInput.addEventListener('blur', function () {
  validatePasswordField();
});

passwordHideBtn.addEventListener('click', e => {
  isPasswordHide(passwordHideBtn, passwordInput);
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  location.href = '../items.html';
});
