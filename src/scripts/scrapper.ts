import { Person } from "../modules/Person";

let me = new Person("Angel")
let port = chrome.runtime.connect({ name: "safePort" });
port.postMessage({me})