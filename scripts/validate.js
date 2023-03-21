const setEventListeners = (profileFormVal, inputList) => {
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    
    inputList.forEach((input) => {
        input.addEventListener('input', (event) => {
            console.log(event.target.value)
        });
    });
}


const enableValudation = () => {
    const popupCardVal = document.querySelector('.popup-card');
    const profileFormVal = popupCardVal.querySelector('.popup__form');
    const inputList = profileFormVal.querySelectorAll('.popup__input');
    
    setEventListeners(profileFormVal, inputList);
}

enableValudation({
    
});