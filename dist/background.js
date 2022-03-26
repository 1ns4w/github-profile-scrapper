"use strict";
chrome.action.onClicked.addListener(async (tab) => {
    if (tab.id !== undefined) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["scripts/scrapper.js"]
        });
    }
});
chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "safePort") {
        port.onMessage.addListener(message => {
            console.log(message);
        });
    }
});
