"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // dist/utils/evaluators.js
  var require_evaluators = __commonJS({
    "dist/utils/evaluators.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.xpathEval = void 0;
      var xpathEval = (expression, node) => {
        return document.evaluate(expression, node, null, XPathResult.ANY_TYPE, null);
      };
      exports.xpathEval = xpathEval;
    }
  });

  // dist/scripts/scrapper.js
  var require_scrapper = __commonJS({
    "dist/scripts/scrapper.js"(exports) {
      Object.defineProperty(exports, "__esModule", { value: true });
      var evaluators_1 = require_evaluators();
      var followers = [];
      var followersSpanTags = (0, evaluators_1.xpathEval)("//span[@class='Link--secondary pl-1' or @class='Link--secondary']", document);
      var followersIterator = followersSpanTags.iterateNext();
      while (followersIterator) {
        followers.push(followersIterator.textContent);
        followersIterator = followersSpanTags.iterateNext();
      }
      var port = chrome.runtime.connect({ name: "safePort" });
      port.postMessage(followers);
    }
  });
  "use strict";
  require_scrapper();
})();
