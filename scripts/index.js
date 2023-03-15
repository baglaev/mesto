const editProfileButton = document.querySelector('.profile__button-edit');
const profilePopup = document.querySelector('.popup-profile');
const formElement = document.querySelector('.popup__form');
const userNameElement = document.querySelector('.profile__title');
const userOccupationElement = document.querySelector('.profile__job-title');
const nameInput = document.querySelector('.popup__input_profile_name');
const occupationInput = document.querySelector('.popup__input_profile_occupation');

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



function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

editProfileButton.addEventListener('click', () => {
  nameInput.value = userNameElement.textContent;
  occupationInput.value = userOccupationElement.textContent;
  openPopup(profilePopup);
});

const editPopupCloseButton = profilePopup.querySelector('.popup__button-close');
editPopupCloseButton.addEventListener('click', () => {
  closePopup(profilePopup)
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    
    const nameInputValue = nameInput.value;
    const jobInputValue = occupationInput.value;

    userNameElement.textContent = nameInputValue;
    userOccupationElement.textContent = jobInputValue;
    closePopup(profilePopup);
 
};

formElement.addEventListener('submit', handleFormSubmit);

// новый код к 5 пр

const page = document.querySelector('.page');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup-image');



function createCard(card) {
    const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
    const cardName = newCard.querySelector('.element__name');
    cardName.textContent = card.name;
    const cardImage = newCard.querySelector('.element__image');

    cardImage.addEventListener('click', openImage);

    cardImage.setAttribute('src', card.link);
    cardImage.setAttribute('alt', card.name);
    const deleteButton = newCard.querySelector('.element__button-delete');
    deleteButton.addEventListener('click', deleteCard);
    const likeButton = newCard.querySelector('.element__button-like');
    likeButton.addEventListener('click', likeCard);
    const imagePopupCloseButton = popupImage.querySelector('.popup__button-close');
    imagePopupCloseButton.addEventListener('click', () => {
      closePopup(popupImage)
    });


    function openImage() {
      const imagePopupTitle = document.querySelector('.popup-image__title');
      const imagePhoto = document.querySelector('.popup-image__photo');
      imagePhoto.src = card.link;
      imagePhoto.alt = card.name;
      imagePopupTitle.textContent = card.name;
      openPopup(popupImage);

    };

    elements.prepend(newCard);
  
};

function likeCard(event) {
  const likeButtonActive = event.target;
  likeButtonActive.classList.toggle('element__button-like_active');
};

initialCards.forEach(createCard);

function deleteCard(event) {
  const button = event.target;
  const cardClose = button.closest('.element');
  cardClose.remove();
};

const cardPopup = document.querySelector('.popup-card');
const addCardButton = document.querySelector('.profile__button-add');


addCardButton.addEventListener('click', () => {
  openPopup(cardPopup);
});

// function closeCard() {
//     cardPopup.classList.remove('popup_opened');
//     const inputImage = document.querySelector('.popup__input_image_name').value = '';
//     const inputImageUrl = document.querySelector('.popup__input_image_url').value = '';
// }

const closeCardButton = card.querySelector('.popup__button-close');
closeCardButton.addEventListener('click', () => {
  closePopup(cardPopup)
});


// сохранение формы и взятие из нее данных
const formCard = cardPopup.querySelector('.popup__form');
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
  createCard(card);
  closePopup(cardPopup);
}
