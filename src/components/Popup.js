export class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.closePopup();
          }
    }

    setEventListeners() {
        // добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.
        this._popup.querySelector('.popup__button-close').addEventListener('click', () => {
            this.closePopup();
        });
        
        this._popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            this.closePopup(evt.target);
          };
        })
    }
}