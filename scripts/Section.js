class Section {
    constructor({items, renderer}, selector) {
        this.items = items;
        this.renderer = renderer;
        this.selector = selector;
    }

    renderItems() {
        this._items.forEach((item) => this._renderer(item));
    }

    addItem(itemHTML) {
        this._container.prepend(itemHTML);
    }
}

const section = new Section({items: [], renderer: renderCard}, '.card__list');
// функция создает карточку и возвращает её элемент в предст авление HTML
function renderCard(cardData) {
    const cardElement = createCard(cardData);
    section.addItem(cardElement);
}

section.renderItems();

// функция rendererCard будет видеть Section из замыкания и сможет добавлять в нужную секцию новые карточки