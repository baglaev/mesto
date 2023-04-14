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

const popups = document.querySelectorAll('.popup');
const editProfileButton = document.querySelector('.profile__button-edit');
const profilePopup = document.querySelector('.popup-profile');
const profileForm = profilePopup.querySelector('.popup__form');
const userNameElement = document.querySelector('.profile__title');
const userOccupationElement = document.querySelector('.profile__job-title');
const nameInput = document.querySelector('.popup__input_profile_name');
const occupationInput = document.querySelector('.popup__input_profile_occupation');
const editPopupCloseButton = profilePopup.querySelector('.popup__button-close');
const page = document.querySelector('.page');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup-image');
const cardTemplate = document.querySelector('#cardTemplate');
const imagePopupCloseButton = popupImage.querySelector('.popup__button-close');
const imagePopupTitle = document.querySelector('.popup-image__title');
const imagePhoto = document.querySelector('.popup-image__photo');
const cardPopup = document.querySelector('.popup-card');
const addCardButton = document.querySelector('.profile__button-add');
const closeCardButton = cardPopup.querySelector('.popup__button-close');
const formCard = cardPopup.querySelector('.popup__form');


// константы к пр7

// const cardElement = cardTemplate.content.cloneNode(true);

// // const likeButton = cardTemplate.querySelector('.element__button-like');
// const deleteButton = cardElement.querySelector('.element__button-delete');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};

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


// создание карточки

// function getCard(item) {
//   const cardElement = cardTemplate.content.cloneNode(true);
//   const cardName = cardElement.querySelector('.element__name');
//   const cardImage = cardElement.querySelector('.element__image');
//   const deleteButton = cardElement.querySelector('.element__button-delete');
//   const likeButton = cardElement.querySelector('.element__button-like');
//   cardName.textContent = item.name;
//   cardImage.addEventListener('click', openImage);
//   cardImage.setAttribute('src', item.link);
//   cardImage.setAttribute('alt', item.name);
//   deleteButton.addEventListener('click', deleteCard);
//   likeButton.addEventListener('click', toggleLike);
//   imagePopupCloseButton.addEventListener('click', () => {
//     closePopup(popupImage);
//   });

  // function openImage() {
  //   imagePhoto.src = item.link;
  //   imagePhoto.alt = item.name;
  //   imagePopupTitle.textContent = item.name;
  //   openPopup(popupImage);
  // };

function openImage(name, link) {
  imagePhoto.src = link;
  imagePhoto.alt = name;
  imagePopupTitle.textContent = name;
  openPopup(popupImage);
};


//   return cardElement;
// };

// function createCardNew(card) {
//   const newCard = getCard(card);
//   elements.prepend(newCard);
// };

// function toggleLike(event) {
//   const likeButtonActive = event.target;
//   likeButtonActive.classList.toggle('element__button-like_active');
// };

// initialCards.forEach(createCardNew);

// function deleteCard(event) {
//   const button = event.target;
//   const cardClose = button.closest('.element');
//   cardClose.remove();
// };

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
 
  // createCardNew(card);
  elements.prepend(createCard(card));
  
  closePopup(cardPopup);
}

function createCard(card) {
  const cardElement = new Card(card, '#cardTemplate', openImage);
  return cardElement.generateCard();
}


// новый код к ПР7 

// !обязательно учесть, что все переменные будут приватные!

class Card {
  constructor(data, cardTemplateSelector, openImage) {
    this.name = data.name;
    this.link = data.link;
    this.cardTemplateSelector = cardTemplateSelector;
    this._openImage = openImage;
    this.element = undefined; // можно было не объявлять
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.cardTemplateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this.element = this._getTemplate();
    this.cardPicture = this.element.querySelector('.element__image');
    this.cardPicture.src = this.link;
    this.cardPicture.alt = this.name;
    this.element.querySelector('.element__name').textContent = this.name;
    this.likeButton = this.element.querySelector('.element__button-like');
    this.deleteButton= this.element.querySelector('.element__button-delete');

    this._setEventListeners();

    return this.element;
  }

  _toggleCardLike() {
    this.likeButton.classList.toggle('element__button-like_active');
  }

  _deleteCard() {
    this.element.remove();
  }

  _setEventListeners() {
    this.likeButton.addEventListener('click', () => {
      this._toggleCardLike();
    });

    this.deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });

    this.cardPicture.addEventListener('click', () => {
      this._openImage(this.name, this.link);
    });
  }
}

initialCards.forEach((card) => {
  const newCard = new Card(card, '#cardTemplate', openImage);
  elements.prepend(newCard.generateCard());
});

// const cardItem = new Card(initialCards, '#cardTemplate', openImage);

// для коммита в ветке девелоп