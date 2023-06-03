export class Card {
    constructor(data, cardTemplateSelector, openPopup, deleteCardClick, handleLikeClick, userId) {
      this._name = data.name;
      this._link = data.link;
      this._likes = data.likes;
      this._id = data._id;
      this.userId = userId;
      this._ownerId = data.owner._id;

      this._cardTemplateSelector = cardTemplateSelector;
      this.openPopup = openPopup;
      this._element = undefined;

      this._deleteCardClick = deleteCardClick;
      this._handleLikeClick = handleLikeClick;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardTemplateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
    }
  
    _addCardLike() {
      this.likeButton.classList.add('element__button-like_active');

    }

    _removeCardLike() {
      this.likeButton.classList.remove('element__button-like_active');
      // const userHasLikedCard = this._likes.find(user => user.id === this._userId);
      //  if(userHasLikedCard) {
      //    this._toggleCardLike();
      // }
    }

    deleteCard() {
      this._element.remove();
      this._element = null;
    }
  
    isLiked() {
      const userHasLikedCard = this._likes.find(user => user._id === this.userId);

      return userHasLikedCard;
    }

    setLikes(newLikes) {
      this._likes = newLikes;
      const likeCounter =  this._element.querySelector('.element__counter-like')
      likeCounter.textContent = this._likes.length;

      if(this.isLiked()) {
        this._addCardLike();
      } else {
        this._removeCardLike();
      }
    }

    checkOwner() {
      if(this._ownerId !== this.userId) {
        // this.deleteButton.style.display = 'none';
        this.deleteButton.remove();
      }
    }

    _setEventListeners() {
      this.likeButton.addEventListener('click', () => {
        this._handleLikeClick(this._id);
      });

      this.deleteButton.addEventListener('click', () => {
        this._deleteCardClick(this._id);
      });

      this.cardPicture.addEventListener('click', () => {
        this.openPopup(this._name, this._link);
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
      this.setLikes(this._likes);
      this._setEventListeners();

      this.checkOwner();

      return this._element;
    }
  }