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

export class Message {                          //сообщение от you
    constructor(name, text, time) {
        this.name = name;
        this.text = text;
    }
}
export class MessageList {                     //список сообщений от you
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

export class SecondMessage {                          //сообщение от собеседника
    constructor(name, text, time) {
        this.name = name;
        this.text = text;
    }
}
export class SecondMessageList {                     //список сообщений от собеседника
    constructor() {
        const savedItems = JSON.parse(localStorage.getItem('SecondMessageList'));
        if (savedItems !== null) {
            this.items = savedItems;
        } else {
            this.items = [];
        }
    }
    add(item) {
        this.items.push(item);
        this.save();
    }
    save() {
        localStorage.setItem('SecondMessageList', JSON.stringify(this.items));
    }
}