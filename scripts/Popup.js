export class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    openPopup() {
        this._popup.classList.add('.popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup() {
        this._popup.classList.remove('.popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose() {
        if (evt.key === 'Escape') {
            this.closePopup();
          }
    }

    setEventListeners() {
        // добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.
        this._popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            return closePopup(evt.target);
          };
        })
    }
}

// Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.

// Создайте класс PopupWithForm
// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.

// Создайте класс UserInfo
// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.