
//inject the ability to respond 
injectScript('function respond_to_ext(type, response) { window.postMessage({ type: type, text: response}, "*"); }');

//inject listening callbacks
callbacks = [
    function(event){
        //console.log("Stored " + event.data.type + ', ' + event.data.text);
    },
    function(event){
        document[event.data.type] = event.data.text;
    },
    function(event){
        var msg = {};
        msg[event.data.type]=event.data.text;
        chrome.runtime.sendMessage(msg);
    },
    function(event){
        if(event.data.type == 'bountyDetails'){
          var amount = event.data.text[0];
          var claimed = (event.data.text[3] != '0x0000000000000000000000000000000000000000');
          var submittedByMe = event.data.text[2] == document['web3coinbase'];
          var isOpen = event.data.text[4];
          if (isOpen){
            addButtonBountyAmount(amount, claimed, submittedByMe);
            setThumbnail("*");
          };
        }
    },
    function(event){
        if(event.data.type == 'numBounties'){
          var numBounties = event.data.text;
          setThumbnail(numBounties+'');
        }
    },
    function(event){
        if(event.data.type == 'totalBounties'){
          var numBounties = event.data.text;
          setThumbnail(numBounties+'');
        }
    },
]

//listen for responses
window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;
    
    //run callbacks from event
    for (var i = 0; i < callbacks.length; i++){
        var callback = callbacks[i];
        callback(event);
    }

}, false);

injectWeb3Context();
