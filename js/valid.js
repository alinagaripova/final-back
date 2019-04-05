export function checkDialogues(id, dialogueList) {  //проверяет существует ли такой чат
    let count = 0;
    for (const item of dialogueList.items) {
        if (id == item.id)  {
            count++
        }
    }
    return count;
}