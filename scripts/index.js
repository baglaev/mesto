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
}

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