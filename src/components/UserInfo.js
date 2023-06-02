export class UserInfo {
    // constructor({userNameSelector, userOccupationSelector}) {
    constructor({userNameSelector, userOccupationSelector, userAvatarSelector}) {
        this._userNameSelector = userNameSelector;
        this._userOccupationSelector = userOccupationSelector;
        this._userAvatarSelector = userAvatarSelector;
    }

    getUserInfo() {
        return {
            userNameElement: this._userNameSelector.textContent,
            userOccupationElement: this._userOccupationSelector.textContent,
            userAvatarElement: this._userAvatarSelector.src
        };
    }

    setUserInfo(data) {
        this._userNameSelector.textContent = data.name;
        this._userOccupationSelector.textContent = data.about;
        this._userAvatarSelector.src = data.avatar;
    }
}