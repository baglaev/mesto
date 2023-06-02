import './index.css';

import { editProfileButton, profilePopup, userNameElement, userOccupationElement, userAvatarElement, avatarPopup, avatarButton, nameInput, occupationInput, popupImage, cardPopup, deletePopup, addCardButton, closeCardButton, initialCards, classSelector } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js'
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { api } from '../components/Api.js';

let userId;

// Promise.all([api.getProfile(), api.getInitialCards()])
//   .then(([userInfo, cards]) => {
//     userId = userInfo._id;
//     profileInfo.setUserInfo(userInfo);
//     section.renderItems(cards.reverse());
//     })
//  .catch((res) => {
//     console.log(`Ошибка ${res.status}`)
//   })




api.getProfile()
  .then(res => {
    profileInfo.setUserInfo(res);

    userId = res._id;
  })



api.getInitialCards()
  .then(card => {
    card.forEach(data => {
      const cardElement = createCard(data);
      // const cardElement = createCard({
      //   name: data.name,
      //   link: data.link,
      //   likes: data.likes,
      //   id: data._id,
      //   userId: userId,
      //   ownerId: data.owner._id
      // });
      section.addItem(cardElement)
    })
  })

// const profileInfo = new UserInfo({userNameSelector: userNameElement, userOccupationSelector: userOccupationElement});
const profileInfo = new UserInfo({userNameSelector: userNameElement, userOccupationSelector: userOccupationElement, userAvatarSelector: userAvatarElement});

const profilePopupWithForm = new PopupWithForm(
  profilePopup,
  (input) => {
    profileInfo.setUserInfo(input);
    api.editProfile()
  }
);

profilePopupWithForm.setEventListeners();

const deleteCardConfirm = new PopupWithConfirmation(deletePopup);

const cardPopupWithForm = new PopupWithForm(
  cardPopup,
  (data) => {
    // api.addCard(data.name, data.link, data.likes, data._id, userId, data.ownerId)
    api.addCard(data.name, data.link)
    .then(data => {
      const cardElementForm = createCard(data, userId);
    section.addItem(cardElementForm);
  })
  });

// ----------------
const avatarPopupWithForm = new PopupWithForm(avatarPopup);
avatarPopupWithForm.setEventListeners();


cardPopupWithForm.setEventListeners();

const profilePopupValidation = new FormValidator(classSelector, profilePopup);
const cardPopupValidation = new FormValidator(classSelector, cardPopup);
const avatarPopupValidation = new FormValidator(classSelector, avatarPopup);

profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();
avatarPopupValidation.enableValidation();


avatarButton.addEventListener('click', () => {
  avatarPopupValidation.resetValidation();
  avatarPopupValidation.disableButton();
  avatarPopupWithForm.openPopup();
})

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
  // const cardElement = new Card(card, '#cardTemplate', openPopupImage);
  const cardElement = new Card(card, '#cardTemplate', openPopupImage, (id) => {
    deleteCardConfirm.openPopup();
    deleteCardConfirm.setSubmit(() => {
      api.deleteCard(id)
      .then(res => {
        cardElement.deleteCard(res)
        deleteCardConfirm.closePopup();
      })
    })
  },
  (id) => {
    api.addLike(id)
    .then(res => {
      // console.log(res)
      cardElement.setLikes(res.likes)
    })

    api.deleteLike(id)
    .then(res => {
      // console.log(res)
      cardElement.setLikes(res.likes)
    })
  },
  userId
  );
  return cardElement.generateCard();
};

deleteCardConfirm.setEventListeners();

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    section.addItem(createCard(item))
  }
},
  '.elements');

section.renderItems();
// функция rendererCard будет видеть Section из замыкания и сможет добавлять в нужную секцию новые карточки