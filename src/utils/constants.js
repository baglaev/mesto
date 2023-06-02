const editProfileButton = document.querySelector('.profile__button-edit');
const profilePopup = document.querySelector('.popup-profile');
const userNameElement = document.querySelector('.profile__title');
const userOccupationElement = document.querySelector('.profile__job-title');
const userAvatarElement = document.querySelector('.profile__image');
const avatarPopup = document.querySelector('.popup-avatar');
const avatarButton = document.querySelector('.profile__image-editing');
const nameInput = document.querySelector('.popup__input_profile_name');
const occupationInput = document.querySelector('.popup__input_profile_occupation');
const popupImage = document.querySelector('.popup-image');
const cardPopup = document.querySelector('.popup-card');
const deletePopup = document.querySelector('.popup-delete');
const addCardButton = document.querySelector('.profile__button-add');
const closeCardButton = cardPopup.querySelector('.popup__button-close');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const classSelector = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error_visible',
  submitButtonSelector: '.popup__button-save',
  validSubmitButtonClass:'popup__button-save_active',
  errorClassUnderline: 'popup__input_border-underline'
}

export { editProfileButton, profilePopup, userNameElement, userOccupationElement, userAvatarElement, avatarPopup, avatarButton, nameInput, occupationInput, popupImage, cardPopup, deletePopup, addCardButton, closeCardButton, initialCards, classSelector }