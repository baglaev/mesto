let editProfileButton = document.querySelector('.profile__button-edit');
let editPopup = document.querySelector('.popup');

function openPopup() {
    editPopup.classList.add('popup_opened');
};

function closePopup() {
    editPopup.classList.remove('popup_opened');
}

editProfileButton.addEventListener('click', function() {
    openPopup(editPopup);

});

let editPopupCloseButton = document.querySelector('.popup__button-close');
editPopupCloseButton.addEventListener('click', function() {
    closePopup(editPopup);
});

let userName = 'Жак-Ив Кусто';
let userOccupation = 'Исследователь океана';

let userNameElement = document.querySelector('.profile__title');
userNameElement.textContent = userName;

let userOccupationElement = document.querySelector('.profile__job-title');
userOccupationElement.textContent = userOccupation;

let userNameInput = document.querySelector('.popup__input_profile_name');
userNameInput.value = userName;

let userOccupationInput = document.querySelector('.popup__input_profile_occupation');
userOccupationInput.value = userOccupation;

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_profile_name');
let jobInput = document.querySelector('.popup__input_profile_occupation');

function handleFormSubmit (evt) {
    evt.preventDefault();

    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;

    userNameElement.textContent = nameInputValue;
    userOccupationElement.textContent = jobInputValue;
    closePopup();
 
};

formElement.addEventListener('submit', handleFormSubmit); 