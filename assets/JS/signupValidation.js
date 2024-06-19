import {
  validateEmail,
  validateEmpty,
  validatePassword,
  validateEqualsPassword,
  isPasswordHide,
} from './validation.js';

let emailInvalid = false;
let passwordInvalid = false;
let checkingPasswordInvalid = false;
let nickNameInvalid = false;
let passwordValue = '';
let passwordCheckValue = '';

const signUpForm = document.querySelector('.form');
const emailInput = document.querySelector('input[type="email"]');
const nickNameInput = document.querySelector('input[name="nickname"]');
const passwordInput = document.querySelector('input[type="password"]');
const passwordCheckInput = document.querySelector(
  'input[name="passwordCheck"]'
);

const showPasswordBtn = document.querySelectorAll('.hide-btn');
const passwordHideBtn = showPasswordBtn[0];
const checkPasswordHideBtn = showPasswordBtn[1];

function checkFormButton() {
  const signUpBtn = document.querySelector('button[type="submit"]');
  const activeLoginBtn =
    emailInvalid &&
    passwordInvalid &&
    checkingPasswordInvalid &&
    nickNameInvalid;
  signUpBtn.disabled = !activeLoginBtn;
}
// 회원가입 버튼 활성화

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
  passwordValue = value;
  passwordInvalid = validateEmpty(value, passwordInput, 'passwordEmpty');

  if (passwordInvalid) {
    passwordInvalid = validatePassword(value, passwordInput, 'passwordValid');
  }
  if (passwordInvalid) {
    checkingPasswordInvalid = validateEqualsPassword(
      passwordValue,
      passwordCheckValue,
      passwordCheckInput,
      'passwordIsNotEquals'
    );
  } else {
    checkingPasswordInvalid = false;
  }
  checkFormButton();
}

emailInput.addEventListener('blur', validateEmailField);

nickNameInput.addEventListener('blur', e => {
  const value = e.target.value;
  nickNameInvalid = validateEmpty(value, nickNameInput, 'nickNameEmpty');

  checkFormButton();
});

passwordInput.addEventListener('blur', validatePasswordField);

passwordCheckInput.addEventListener('blur', e => {
  const value = e.target.value;
  passwordCheckValue = value;
  checkingPasswordInvalid = validateEqualsPassword(
    passwordCheckValue,
    passwordValue,
    passwordCheckInput,
    'passwordIsNotEquals'
  );

  checkFormButton();
});

passwordHideBtn.addEventListener('click', () => {
  isPasswordHide(passwordHideBtn, passwordInput);
});

checkPasswordHideBtn.addEventListener('click', () => {
  isPasswordHide(checkPasswordHideBtn, passwordCheckInput);
});

signUpForm.addEventListener('submit', e => {
  e.preventDefault();
  location.href = '../signin.html';
});
