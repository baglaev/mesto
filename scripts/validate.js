const showInputError = (errorTextElement, validationMessage, activeErrorClass) => {
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
}

const hideInputError = (errorTextElement, activeErrorClass) => {
    errorTextElement.classList.remove(activeErrorClass);
}

const checkInputValidity = (input, errorClassTemplate, activeErrorClass) => {
    const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`)
    console.log(errorTextElement)
    if (input.validity.valid) {
        showInputError(errorTextElement, input.validationMessage, activeErrorClass);
       
    } else {
        hideInputError(errorTextElement);
        
    }
}

const setEventListeners = (profileFormVal, inputList, errorClassTemplate, activeErrorClass) => {
    profileFormVal.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    
    inputList.forEach((input) => {
        input.addEventListener('input', (event) => {
            checkInputValidity(input, errorClassTemplate, activeErrorClass);
        });
    });
}


const enableValudation = (config) => {
    const popupCardVal = document.querySelector(config.popupCardSelector);
    const profileFormVal = popupCardVal.querySelector(config.formSelector);
    const inputList = profileFormVal.querySelectorAll(config.inputSelector);
    
    setEventListeners(profileFormVal, inputList, config.errorClassTemplate, config.activeErrorClass);
}

enableValudation({
    popupCardSelector: '.popup-card',
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClassTemplate: '.popup__input-error_type_',
    activeErrorClass: 'popup__input-error'
});