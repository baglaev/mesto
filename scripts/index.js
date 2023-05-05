import  { popups, editProfileButton, profilePopup, profileForm, userNameElement, userOccupationElement, nameInput, occupationInput, editPopupCloseButton, elements, popupImage, imagePopupCloseButton, imagePopupTitle, imagePhoto, cardPopup, addCardButton, closeCardButton, formCard, inputImage, inputImageUrl, initialCards, classSelector } from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from  './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';


const profilePopupValidation = new FormValidator(classSelector, profilePopup);
const cardPopupValidation = new FormValidator(classSelector, cardPopup);

profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();
// -----
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupEscape);
// };

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupEscape);
// };

// function closePopupEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

// function openImage(name, link) {
//   imagePhoto.src = link;
//   imagePhoto.alt = name;
//   imagePopupTitle.textContent = name;
//   openPopup(popupImage);
// };

// -----

function clickImagePopupCloseButton() {
  closePopup(popupImage);
}

// function clickImagePopupCloseButton() {
//   openImage.closePopup();
// }

imagePopupCloseButton.addEventListener('click', clickImagePopupCloseButton);

// -----

// const popupWithImage = new PopupWithImage('.')
// popupWithImage.setEventListeners();

// -----

function clickEditProfileButton(evt) {
  evt.preventDefault();
  nameInput.value = userNameElement.textContent;
  occupationInput.value = userOccupationElement.textContent;
  openPopup(profilePopup);
  profilePopupValidation.resetValidation();
}

editProfileButton.addEventListener('click', clickEditProfileButton);

editPopupCloseButton.addEventListener('click', function() {
  closePopup(profilePopup);
});

// -----

// function closePopupEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

// function clickClosePopupOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     return closePopup(evt.target);
//   };
// };

// popups.forEach((popup) => {
//   popup.addEventListener('click', clickClosePopupOverlay);
// });

//-----

function handleProfileSubmit(evt) {
  evt.preventDefault();
  
  const nameInputValue = nameInput.value;
  const jobInputValue = occupationInput.value;

  userNameElement.textContent = nameInputValue;
  userOccupationElement.textContent = jobInputValue;
  closePopup(profilePopup);
};

profileForm.addEventListener('submit', handleProfileSubmit);

function clickAddCardButton() {
  openPopup(cardPopup);
};

addCardButton.addEventListener('click', clickAddCardButton);

function clicklCloseCardButton() {
  closePopup(cardPopup);
};

closeCardButton.addEventListener('click', clicklCloseCardButton);

// сохранение формы и взятие из нее данных

formCard.addEventListener('submit', handleCardSubmit);

function handleCardSubmit(event) {
  event.preventDefault();
  const card = {
    name: inputImage.value,
    link: inputImageUrl.value
  };

  formCard.reset();
  elements.prepend(createCard(card));
  closePopup(cardPopup);
  cardPopupValidation.disableButton();
};

// -----
const openImage = new PopupWithImage(popupImage);
openImage.setEventListeners();
// -----

function openPopupImage(name, link) {
  openImage.openPopup(name, link);
}

// const openPopupImage = (item) => {
//   openImage.openImage(item);
// }

function createCard(card) {
  // const cardElement = new Card(card, '#cardTemplate', openImage);
  const cardElement = new Card(card, '#cardTemplate', openPopupImage);
  return cardElement.generateCard();
};

// initialCards.forEach((card) => {
//   elements.prepend(createCard(card));
// });


const section = new Section({
  items: initialCards,
  renderer: (item) => {section.addItem(createCard(item))}},
  '.elements');
// функция создает карточку и возвращает её элемент в представление HTML
// function renderCard(cardData) {
//   const cardElement = createCard(cardData);
//   section.addItem(cardElement);
// }

section.renderItems();

// функция rendererCard будет видеть Section из замыкания и сможет добавлять в нужную секцию новые карточки