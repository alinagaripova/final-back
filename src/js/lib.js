export class Dialogue {                         //чат
    constructor(name, image, id, message) {
        this.name = name;
        this.image = image;
        this.id = id;
        this.message = message;
    }
}

export class DialogueList { //список чатов
    constructor() {
        const savedItems = JSON.parse(localStorage.getItem('DialogueList'));
        if (savedItems !== null) {
            this.items = savedItems;
        } else {
            this.items = [];
        }
    }

    add(item) {                                 //добавление элемента в начало списка
        this.items.unshift(item);
        this.save();
    }

    save() {
        localStorage.setItem('DialogueList', JSON.stringify(this.items));
    }
}