"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // dist/modules/models/User.js
  var require_User = __commonJS({
    "dist/modules/models/User.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.User = void 0;
      var User = class {
        name;
        username;
        avatarURL;
        constructor(name = "", username = "", avatarURL = "") {
          this.name = name;
          this.username = username;
          this.avatarURL = avatarURL;
        }
      };
      exports.User = User;
    }
  });

  // dist/modules/utils/evaluators.js
  var require_evaluators = __commonJS({
    "dist/modules/utils/evaluators.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.xpathEval = void 0;
      var xpathEval = (expression, node) => {
        return document.evaluate(expression, node, null, XPathResult.ANY_TYPE, null);
      };
      exports.xpathEval = xpathEval;
    }
  });

  // dist/scrapper.js
  var require_scrapper = __commonJS({
    "dist/scrapper.js"(exports) {
      Object.defineProperty(exports, "__esModule", { value: true });
      var User_1 = require_User();
      var evaluators_1 = require_evaluators();
      var nameTag = (0, evaluators_1.xpathEval)("//span[@itemprop = 'name']", document);
      var nameTagIterator = nameTag.iterateNext();
      var nameTagValue = nameTagIterator?.textContent?.split(/[^\w]+/)[1];
      var usernameTag = (0, evaluators_1.xpathEval)("//span[@itemprop = 'additionalName']", document);
      var usernameTagIterator = usernameTag.iterateNext();
      var usernameTagValue = usernameTagIterator?.textContent?.match(/[(a-z)(0-9)]+/ig)?.join(" ");
      var avatarURLTag = (0, evaluators_1.xpathEval)("//div[@class ='js-profile-editable-replace']//img[contains(@class, 'avatar-user')]", document);
      var avatarURLTagIterator = avatarURLTag.iterateNext();
      var avatarURLTagValue = avatarURLTagIterator ? avatarURLTagIterator.src : "";
      var port = chrome.runtime.connect({ name: "safePort" });
      port.postMessage(new User_1.User(nameTagValue, usernameTagValue, avatarURLTagValue));
    }
  });
  "use strict";
  require_scrapper();
})();
