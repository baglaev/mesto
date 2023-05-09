export class UserInfo {
    constructor({userNameSelector, userOccupationSelector}) {
        this._userNameSelector = userNameSelector;
        this._userOccuoationelector = userOccupationSelector;
    }

    getUserInfo() {
        return {
            userNameElement: this._userNameSelector.textContent,
            userOccupationElement: this._userOccupationSelector.textContent
        };
    }

    setUserInfo(name, occupation) {
        this._userNameSelector.textContent = name;
        this._userOccupationSelector = occupation;
    }
}


// Создайте класс UserInfo
// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.