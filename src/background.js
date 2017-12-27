window.chrome.extension.onMessage.addListener(function(message, sender) {
    if(typeof message == 'string'){
      window.chrome.browserAction.setBadgeBackgroundColor({
          color: '#15003e'
      });
      window.chrome.browserAction.setBadgeText({text: message});
    }
});

window.chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        for (var key in request) {
         localStorage[key] = request[key];
        }      
    }
);