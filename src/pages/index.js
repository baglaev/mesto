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
    console.log('ответ', res)
    profileInfo.setUserInfo(res)
  })

api.getInitialCards()
  .then(card => {
    card.forEach(data => {
      const cardElement = createCard(data);
    
      section.addItem(cardElement)
    })
  })

// потом в константу попап делет сделать
// const deleteCardConfirm = new PopupWithForm('.popup-delete', () => {
//   console.log('delete')
// });
 
// deleteCardConfirm.setEventListeners();

const profileInfo = new UserInfo({userNameSelector: userNameElement, userOccupationSelector: userOccupationElement});

const profilePopupWithForm = new PopupWithForm(
  profilePopup,
  (input) => {
    profileInfo.setUserInfo(input);
    api.editProfile()
  }
);

profilePopupWithForm.setEventListeners();


const cardPopupWithForm = new PopupWithForm(
  cardPopup,
  (data) => {
    api.addCard(data.name, data.link, data.likes)
    .then(data => {
      const cardElementForm = createCard(data)
    // })
    // const cardElementForm = createCard(input);
    section.addItem(cardElementForm);
  })
  });

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
  const cardElement = new Card(card, '#cardTemplate', openPopupImage);
  // const cardElement = new Card(card, '#cardTemplate', openPopupImage, () => {console.log('click delete button')});
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