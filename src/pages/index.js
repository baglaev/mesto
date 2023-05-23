import './index.css';

import { editProfileButton, profilePopup, userNameElement, userOccupationElement, nameInput, occupationInput, popupImage, cardPopup, addCardButton, closeCardButton, initialCards, classSelector } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js'
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { api } from '../components/Api.js';

api.getProfile()
  .then(res => {
    // console.log('res', res)
    profileInfo.setUserInfo(res)
  })

api.getProfile()
  .then(res => {
    console.log(res)
  })

const profileInfo = new UserInfo({userNameSelector: userNameElement, userOccupationSelector: userOccupationElement});

const profilePopupWithForm = new PopupWithForm(
  profilePopup,
  (input) => {
    profileInfo.setUserInfo(input);
  }
);

profilePopupWithForm.setEventListeners();


const cardPopupWithForm = new PopupWithForm(
  cardPopup,
  (input) => {
    const cardElementForm = createCard(input);
    section.addItem(cardElementForm);
  }
);

cardPopupWithForm.setEventListeners();

const profilePopupValidation = new FormValidator(classSelector, profilePopup);
const cardPopupValidation = new FormValidator(classSelector, cardPopup);

profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();

editProfileButton.addEventListener('click', () => {
  const profile = profileInfo.getUserInfo();

  nameInput.value = profile.userNameElement;
  occupationInput.value = profile.userOccupationElement;
  profilePopupValidation.resetValidation();
  profilePopupWithForm.openPopup();
});

addCardButton.addEventListener('click', () => {
  cardPopupWithForm.openPopup();
  cardPopupValidation.resetValidation();
  cardPopupValidation.disableButton();
})

const openImage = new PopupWithImage(popupImage);

openImage.setEventListeners();
closeCardButton.addEventListener('click', () => {
  openImage.closePopup()
});

function openPopupImage(name, link) {
  openImage.openPopup(name, link);
}


function createCard(card) {
  // const cardElement = new Card(card, '#cardTemplate', openImage);
  const cardElement = new Card(card, '#cardTemplate', openPopupImage);
  return cardElement.generateCard();
};

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    section.addItem(createCard(item))
  }
},
  '.elements');

section.renderItems();
// функция rendererCard будет видеть Section из замыкания и сможет добавлять в нужную секцию новые карточки