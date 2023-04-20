import  { popups, editProfileButton, profilePopup, profileForm, userNameElement, userOccupationElement, nameInput, occupationInput, editPopupCloseButton, elements, popupImage, imagePopupCloseButton, imagePopupTitle, imagePhoto, cardPopup, addCardButton, closeCardButton, formCard, inputImage, inputImageUrl, initialCards, classSelector } from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const profilePopupValidation = new FormValidator(classSelector, profilePopup);
const cardPopupValidation = new FormValidator(classSelector, cardPopup);

profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};

function openImage(name, link) {
  imagePhoto.src = link;
  imagePhoto.alt = name;
  imagePopupTitle.textContent = name;
  openPopup(popupImage);
};

imagePopupCloseButton.addEventListener('click', function() {
  closePopup(popupImage);
});


editProfileButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  nameInput.value = userNameElement.textContent;
  occupationInput.value = userOccupationElement.textContent;
  openPopup(profilePopup);
  profilePopupValidation.resetValidation();
});

editPopupCloseButton.addEventListener('click', function() {
  closePopup(profilePopup);
});

function closePopupEscape(evt) {

  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('click', function(evt) {
    if (evt.target === popup) {
      return closePopup(popup);
    }
  });
});

function handleProfileSubmit(evt) {
  evt.preventDefault();
  
  const nameInputValue = nameInput.value;
  const jobInputValue = occupationInput.value;

  userNameElement.textContent = nameInputValue;
  userOccupationElement.textContent = jobInputValue;
  closePopup(profilePopup);
};

profileForm.addEventListener('submit', handleProfileSubmit);

addCardButton.addEventListener('click', function() {
  openPopup(cardPopup);
});

// addCardButton.addEventListener('click', openPopup(cardPopup));

closeCardButton.addEventListener('click', function() {
  closePopup(cardPopup);
});

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
}

function createCard(card) {
  const cardElement = new Card(card, '#cardTemplate', openImage);
  return cardElement.generateCard();
}

// initialCards.forEach((card) => {
//   const newCard = new Card(card, '#cardTemplate', openImage);
//   elements.prepend(newCard.generateCard());
// });

initialCards.forEach((card) => {
  elements.prepend(createCard(card));
});