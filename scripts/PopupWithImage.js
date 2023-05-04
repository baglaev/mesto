import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._imagePhoto = this._popup.querySelector('.popup-image__photo');
        this._imagePopupTitle = this._popup.querySelector('.popup-image__title');
    }
    openPopup(name, link) {
        // const imagePhoto = document.querySelector('.popup-image__photo');
        // const imagePopupTitle = document.querySelector('.popup-image__title');
        super.openPopup();
        this._imagePhoto.src = link;
        this._imagePhoto.alt = name;
        this._imagePopupTitle.textContent = name;
        // super.openPopup();
    }
}