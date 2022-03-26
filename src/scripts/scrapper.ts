import { Person } from "../modules/Person";
import { xpathEval } from "../utils/evaluators"

let followers = []
let followersSpanTags = xpathEval("//span[@class='Link--secondary pl-1' or @class='Link--secondary']", document);
let followersIterator = followersSpanTags.iterateNext();

while (followersIterator) {
    followers.push(followersIterator.textContent);
    followersIterator = followersSpanTags.iterateNext();
}

let port = chrome.runtime.connect({ name: "safePort" });
port.postMessage(followers)