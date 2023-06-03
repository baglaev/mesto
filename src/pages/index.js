import './index.css';

import { editProfileButton, profilePopup, userNameElement, userOccupationElement, userAvatarElement, avatarPopup, avatarButton, nameInput, occupationInput, popupImage, cardPopup, deletePopup, addCardButton, closeCardButton, initialCards, classSelector } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js'
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { Api } from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'ce3e7b6f-f070-4401-b0f3-689824d2bbf0',
    'Content-Type': 'application/json'
  }
}); 

let userId;

api.getProfile()
  .then(res => {
    profileInfo.setUserInfo(res);

    userId = res._id;
  })
  .catch((res) => {
    console.log(`Ошибка ${res.status}`);
 })

api.getInitialCards()
  .then(card => {
    card.reverse().forEach(data => {
      const cardElement = createCard(data);
      section.addItem(cardElement);
    })
  })
  .catch((res) => {
    console.log(`Ошибка ${res.status}`);
 })

const profileInfo = new UserInfo({userNameSelector: userNameElement, userOccupationSelector: userOccupationElement, userAvatarSelector: userAvatarElement});

const profilePopupWithForm = new PopupWithForm(
  profilePopup,
  (data) => {
    profilePopupWithForm.handleLoading();
    api.editProfile(data.name, data.about)
    .then(res => {
      profileInfo.setUserInfo(res);
      profilePopupWithForm.closePopup();
    })
    .catch((res) => {
      console.log(`Ошибка ${res.status}`);
    })
    .finally(() => {
      profilePopupWithForm.handleLoading('Сохранить');
    })
  }
);

profilePopupWithForm.setEventListeners();

const deleteCardConfirm = new PopupWithConfirmation(deletePopup);

const cardPopupWithForm = new PopupWithForm(
  cardPopup,
  (data) => {
    cardPopupWithForm.handleLoading();
    api.addCard(data.name, data.link)
    .then(data => {
      const cardElementForm = createCard(data);
    section.addItem(cardElementForm);
    })
    .catch((res) => {
      console.log(`Ошибка ${res.status}`);
  })
    .finally(() => {
      profilePopupWithForm.handleLoading('Сохранить');
    })
  });

const avatarPopupWithForm = new PopupWithForm(avatarPopup,
  (data) => {
    avatarPopupWithForm.handleLoading();
    api.handleAvatar(data.avatar)
    .then((res) => {
      profileInfo.setUserInfo(res)
      avatarPopupWithForm.closePopup();
    })
    .catch((res) => {
      console.log(`Ошибка ${res.status}`);
    })
    .finally(() => {
      avatarPopupWithForm.handleLoading('Сохранить');
    })
  }
  );
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
  const cardElement = new Card(card, '#cardTemplate', openPopupImage, (id) => {
    deleteCardConfirm.openPopup();
    deleteCardConfirm.setSubmit(() => {
      api.deleteCard(id)
      .then(res => {
        cardElement.deleteCard(res)
        deleteCardConfirm.closePopup();
      })
      .catch((res) => {
        console.log(`Ошибка ${res.status}`);
     })
    })
  },
  (id) => {
    if (cardElement.isLiked()) {
      api.deleteLike(id)
      .then(res => {
        cardElement.setLikes(res.likes)
      })
      .catch((res) => {
        console.log(`Ошибка ${res.status}`);
     })
    } else {
      api.addLike(id)
      .then(res => {
        cardElement.setLikes(res.likes)
      })
      .catch((res) => {
        console.log(`Ошибка ${res.status}`);
     })
    }
  },
  userId
  );
  return cardElement.generateCard();
};

deleteCardConfirm.setEventListeners();

const section = new Section({
  // items: initialCards,
  renderer: (item) => {
    section.addItem(createCard(item))
  }
},
  '.elements');

// section.renderItems();
// функция rendererCard будет видеть Section из замыкания и сможет добавлять в нужную секцию новые карточки