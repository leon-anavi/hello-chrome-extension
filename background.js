chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757' }, function() {
    console.log("Primary color is green");
  });
  chrome.storage.sync.set({color2: '#FF0000' }, function() {
    console.log("Secondary color is red");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
