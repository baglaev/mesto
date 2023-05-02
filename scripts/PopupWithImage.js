import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
    openPopup(item) {
        const imagePhoto = document.querySelector('.popup-image__photo');
        const imagePopupTitle = document.querySelector('.popup-image__title');
        imagePhoto.src = item.link;
        imagePhoto.alt = item.name;
        imagePopupTitle.textContent = item.name;
        super.openPopup();
    }
}