export class Section {
    constructor({renderer}, selector) {
        // this._items = items;
        this._renderer = renderer;
        this._selector = document.querySelector(selector);
    }

    renderItems(items) {
        items.forEach((item) => {this._renderer(item)});
        // items.foreEach(this._renderer);
    }

    addItem(element) {
        this._selector.prepend(element);
        // this._selector.append(element);
    }
}