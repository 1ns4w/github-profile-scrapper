import { User } from "./modules/models/User";
import { xpathEval } from "./modules/utils/evaluators"

let nameTag = xpathEval("//span[@itemprop = 'name']", document);
let nameTagIterator = nameTag.iterateNext();
let nameTagValue = nameTagIterator?.textContent?.match(/[(a-z)(0-9)]+/ig)?.join(' ')

let usernameTag = xpathEval("//span[@itemprop = 'additionalName']", document);
let usernameTagIterator = usernameTag.iterateNext();
let usernameTagValue = usernameTagIterator?.textContent?.match(/[(a-z)(0-9)]+/i)?.join()

let avatarURLTag = xpathEval("//div[@class ='js-profile-editable-replace']//img[contains(@class, 'avatar-user')]", document);
let avatarURLTagIterator = <HTMLImageElement> avatarURLTag.iterateNext();
let avatarURLTagValue = avatarURLTagIterator.src;

let port = chrome.runtime.connect({ name: "safePort" });
port.postMessage(new User(nameTagValue, usernameTagValue, avatarURLTagValue))