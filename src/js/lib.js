export class Dialogue {                         //чат
    constructor(name, image, id) {
        this.name = name;
        this.image = image;
        this.id = id;
    }
}

export class DialogueList {                     //список чатов
    constructor() {
        const savedItems = JSON.parse(localStorage.getItem('DialogueList'));
        if (savedItems !== null) {
            this.items = savedItems;
        } else {
            this.items = [];
        }
    }
    add(item) {                                 //добавление чата в начало списка чатов
        this.items.unshift(item);
        this.save();
    }
    save() {
        localStorage.setItem('DialogueList', JSON.stringify(this.items));
    }
}

export class Message {                          //сообщение
    constructor(name, text, time) {
        this.name = name;
        this.text = text;
    }
}
export class MessageList {                     //чат с сообщениями
    constructor() {
        const savedItems = JSON.parse(localStorage.getItem('MessageList'));
        if (savedItems !== null) {
            this.items = savedItems;
        } else {
            this.items = [];
        }
    }
    add(item) {                                 //добавление сообщения в чат
        this.items.push(item);
        this.save();
    }
    save() {
        localStorage.setItem('MessageList', JSON.stringify(this.items));
    }
}