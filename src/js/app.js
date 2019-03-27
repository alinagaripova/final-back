import {Dialogue, DialogueList} from "./lib.js";
import {checkDialogues} from "./valid.js";

const startChatEl = document.querySelector('.start-chat');
const dialogueListEl = document.querySelector('.dialogues-list');
const companionEl = document.querySelectorAll('.companion');
const chatEl = document.querySelector('.chat');

const companions = Array.from(companionEl);
const dialogueList = new DialogueList();

//todo: отправка сообщений

let id = 0;
for (const companion of companions) {
    id++;
    companion.setAttribute('data-id', id);
    // companion.setAttribute('data-id', id++);
    // const idName = companion.attributes[1].value;

    const name = companion.textContent;
    const image = companion.children[0].attributes[0].textContent;
    const dialogue = new Dialogue(name, image, id);

    companion.addEventListener('click', (evt) => {      //при клике создается новый чат
        let id = companion.attributes[1].value;
        console.log(id);
        if (checkDialogues(id, dialogueList) > 0) {                 //проверяет существует ли такой чат
            console.log('Такой чат уже существует');
        } else {
            dialogueList.add(dialogue);                             //добавляет чат в список чатов
        }
        rebuildTree(dialogueListEl, dialogueList);
    })
}

function rebuildTree(dialogueListEl, dialogueList1) {                //пересобирает дерево
    dialogueListEl.innerHTML = ' ';
    for (const item of dialogueList1.items) {
        const liEl = document.createElement('li');
        liEl.setAttribute('data-class', 'dialogues-element');
        liEl.setAttribute('data-id', item.id);
        liEl.innerHTML = `
          <img src="${item.image}"><span>${item.name}</span>
        `;
        dialogueListEl.appendChild(liEl);

        liEl.addEventListener('click', () => {
            createChat(dialogueList, chatEl, item.image, item.name);       //создание окна чата
        })
    }
}

function createChat(dialogueList1, chatEl, itemImage, itemName) {       //создание окна чата
    chatEl.innerHTML = '';
    const headerEl = document.createElement('header');
    headerEl.setAttribute('data-class', 'chat-title');
    headerEl.innerHTML = `
       <img src="${itemImage}"><span>${itemName}</span>
    `;

    const footerEl = document.createElement('footer');
    footerEl.setAttribute('data-class', 'chat-send');
    footerEl.innerHTML = `
       <input type="text" placeholder="Введите сообщение">
       <button id="send">Отправить</button>
    `;
    chatEl.appendChild(headerEl);
    chatEl.appendChild(footerEl);

}





rebuildTree(dialogueListEl, dialogueList);

