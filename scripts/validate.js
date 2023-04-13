// const showInputError = (input, errorTextElement, validationMessage, activeErrorClass, errorClassUnderline) => {
// 	input.classList.add(errorClassUnderline);
//     errorTextElement.textContent = validationMessage;
//     errorTextElement.classList.add(activeErrorClass);
// };

// const hideInputError = (input, errorTextElement, activeErrorClass, errorClassUnderline) => {
// 	input.classList.remove(errorClassUnderline);
//     errorTextElement.classList.remove(activeErrorClass);
//     errorTextElement.textContent = '';
// };

// const disableButton = (submitButton, validSubmitButtonClass) => {
//     submitButton.classList.remove(validSubmitButtonClass);
//     submitButton.disabled = true;
// };

// const enableButton = (submitButton, validSubmitButtonClass) => {
//     submitButton.classList.add(validSubmitButtonClass);
//     submitButton.disabled = false;
// };

// const checkInputValidity = (input, errorClassTemplate, activeErrorClass, errorClassUnderline) => {
//     const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`);
//     if (!input.validity.valid) {
//         showInputError(input, errorTextElement, input.validationMessage, activeErrorClass, errorClassUnderline);
//     } else {
//         hideInputError(input, errorTextElement, activeErrorClass, errorClassUnderline);
//     };
// };

// const hasInvalidInput = (inputList) => {
//     return Array.from(inputList).some((input) => !input.validity.valid);
// };

// const toggleButtonState = (submitButton, validSubmitButtonClass, inputList) => {
//     if (!hasInvalidInput(inputList)) {
//         enableButton(submitButton, validSubmitButtonClass);
//     } else {
//         disableButton(submitButton, validSubmitButtonClass);
//     };
// };

// const setEventListeners = (inputList, {errorClassTemplate, activeErrorClass, validSubmitButtonClass, errorClassUnderline}, submitButton) => {  
//     inputList.forEach((input) => {
//         input.addEventListener('input', (event) => {
//             checkInputValidity(input, errorClassTemplate, activeErrorClass, errorClassUnderline);
//             toggleButtonState(submitButton, validSubmitButtonClass, inputList);
//         });
//     });
// };

// const enableValidation = ({formSelector, inputSelector, submitButtonSelector, ...config}) => {
// 	const formList = Array.from(document.querySelectorAll(formSelector));
// 	formList.forEach((form) => {
// 		const inputList = form.querySelectorAll(inputSelector);
// 		const submitButton = form.querySelector(submitButtonSelector);

// 		setEventListeners(inputList, config, submitButton);
// 		form.addEventListener('reset', () => {
// 		disableButton(submitButton, config.validSubmitButtonClass)
// 		});
// 	});
// };

// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     errorClassTemplate: '.popup__input-error_type_',
//     activeErrorClass: 'popup__input-error_visible',
//     submitButtonSelector: '.popup__button-save',
//     validSubmitButtonClass:'popup__button-save_active',
// 	errorClassUnderline: 'popup__input_border-underline'
// });

const classSelector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClassTemplate: '.popup__input-error_type_',
    activeErrorClass: 'popup__input-error_visible',
    submitButtonSelector: '.popup__button-save',
    validSubmitButtonClass:'popup__button-save_active',
	errorClassUnderline: 'popup__input_border-underline'
}


class FormValidator {
    constructor(classSelector, formElement) {
        this._classSelector = classSelector;
        this._formElement = formElement;

        this._inputList = Array.from(this._formElement.querySelectorAll(this._classSelector.inputSelector));
        this._submitButton = this._formElement.querySelector(this._classSelector.submitButtonSelector);
    }

    showInputError(input, errorTextElement, validationMessage, activeErrorClass, errorClassUnderline) {
        input.classList.add(errorClassUnderline);
        errorTextElement.textContent = validationMessage;
        errorTextElement.classList.add(activeErrorClass);
    }

    hideInputError(input, errorTextElement, activeErrorClass, errorClassUnderline) {
        input.classList.remove(errorClassUnderline);
        errorTextElement.classList.remove(activeErrorClass);
        errorTextElement.textContent = '';
    }

    disableButton() {
        this._submitButton.classList.remove(this._classSelector.validSubmitButtonClass);
        this._submitButton.disabled = true;
    }

    enableButton() {
        this._submitButton.classList.add(this._classSelector.validSubmitButtonClass);
        this._submitButton.disabled = false;
    }

    checkInputValidity(input, errorClassTemplate, activeErrorClass, errorClassUnderline) {
        const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`);
        if (!input.validity.valid) {
            showInputError(input, errorTextElement, input.validationMessage, activeErrorClass, errorClassUnderline);
        } else {
            hideInputError(input, errorTextElement, activeErrorClass, errorClassUnderline);
        };
    }

    hasInvalidInput(inputList) {
        return Array.from(inputList).some((input) => !input.validity.valid);
    }

    toggleButtonState(submitButton, validSubmitButtonClass, inputList) {
        if (!hasInvalidInput(inputList)) {
            enableButton(submitButton, validSubmitButtonClass);
        } else {
            disableButton(submitButton, validSubmitButtonClass);
        };
    }

    setEventListeners(inputList, {errorClassTemplate, activeErrorClass, validSubmitButtonClass, errorClassUnderline}, submitButton) {
        inputList.forEach((input) => {
            input.addEventListener('input', (event) => {
                checkInputValidity(input, errorClassTemplate, activeErrorClass, errorClassUnderline);
                toggleButtonState(submitButton, validSubmitButtonClass, inputList);
            });
        });
    }

    enableValidation() {
        setEventListeners(inputList, config, submitButton);
		form.addEventListener('reset', () => {
		disableButton(submitButton, config.validSubmitButtonClass)
		});
    }
}

const profilePopupValidation = new FormValidator(classSelector, profilePopup);
const cardPopupValidation = new FormValidator(classSelector, cardPopup);

console.log(profilePopupValidation);
console.log(cardPopupValidation);

profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();