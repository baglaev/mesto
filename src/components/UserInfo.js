export class UserInfo {
    constructor({userNameSelector, userOccupationSelector}) {
        this._userNameSelector = userNameSelector;
        this._userOccupationSelector = userOccupationSelector;
    }

    getUserInfo() {
        return {
            userNameElement: this._userNameSelector.textContent,
            userOccupationElement: this._userOccupationSelector.textContent
        };
    }

    setUserInfo(data) {
        this._userNameSelector.textContent = data.name;
        this._userOccupationSelector.textContent = data.occupation;
    }
}