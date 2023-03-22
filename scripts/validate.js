const showInputError = (errorTextElement, validationMessage, activeErrorClass) => {
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
}

const hideInputError = (errorTextElement, activeErrorClass) => {
    errorTextElement.classList.remove(activeErrorClass);
    errorTextElement.textContent = '';
}

const disableButton = (submitButton, validSubmitButtonClass) => {
    submitButton.classList.remove(validSubmitButtonClass);
    submitButton.disabled = true;
}

const enableButton = (submitButton, validSubmitButtonClass) => {
    submitButton.classList.add(validSubmitButtonClass);
    submitButton.disabled = false;
}

const checkInputValidity = (input, errorClassTemplate, activeErrorClass) => {
    const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`)
    console.log(errorTextElement)
    if (!input.validity.valid) {
        showInputError(errorTextElement, input.validationMessage, activeErrorClass);
       
    } else {
        hideInputError(errorTextElement);
    }
}

const toggleButtonState = (submitButton, validSubmitButtonClass) => {
    if (true) {
        enableButton(submitButton, validSubmitButtonClass);
    } else {
        disableButton(submitButton, validSubmitButtonClass);
    }
}

const setEventListeners = (profileFormVal, inputList, errorClassTemplate, activeErrorClass, validSubmitButtonClass, submitButton) => {
    profileFormVal.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    
    inputList.forEach((input) => {
        input.addEventListener('input', (event) => {
            checkInputValidity(input, errorClassTemplate, activeErrorClass);
            toggleButtonState(submitButton, validSubmitButtonClass);
        });
    });
}


const enableValudation = (config) => {
    const popupCardVal = document.querySelector(config.popupCardSelector);
    const profileFormVal = popupCardVal.querySelector(config.formSelector);
    const inputList = profileFormVal.querySelectorAll(config.inputSelector);
    const submitButton = profileFormVal.querySelector(config.submitButtonSelector);
    
    setEventListeners(profileFormVal, inputList, config.errorClassTemplate, config.activeErrorClass, config.validSubmitButtonClass,submitButton);
}

enableValudation({
    popupCardSelector: '.popup-card',
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClassTemplate: '.popup__input-error_type_',
    activeErrorClass: 'popup__input-error',
    submitButtonSelector: '.popup__button-save',
    validSubmitButtonClass:'popup__button-save_active'
});