// Bot program
/*
1) Kai vartotojas paraso klausima tada Turi atrasiti Dirbtinis intelektas mąsto
2) padaryk kad chatas visa laika testu
3) on press "new chat" persiusti sena i historyChat
4) Duoti galimibe istrinti history
5) Duoti galimibe kai paspaudus chat history gali pratesti ir toliau testi pokalbi
*/

const chatWithBot = document.getElementById("chatWithBot");
const respondWithBot = document.getElementById("respondWithBot");

function respond(){
    respondWithBot.textContent = chatWithBot;
}