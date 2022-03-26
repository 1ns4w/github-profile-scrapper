"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // dist/modules/Person.js
  var require_Person = __commonJS({
    "dist/modules/Person.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Person = void 0;
      var Person = class {
        constructor(nombre) {
          this.nombre = nombre;
        }
      };
      exports.Person = Person;
    }
  });

  // dist/scripts/scrapper.js
  var require_scrapper = __commonJS({
    "dist/scripts/scrapper.js"(exports) {
      Object.defineProperty(exports, "__esModule", { value: true });
      var Person_1 = require_Person();
      var me = new Person_1.Person("Angelo");
      var port = chrome.runtime.connect({ name: "safePort" });
      port.postMessage({ me });
    }
  });
  "use strict";
  require_scrapper();
})();
