import { db } from './modules/services/connection';

chrome.action.onClicked.addListener(async tab => {
    if (tab.id !== undefined) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files:["scrapper.js"]
        })
    }
})

chrome.runtime.onConnect.addListener((port) => {
    if(port.name === "safePort"){
        port.onMessage.addListener(async message => {
            await db.table("user").add(message);
            console.log(message);
        })
    }
})
