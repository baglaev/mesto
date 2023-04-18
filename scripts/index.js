import  { popups, editProfileButton, profilePopup, profileForm, userNameElement, userOccupationElement, nameInput, occupationInput, editPopupCloseButton, elements, popupImage, imagePopupCloseButton, imagePopupTitle, imagePhoto, cardPopup, addCardButton, closeCardButton, formCard, initialCards, classSelector } from './constants.js';
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

imagePopupCloseButton.addEventListener('click', () => {
  closePopup(popupImage);
});


editProfileButton.addEventListener('click', () => {
  nameInput.value = userNameElement.textContent;
  occupationInput.value = userOccupationElement.textContent;
  openPopup(profilePopup);
});

editPopupCloseButton.addEventListener('click', () => {
  closePopup(profilePopup);
});

function closePopupEscape(evt) {

  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
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

addCardButton.addEventListener('click', () => {
  openPopup(cardPopup);
});

closeCardButton.addEventListener('click', () => {
  closePopup(cardPopup);
});

// сохранение формы и взятие из нее данных

formCard.addEventListener('submit', handleCardSubmit);

function handleCardSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputImage = form.querySelector('.popup__input_image_name').value;
  const inputImageUrl = form.querySelector('.popup__input_image_url').value;
  const card = {
    name: inputImage,
    link: inputImageUrl
  };

  formCard.reset();
  elements.prepend(createCard(card));
  closePopup(cardPopup);
}

function createCard(card) {
  const cardElement = new Card(card, '#cardTemplate', openImage);
  return cardElement.generateCard();
}

initialCards.forEach((card) => {
  const newCard = new Card(card, '#cardTemplate', openImage);
  elements.prepend(newCard.generateCard());
});