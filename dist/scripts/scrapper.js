"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("../modules/Person");
let me = new Person_1.Person("Angelo");
let port = chrome.runtime.connect({ name: "safePort" });
port.postMessage({ me });
