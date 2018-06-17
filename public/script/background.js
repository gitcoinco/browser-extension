chrome.extension.onMessage.addListener(function(message, sender) {
    if(typeof message == 'string'){
      chrome.browserAction.setBadgeBackgroundColor({
          color: '#15003e'
      });
      chrome.browserAction.setBadgeText({text: message});
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        for (var key in request) {
         localStorage[key] = request[key];
        }
    }
);
