import {Dialogue, DialogueList} from "./lib.js";
import {checkDialogues} from "./valid.js";

const startChatEl = document.querySelector('.start-chat');
const dialogueListEl = document.querySelector('.dialogues-list');
const companionEl = document.querySelectorAll('.companion');

const companions = Array.from(companionEl);
const dialogueList = new DialogueList();

console.log(companionEl);
console.log(companionEl[0]);

//todo: окно чата, отправка сообщений

let id = 0;
for (const companion of companions) {
    id++;
    companion.setAttribute('data-id', id);
    // companion.setAttribute('data-id', id++);
    // const idName = companion.attributes[1].value;

    const name = companion.textContent;
    const image = companion.children[0].attributes[0].textContent;
    const dialogue = new Dialogue(name, image, id);

    companion.addEventListener('click', (evt) => {       //при клике создается новый чат
        let id = companion.attributes[1].value;
        console.log(id);
        if (checkDialogues(id, dialogueList) > 0) {                 //проверяет существует ли такой чат
            console.log('Такой чат уже существует');
        } else {
            dialogueList.add(dialogue);
        }
        rebuildTree(dialogueListEl, dialogueList);
    })
}

function rebuildTree(dialogueListEl, dialogueList) {                //пересобирает дерево
    dialogueListEl.innerHTML = ' ';
    for (const item of dialogueList.items) {
        const liEl = document.createElement('li');
        liEl.setAttribute('data-class', 'dialogues-element');
        liEl.setAttribute('data-id', item.id);
        liEl.innerHTML = `
          <img src="${item.image}"><span>${item.name}</span>
        `;
        dialogueListEl.appendChild(liEl);
    }
}

rebuildTree(dialogueListEl, dialogueList);

