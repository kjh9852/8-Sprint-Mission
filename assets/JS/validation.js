import { ERROR_MESSAGE } from './errorMessage.js';

function printErrMessage(isValid, inputElement, type) {
  const errMsgEl = inputElement.nextElementSibling;
  const findType = ERROR_MESSAGE.find(msg => msg.type === type);
  const errorMessage = findType ? findType.message : null;

  if (!isValid) {
    inputElement.classList.add('error');
    errMsgEl.textContent = errorMessage;
    errMsgEl.classList.remove('hide');
  } else {
    inputElement.classList.remove('error');
    errMsgEl.textContent = '';
    errMsgEl.classList.add('hide');
  }
}
// 에러메세지 출력

function errMessage(isValid, inputElement, type) {
  const errorType = isValid ? '' : type;
  printErrMessage(isValid, inputElement, errorType);
}

function isEmail(value) {
  const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  return email_regex.test(value);
}

function hasMinLength(value, minLength) {
  const isValid = value.length >= minLength;
  return isValid;
}

function isNotEmpty(value) {
  const isValid = value.trim() !== '';
  return isValid;
}

function isEqualsPassword(value, otherValue) {
  const isValid = value === otherValue;
  return isValid;
}

export function validateEmail(value, inputElement, type) {
  const isValid = isEmail(value);
  errMessage(isValid, inputElement, type);
  return isValid;
}

export function validatePassword(value, inputElement, type) {
  const isValid = hasMinLength(value, 8);
  errMessage(isValid, inputElement, type);
  return isValid;
}

export function validateEmpty(value, inputElement, type) {
  const isValid = isNotEmpty(value);
  errMessage(isValid, inputElement, type);
  return isValid;
}

export function validateEqualsPassword(value, otherValue, inputElement, type) {
  const isValid = isEqualsPassword(value, otherValue);
  errMessage(isValid, inputElement, type);
  return isValid;
}

export function isPasswordHide(btn, input) {
  const isPasswordVisible = input.type === 'password';
  input.type = isPasswordVisible ? 'text' : 'password';
  btn.classList.toggle('show', isPasswordVisible);
}
