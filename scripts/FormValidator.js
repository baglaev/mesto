export class FormValidator {
    constructor(classSelector, formElement) {
        this._classSelector = classSelector;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._classSelector.inputSelector));
        this._submitButton = this._formElement.querySelector(this._classSelector.submitButtonSelector);
    }

    _showInputError(input, validationMessage) {
        const errorTextElement = document.querySelector(`${this._classSelector.errorClassTemplate}${input.name}`);
        input.classList.add(this._classSelector.errorClassUnderline);
        errorTextElement.textContent = validationMessage;
        errorTextElement.classList.add(this._classSelector.activeErrorClass);
    }

    _hideInputError(input) {
        const errorTextElement = document.querySelector(`${this._classSelector.errorClassTemplate}${input.name}`);
        input.classList.remove(this._classSelector.errorClassUnderline);
        errorTextElement.classList.remove(this._classSelector.activeErrorClass);
        errorTextElement.textContent = '';
    }

    _disableButton() {
        this._submitButton.classList.remove(this._classSelector.validSubmitButtonClass);
        this._submitButton.disabled = true;
    }

    _enableButton() {
        this._submitButton.classList.add(this._classSelector.validSubmitButtonClass);
        this._submitButton.disabled = false;
    }

    _checkInputValidity(input) {
        // const errorTextElement = document.querySelector(`${this._classSelector.errorClassTemplate}${input.name}`);
        if (!input.validity.valid) {
            this._showInputError(input, input.validationMessage);
        } else {
            this._hideInputError(input);
        };
    }

    _hasInvalidInput() {
        return Array.from(this._inputList).some((input) => !input.validity.valid);
    }

    _toggleButtonState() {
        if (!this._hasInvalidInput(this._inputList)) {
            this._enableButton(this._submitButton, this._classSelector.validSubmitButtonClass);
        } else {
            this._disableButton(this._submitButton, this._classSelector.validSubmitButtonClass);
        };
    }

    resetValidation() {
        this._inputList.forEach((input) => {
            // const errorTextElement = document.querySelector(`${this._classSelector.errorClassTemplate}${input.name}`);
            // this._hideInputError(errorTextElement);
            this._hideInputError(input);
        })
    }

    _setEventListeners() {
        this._inputList.forEach((input) => {
            input.addEventListener('input', (event) => {
                this._checkInputValidity(input, this._classSelector);
                this._toggleButtonState(this._submitButton, this._classSelector.validSubmitButtonClass, this._inputList);
            });
        });
    }

    enableValidation() {
        this._inputList.forEach(() => {
            this._setEventListeners(this._inputList, this._submitButton);
		    this._formElement.addEventListener('reset', () => {
            this._setEventListeners(this._inputList, this._submitButton);
		    this._disableButton(this._submitButton, this._classSelector.validSubmitButtonClass);
            });
		});
    }
}