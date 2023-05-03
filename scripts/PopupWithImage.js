import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._imagePhoto = document.querySelector('.popup-image__photo');
        this._imagePopupTitle = document.querySelector('.popup-image__title');
    }
    openPopup(item) {
        // const imagePhoto = document.querySelector('.popup-image__photo');
        // const imagePopupTitle = document.querySelector('.popup-image__title');
        this._imagePhoto.src = item.link;
        this._imagePhoto.alt = item.name;
        this._imagePopupTitle.textContent = item.name;
        super.openPopup();
    }
}