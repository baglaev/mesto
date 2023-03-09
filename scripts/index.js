let editProfileButton = document.querySelector('.profile__button-edit');
let editPopup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let userNameElement = document.querySelector('.profile__title');
let userOccupationElement = document.querySelector('.profile__job-title');
let nameInput = document.querySelector('.popup__input_profile_name');
let occupationInput = document.querySelector('.popup__input_profile_occupation');

function openPopup() {
    editPopup.classList.add('popup_opened');
    nameInput.value = userNameElement.textContent;
    occupationInput.value = userOccupationElement.textContent;
};

function closePopup() {
    editPopup.classList.remove('popup_opened');
};

editProfileButton.addEventListener('click', function() {
    openPopup();
});

let editPopupCloseButton = document.querySelector('.popup__button-close');
editPopupCloseButton.addEventListener('click', function() {
    closePopup();
});

function handleFormSubmit (evt) {
    evt.preventDefault();
    
    let nameInputValue = nameInput.value;
    let jobInputValue = occupationInput.value;

    userNameElement.textContent = nameInputValue;
    userOccupationElement.textContent = jobInputValue;
    closePopup();
 
};

formElement.addEventListener('submit', handleFormSubmit);

// новый код к 5 пр

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

const page = document.querySelector('.page');

initialCards.forEach(function(card) {
    const cardHTML = `
        <article class="element">
        <img src="${card.link}" alt="гора Эльбрус" class="element__image">
        <div class="element__title">
            <h2 class="element__name">${card.name}</h2>
            <button class="element__button-like" type="button" aria-label="like"></button>
        </div>
        </article>`
    page.insertAdjacentHTML('beforeend', cardHTML);
});

const card = document.querySelector('#card');
const addCardButton = document.querySelector('.profile__button-add');

function openCard() {
    card.classList.add('popup_opened');
}

addCardButton.addEventListener('click', function() {
    openCard();
});

function closeCard() {
    card.classList.remove('popup_opened');
}

const closeCardButton = card.querySelector('.popup__button-close');
closeCardButton.addEventListener('click', function() {
    closeCard();
});