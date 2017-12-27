browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.text && typeof request.text === 'string') {
            browser.browserAction.setBadgeBackgroundColor({
                color: '#15003e'
            });
            browser.browserAction.setBadgeText({text: request.text});
        } else if (request.code && typeof request.code === 'string') {
            browser.tabs.executeScript({
                code: request.code
            });
        } else {
            for (var key in request) {
                localStorage[key] = request[key];
            }
        }
    }
);
