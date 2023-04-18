export class Card {
    constructor(data, cardTemplateSelector, openImage) {
      this._name = data.name;
      this._link = data.link;
      this._cardTemplateSelector = cardTemplateSelector;
      this._openImage = openImage;
      this._element = undefined;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardTemplateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
    }
  
    _toggleCardLike() {
      this.likeButton.classList.toggle('element__button-like_active');
    }
  
    _deleteCard() {
      this._element.remove();
    }
  
    _setEventListeners() {
      this.likeButton.addEventListener('click', () => {
        this._toggleCardLike();
      });
  
      this.deleteButton.addEventListener('click', () => {
        this._deleteCard();
      });
  
      this.cardPicture.addEventListener('click', () => {
        this._openImage(this._name, this._link);
      });
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this.cardPicture = this._element.querySelector('.element__image');
      this.cardPicture.src = this._link;
      this.cardPicture.alt = this._name;
      this._element.querySelector('.element__name').textContent = this._name;
      this.likeButton = this._element.querySelector('.element__button-like');
      this.deleteButton= this._element.querySelector('.element__button-delete');
      this._setEventListeners();
  
      return this._element;
    }
  }