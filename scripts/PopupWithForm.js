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
        this._form.addEventListener('submit', () => {
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




// Создайте класс PopupWithForm
// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.