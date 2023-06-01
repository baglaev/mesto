import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popup) {
        super(popup);
        this._form = this._popup.querySelector('.popup__form');
    }

    setSubmit(submitConfirm) {
        this._submitForm = submitConfirm;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            // this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm();
        });
    }
}