import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popup, handleSubmit) {
        super(popup);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');

    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => { 
            const value = input.value;
            const name = input.name;

            formValues[name] = value;
        });

        return formValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.closePopup();
        });
        
        super.setEventListeners();
    }

    closePopup() {
        super.closePopup();
        this._form.reset();
    }
}