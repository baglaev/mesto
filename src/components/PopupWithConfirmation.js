import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popup) {
        super(popup);
        this._form = this._popup.querySelector('.popup__form');
    }

    setSubmit(submit) {
        this._submitForm = submit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm();
        });
    }
}