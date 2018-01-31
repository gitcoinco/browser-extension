var isweb3 = function(){
    return localStorage['isweb3'];
}
var isweb3unlocked = function(){
    return localStorage['web3accountslength'] != 0;
}
var web3account = function(){
    return localStorage['web3account'];
}
var url = localStorage['browser_location'];
var isOnGitHubcom = typeof url != 'undefined' && url.indexOf('://github.com') != -1 && url.indexOf('://github.com') < 15;
var isOnRepo = typeof url != 'undefined' && isOnGitHubcom && url.match(/.+\/.+\/.+\/.+\/?/gi) != null;
const BOUNTIES_BASE_URL = 'https://gitcoin.co/api/v0.1/bounties/?';

function timeDifference(current, previous) {
    if(current<previous) {
        return 'in ' + timeDifference(previous, current).replace(' ago','');
    }

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        var amt = Math.round(elapsed / 1000);
        var unit = 'sec';
    } else if (elapsed < msPerHour) {
        var amt = Math.round(elapsed / msPerMinute);
        var unit = 'min';
    } else if (elapsed < msPerDay ) {
        var amt = Math.round(elapsed / msPerHour );
        var unit = 'hour';
    } else if (elapsed < msPerMonth) {
        var amt = Math.round(elapsed / msPerDay);
        var unit = 'day';
    } else if (elapsed < msPerYear) {
        var amt = Math.round(elapsed / msPerMonth);
        var unit = 'month';
    } else {
        var amt = Math.round(elapsed / msPerYear);
        var unit = 'year';
    }
    var plural = amt != 1 ? 's' : '';
    
    return amt + ' ' + unit + plural + ' ago';
};

var addMessage = function(_class, msg, seconds=5000) {
    let item = document.createElement('li');
    item.id = Math.floor((Math.random() * 1000000) + 1);
    item.classList.add(_class);
    let itemText = document.createTextNode(msg);
    item.appendChild(itemText);
    let messages = document.getElementById('messages');
    messages.appendChild(item);
    var callback = function(){
        $('#' + item.id).remove();
    };
    setTimeout(callback, seconds);
}

var getAllBounties = function() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", BOUNTIES_BASE_URL + 'order_by=web3_created&idx_status=open&network=mainnet', false ); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

var limitStr = function(str,len) {
    if(str.length < len){
        return str;
    }
    return str.substring(0,len) + '...';
}

var createItem = function(imgsrc, timeDiff, tokenName, title, state, linkUrl) {
    let img = document.createElement('img');
    img.style.height = '20px';
    img.style.width = '20px';
    img.src = imgsrc;
    let tr = document.createElement('tr');
    let tdImg = document.createElement('td');
    tdImg.appendChild(img);
    let tdTimeDiff = document.createElement('td');
    let textTimeDiff = document.createTextNode(timeDiff);
    tdTimeDiff.appendChild(textTimeDiff);
    let tdTokenName = document.createElement('td');
    let textTokenName = document.createTextNode(tokenName);
    tdTokenName.appendChild(textTokenName);
    let tdLimit = document.createElement('td');
    let textLimit = document.createTextNode(title);
    tdLimit.appendChild(textLimit);
    let tdStatus = document.createElement('td');
    let textStatus = document.createTextNode(state);
    tdStatus.appendChild(textStatus);
    tdLink = document.createElement('td');
    let githubLink = document.createElement('a');
    githubLink.target  = '_blank';
    githubLink.classList.add('target');
    githubLink.href = linkUrl;
    let textView = document.createTextNode('View >>');
    githubLink.appendChild(textView);
    tdLink.appendChild(githubLink);
    tr.appendChild(tdImg);
    tr.appendChild(tdTimeDiff);
    tr.appendChild(tdTokenName);
    tr.appendChild(tdLimit);
    tr.appendChild(tdStatus);
    tr.appendChild(tdLink);
    return tr;
}

var appendTableNodes = function(bounties) {
    let new_tbody = document.createElement('tbody');
    let old_tbody = document.querySelector('#openbounties tbody');
    if(bounties.length === 0) {
        let noBountiesFound = document.createTextNode('No Bounties Found');
        new_tbody.appendChild(noBountiesFound);
    }
    var max_display = 10;
    for(var i=0; i < bounties.length && i < max_display; i++) {
        let bounty = bounties[i];
        let tr = createItem(
            bounty['avatar_url'],
            timeDifference(new Date(), new Date(bounty['web3_created'])),
            Math.round(100.0 * bounty['value_in_token'] / 10 ** 18) / 100 + ' ' + bounty['token_name'],
            limitStr(bounty['title'], 30),
            limitStr(bounty['status'],30),
            bounty['github_url']
        );
        new_tbody.appendChild(tr);
    }
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
}

var all_bounties = getAllBounties();

var searchBounties = function(keyword) {
  keyword = keyword.toLowerCase();
  var matching_bounties = [];
  for (var i = all_bounties.length - 1; i >= 0; i--) {
    var bounty_keywords = JSON.parse(all_bounties[i].raw_data[8]).issueKeywords.toLowerCase();
    var bounty_title = all_bounties[i].title.toLowerCase();
    var do_keywords_contain = bounty_keywords.indexOf(keyword) !== -1;
    var does_title_contain = bounty_title.indexOf(keyword) !== -1;
    if (do_keywords_contain || does_title_contain) {
      matching_bounties.push(all_bounties[i]);
      localStorage.setItem('keyword', keyword);
    }
  }
  appendTableNodes(matching_bounties);
}

if (isOnGitHubcom && isOnRepo) {
    var repo = localStorage['browser_location'].split('/')[4];
    //console.log(repo, 'repo')
    searchBounties(repo);
}

$(document).ready(function() {
    $('.search-button').on('click', function() {
        let keyword = document.getElementById('search_bar').value;
        searchBounties(keyword)
    });

    $('#search_bar').on('keypress', function(e) {
        if (e.which === 13) {
            let keyword = document.getElementById('search_bar').value;
            searchBounties(keyword);    
        }
    });

    $('input[name=Tip]').on('click', function() {
        var username = $('input[name=username]').val();
        if (username === '') {
            alert('Invalid username');
        } else {
            $('#tip').html('Transaction has been submitted to the blockchain.');
        }
    });
    if(localStorage['githubusername']) {
        $('#username').text('@' + localStorage['githubusername']);
    }

    if(!isweb3()){
        addMessage('warning',`Metamask not detected.  Please install metamask to proceed.`);
    }else if(!isweb3unlocked()){
        addMessage('warning','Metamask locked.  Try unlocking it & refreshing.');
    } else {
        $('#address').text(limitStr(web3account(),10));
        $('#address').attr('href','https://etherscan.io/address/'+web3account());
        $('#balance').text(localStorage['ethbalance']);
    }

    fetch(BOUNTIES_BASE_URL + 'idx_status=open&order_by=-web3_created').then(res => res.json()).then(results => {
        let new_tbody = document.createElement('tbody');
        let old_tbody = document.querySelector('#openbounties tbody');
        if(results.length == 0) {
            let noBountiesFound = document.createTextNode('No Bounties Found');
            new_tbody.appendChild(noBountiesFound);
            old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
        }
        if (localStorage['keyword']) {
            searchBounties(localStorage['keyword']);
            var keyword = document.getElementById('search_bar').value = localStorage['keyword'];
        } else {
            var max_display = 10;
            for(var i = 0; i < results.length && i < max_display; i++) {
                var result = results[i];
                let tr = createItem(
                    result['avatar_url'],
                    timeDifference(new Date(), new Date(result['web3_created'])),
                    Math.round(100.0 * result['value_in_token'] / 10 ** 18) / 100 + ' ' + result['token_name'],
                    limitStr(result['title'], 30),
                    limitStr(result['status'],30),
                    result['github_url']
                );
                new_tbody.appendChild(tr);
            }
            old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
        }
    }).catch((e) => {
        let err = document.createTextNode('Error: Could not reach api: ' + e);
        new_tbody.appendChild(err);
        old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
    });

    $('#bounty a').attr('href', 'https://gitcoin.co/funding/new' + '?' + '&user=' + localStorage['githubusername'] + '&source=' + localStorage['browser_location']);
});


