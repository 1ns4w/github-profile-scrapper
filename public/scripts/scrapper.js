(() => {
  // src/utils/evaluators.ts
  var xpathEval = (expression, node) => {
    return document.evaluate(expression, node, null, XPathResult.ANY_TYPE, null);
  };

  // src/scripts/scrapper.ts
  var followers = [];
  var followersSpanTags = xpathEval("//span[@class='Link--secondary pl-1' or @class='Link--secondary']", document);
  var followersIterator = followersSpanTags.iterateNext();
  while (followersIterator) {
    followers.push(followersIterator.textContent);
    followersIterator = followersSpanTags.iterateNext();
  }
  var port = chrome.runtime.connect({ name: "safePort" });
  port.postMessage(followers);
})();
