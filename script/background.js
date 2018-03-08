var browser = browser || chrome;

browser.runtime.onMessage.addListener(function(message, sender) {
    if(typeof message == 'string'){
      browser.browserAction.setBadgeBackgroundColor({
          color: '#15003e'
      });
      browser.browserAction.setBadgeText({text: message});
    }
});

browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        for (var key in request) {
         localStorage[key] = request[key];
        }      
    }
);
