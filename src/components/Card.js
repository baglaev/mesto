export class Card {
    constructor(data, cardTemplateSelector, openPopup, deleteCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._likes = data.likes;
      this._id = data._id;
      this._cardTemplateSelector = cardTemplateSelector;
      this.openPopup = openPopup;
      this._element = undefined;

      this._deleteCardClick = deleteCardClick;
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
  
    // _deleteCard() {
    //   this._element.remove();
    // }

    _setEventListeners() {
      this.likeButton.addEventListener('click', () => {
        this._toggleCardLike();
      });
  
      // this.deleteButton.addEventListener('click', () => {
      //   this._deleteCard();
      // });

      this.deleteButton.addEventListener('click', () => {
        this._deleteCardClick(this._id);
      });

      this.cardPicture.addEventListener('click', () => {
        this.openPopup(this._name, this._link);
      });
    }
  
    _setLikes() {
      const likeCounter =  this._element.querySelector('.element__counter-like')
      likeCounter.textContent = this._likes.length;
    }

    generateCard() {
      this._element = this._getTemplate();
      this.cardPicture = this._element.querySelector('.element__image');
      this.cardPicture.src = this._link;
      this.cardPicture.alt = this._name;
      this._element.querySelector('.element__name').textContent = this._name;
      this.likeButton = this._element.querySelector('.element__button-like');
      this.deleteButton= this._element.querySelector('.element__button-delete');
      this._setLikes();
      this._setEventListeners();

      return this._element;
    }
  }