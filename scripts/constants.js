const popups = document.querySelectorAll('.popup');
const editProfileButton = document.querySelector('.profile__button-edit');
const profilePopup = document.querySelector('.popup-profile');
const profileForm = profilePopup.querySelector('.popup__form');
const userNameElement = document.querySelector('.profile__title');
const userOccupationElement = document.querySelector('.profile__job-title');
const nameInput = document.querySelector('.popup__input_profile_name');
const occupationInput = document.querySelector('.popup__input_profile_occupation');
const editPopupCloseButton = profilePopup.querySelector('.popup__button-close');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup-image');
const imagePopupCloseButton = popupImage.querySelector('.popup__button-close');
const imagePopupTitle = document.querySelector('.popup-image__title');
const imagePhoto = document.querySelector('.popup-image__photo');
const cardPopup = document.querySelector('.popup-card');
const addCardButton = document.querySelector('.profile__button-add');
const closeCardButton = cardPopup.querySelector('.popup__button-close');
const formCard = cardPopup.querySelector('.popup__form');
const inputImage = cardPopup.querySelector('.popup__input_image_name');
const inputImageUrl = cardPopup.querySelector('.popup__input_image_url');

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

export { popups, editProfileButton, profilePopup, profileForm, userNameElement, userOccupationElement, nameInput, occupationInput, editPopupCloseButton, elements, popupImage, imagePopupCloseButton, imagePopupTitle, imagePhoto, cardPopup, addCardButton, closeCardButton, formCard, inputImage, inputImageUrl, initialCards, classSelector }