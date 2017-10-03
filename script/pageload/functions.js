//function defs
var injectScript = function(script){
    var elt = document.createElement("script");
    elt.innerHTML = script;
    document.head.appendChild(elt);
}

var setThumbnail = function(text){
    chrome.extension.sendMessage(text);
};

var addButtonToIssuePage = function(){
        var element = document.getElementsByClassName('issues-listing')[0];
        var bounty_anchor = document.createElement("A");
        bounty_anchor.href = "https://gitcoin.co/funding/new?source=" + document.location.href + "&user=" + document.getElementsByName('user-login')[0].content;
        bounty_anchor.className += "btn btn-sm btn-primary js-details-target gitcoin_bounty";
        bounty_anchor.setAttribute("style", "position: absolute; top: -55px; right: 0px; background-color: #15003e; color: #25e899; background-image: linear-gradient(-180deg, #15003e 0%, #190032 90%)");
        var text = document.createTextNode("+Fund Issue");
        bounty_anchor.appendChild(text);
        element.appendChild(bounty_anchor);
}

var addButtonToUserPage = function(){
        var element = document.getElementsByClassName('vcard-names')[0];
        var bounty_anchor = document.createElement("A");

        bounty_anchor.href = "https://gitcoin.co/tip?username=" + document.getElementsByClassName('p-nickname')[0].innerHTML;
        bounty_anchor.className += "btn btn-sm btn-primary js-details-target gitcoin_bounty";
        bounty_anchor.setAttribute("style", "background-color: #15003e; color: #25e899; background-image: linear-gradient(-180deg, #15003e 0%, #190032 90%)");
        var text = document.createTextNode("+Tip");
        bounty_anchor.appendChild(text);
        element.appendChild(bounty_anchor);
}

var humanize = function(amount){
  if(amount > (100 * 1000)){
    return Math.round(amount/1000000,1) + "m";
  }
  if(amount > (100)){
    return Math.round(amount/1000,1) + "k";
  }
  return amount;
}

var addButtonBountyAmount = function(amount,claimed,submittedByMe){
        if(amount == 0){
          return;
        }
        amount = humanize(amount);
        var element = document.getElementsByClassName('issues-listing')[0];
        var bounty_anchor = document.createElement("A");
        var css = "position: absolute; top: -55px; right: 100px; ";
        var text = "Claim Bounty ("+amount+" GIT)";
        var _class = "btn btn-sm btn-primary js-details-target gitcoin_bounty";
        var action = 'claim';
        if(claimed){
          action = 'process';
          if(submittedByMe){
            text = "Process Claim ("+amount+" GIT)";
          } else {
            text = "Pending Claim ("+amount+" GIT)";
          }
        }
        if(claimed && !submittedByMe){
          css = css + "background-color: #eeeeee;"
          _class = "btn btn-sm js-details-target";
        } else {
          css = css + "background-color: #15003e; background-image: linear-gradient(-180deg, #15003e 0%, #190032 90%); color: #25e899;";
        }

        var href = "https://gitcoin.co/funding/"+action+"?source=" + document.location.href + "&user=" + document.getElementsByName('user-login')[0].content;
        bounty_anchor.href = href;
        bounty_anchor.className += _class;
        bounty_anchor.setAttribute("style", css);
        var text = document.createTextNode(text);
        bounty_anchor.appendChild(text);
        element.appendChild(bounty_anchor);
}

var bountyABI = '[{"inputs": [{"type": "bytes32", "name": ""}], "constant": true, "name": "bountiesbyrepo", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "str"}], "constant": false, "name": "normalizeIssueURL", "outputs": [{"type": "string", "name": "result"}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "str"}], "constant": false, "name": "getRepoURL", "outputs": [{"type": "string", "name": "result"}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "_issueURL"}], "constant": false, "name": "claimBounty", "outputs": [], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "numBounties", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "_repoURL"}], "constant": false, "name": "getNumberBounties", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "_issueURL"}, {"type": "uint256", "name": "_amount"}, {"type": "address", "name": "_tokenAddress"}, {"type": "uint256", "name": "_expirationTime"}, {"type": "string", "name": "_fromUsername"}, {"type": "string", "name": "_fromEmail"}], "constant": false, "name": "postBounty", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "_issueURL"}], "constant": false, "name": "rejectBountyClaim", "outputs": [], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "_issueURL"}], "constant": false, "name": "bountydetails", "outputs": [{"type": "uint256", "name": ""}, {"type": "address", "name": ""}, {"type": "address", "name": ""}, {"type": "address", "name": ""}, {"type": "bool", "name": ""}, {"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "bytes32", "name": "index"}], "constant": false, "name": "_bountydetails", "outputs": [{"type": "uint256", "name": ""}, {"type": "address", "name": ""}, {"type": "address", "name": ""}, {"type": "address", "name": ""}, {"type": "bool", "name": ""}, {"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "bytes32", "name": ""}], "constant": true, "name": "Bounties", "outputs": [{"type": "bool", "name": "initialized"}, {"type": "bool", "name": "open"}, {"type": "string", "name": "issueURL"}, {"type": "uint256", "name": "amount"}, {"type": "address", "name": "tokenAddress"}, {"type": "uint256", "name": "expirationTime"}, {"type": "string", "name": "fromUsername"}, {"type": "string", "name": "fromEmail"}, {"type": "address", "name": "bountyOwner"}, {"type": "address", "name": "claimee"}], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "_issueURL"}], "constant": false, "name": "approveBountyClaim", "outputs": [], "payable": false, "type": "function"}, {"inputs": [{"type": "string", "name": "str"}], "constant": false, "name": "strToMappingIndex", "outputs": [{"type": "bytes32", "name": "result"}], "payable": false, "type": "function"}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "string", "name": "issueURL"}, {"indexed": false, "type": "uint256", "name": "amount"}], "type": "event", "name": "bountyPosted", "anonymous": false}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "string", "name": "issueURL"}], "type": "event", "name": "bountyClaimed", "anonymous": false}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "address", "name": "payee"}, {"indexed": false, "type": "string", "name": "issueURL"}], "type": "event", "name": "bountyClaimApproved", "anonymous": false}, {"inputs": [{"indexed": false, "type": "address", "name": "_from"}, {"indexed": false, "type": "string", "name": "issueURL"}], "type": "event", "name": "bountyClaimRejected", "anonymous": false}];';
//local
//var bountyAddress = '0x0ed0c2a859e9e576cdff840c51d29b6f8a405bdd';
//ropsten
//var bountyAddress = '0x3102118ba636942c82d1a6efa2e7d069dc2d14bd';
//mainnet
var bountyAddress = '0xc14c22f07bc8aeda9fd87c7bd579169fd6bf01b5';


var injectGetBountyAmount = function(){
    setTimeout(function(){
      var injectGetBalance = ' \
      var bounty_abi = '+bountyABI+' \
      var bounty_address = "'+bountyAddress+'"; \
      var callback = function(error, result){\
          var bountyAmount = Math.round(result[0].toNumber() * web3.fromWei("1", "ether")); \
          respond_to_ext("bountyDetails", [bountyAmount, result[1], result[2], result[3], result[4], result[5]]);\
      };\
      if(typeof web3 != "undefined"){ \
        var bounty = web3.eth.contract(bounty_abi).at(bounty_address);\
        bounty.bountydetails.call(document.location.href, callback);\
      } \
      ';

      injectScript(injectGetBalance);
    }, 1000);
}
var injectGetNumberBounties = function(repoURL){
    setTimeout(function(){
      var injectThisCode = ' \
      var bounty_abi = '+bountyABI+' \
      var bounty_address = "'+bountyAddress+'"; \
      var callback = function(error, result){\
          var numBounties = result.toNumber(); \
          respond_to_ext("numBounties", numBounties);\
      };\
      if(typeof web3 != "undefined"){ \
        var bounty = web3.eth.contract(bounty_abi).at(bounty_address);\
        bounty.getNumberBounties.call("'+repoURL+'", callback);\
      } \
      ';

      injectScript(injectThisCode);
    }, 1000);
}

var injectGetTotalBounties = function(){
    setTimeout(function(){
      var injectThisCode = ' \
      var bounty_abi = '+bountyABI+' \
      var bounty_address = "'+bountyAddress+'"; \
      var callback = function(error, result){\
          var totalBounties = result.toNumber(); \
          respond_to_ext("totalBounties", totalBounties);\
      };\
      if(typeof web3 != "undefined"){ \
        var bounty = web3.eth.contract(bounty_abi).at(bounty_address);\
        bounty.numBounties.call( callback);\
      } \
      ';

      injectScript(injectThisCode);
    }, 1000);
}

var injectWeb3Context = function(){
  setTimeout(function(){
  //inject web3 information
  injectScript('respond_to_ext("isweb3", typeof web3 != "undefined");');
  injectScript('respond_to_ext("browser_location", window.location.href);');
  //injectScript('if(typeof web3 != "undefined"){respond_to_ext("web3", web3);}');
  injectScript('respond_to_ext("web3accountslength", web3 && web3.eth && web3.eth.accounts && web3.eth.accounts.length);');
  injectScript('respond_to_ext("web3account", web3 && web3.eth && web3.eth.accounts && web3.eth.accounts.length && web3.eth.accounts[0]);');
  injectScript('respond_to_ext("web3coinbase", web3 && web3.eth.coinbase);');
  injectScript('if(document.getElementsByName("user-login").length > 0){respond_to_ext("githubusername", document.getElementsByName("user-login")[0].content);}');

  var injectGetBalance = ' \
  var callback = function(error, result){\
      respond_to_ext("ethbalance", Math.round(result.toNumber()* web3.fromWei("1", "ether") * 100) / 100);\
  };\
  if(typeof web3 != "undefined" && web3.eth.coinbase){ \
    web3.eth.getBalance(web3.eth.coinbase, callback);\
  } \
  ';

  injectScript(injectGetBalance);

  }, 1000);
}
