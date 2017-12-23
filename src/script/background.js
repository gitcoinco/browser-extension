browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (typeof request === 'string') {
            browser.browserAction.setBadgeBackgroundColor({
                color: '#15003e'
            });
            browser.browserAction.setBadgeText({text: request});
        } else {
            if (request.code && typeof request.code === 'string') {
                // console.log("injecting " + request.code);
                browser.tabs.executeScript({
                    code: request.code
                });
            } else {
                for (var key in request) {
                    localStorage[key] = request[key];
                }
            }
        }
    }
);
