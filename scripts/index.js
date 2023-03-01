let editProfileButton = document.querySelector('.profile__button-edit');
let editPopup = document.querySelector('.popup');

function openPopup(popup) {
    editPopup.classList.add('popup_opened');
};

function closePopup(popup) {
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

let userNameInput = document.querySelector('.popup__user-name');
userNameInput.value = userName;

let userOccupationInput = document.querySelector('.popup__user-occupation');
userOccupationInput.value = userOccupation;

userNameInput.addEventListener('input', function(event) {
    let value = event.target.value;
    userNameElement.textContent = value;
});
console.log(userNameElement);
userOccupationInput.addEventListener('input', function(event) {
    let value = event.target.value;
    userOccupationElement.textContent = value;
});


// Находим форму в DOM
//bs let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
//bs let nameInput = // Воспользуйтесь инструментом .querySelector()
//bs let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
//bs function handleFormSubmit (evt) {
//bs    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
//bs }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//bs formElement.addEventListener('submit', handleFormSubmit); 