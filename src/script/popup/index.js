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
//console.log(isOnGitHubcom, isOnRepo, 'where you at?')




function timeDifference(current, previous) {

    if(current<previous){
        return "in " + timeDifference(previous, current).replace(" ago","")
    }

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        var amt = Math.round(elapsed/1000);
        var unit = 'sec';
    }

    else if (elapsed < msPerHour) {
        var amt = Math.round(elapsed/msPerMinute);
        var unit = 'min';
    }

    else if (elapsed < msPerDay ) {
        var amt = Math.round(elapsed/msPerHour );
        var unit = 'hour';
    }

    else if (elapsed < msPerMonth) {
        var amt = Math.round(elapsed/msPerDay);
        var unit = 'day';
    }

    else if (elapsed < msPerYear) {
        var amt = Math.round(elapsed/msPerMonth);
        var unit = 'month';
    }

    else {
        var amt = Math.round(elapsed/msPerYear);
        var unit = 'year';
    }
    var plural = amt != 1 ? 's' : '';
    
    return amt + ' '+unit+plural+' ago';   
};

var addMessage = function(_class, msg, seconds=5000){
    var id = Math.floor((Math.random() * 1000000) + 1);
    var html = '<li id ="'+id+'" class="'+_class+'">'+msg+'</li>';
    $("#messages").append(html);
    var callback = function(){
        $("#"+id).remove();
    };
    setTimeout(callback, seconds);
}

getAllBounties = function(){
  var bounties_api_url = 'https://gitcoin.co/api/v0.1/bounties/?order_by=web3_created&idx_status=open&network=mainnet';
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", bounties_api_url, false ); // false for synchronous request
  xmlHttp.send( null );
  //console.log('all Bounties', JSON.parse(xmlHttp.responseText))
  return JSON.parse(xmlHttp.responseText);
}

var limitStr = function(str,len){
    if(str.length < len){
        return str;
    }
    return str.substring(0,len) + '...';
}

var appendTableNodes = function(bounties) {
    $("#openbounties tbody").empty();
    if(bounties.length == 0){
        $("#openbounties tbody").append('No Bounties Found');
    }
    var max_display = 10;
    for(var i=0; i<bounties.length && i<max_display; i++){
        var bounty = bounties[i];
        var imghtml = "<img height=20 width=20 src="+bounty['avatar_url']+"/>"
        var val = Math.round(100.0 * bounty['value_in_token']/10**18) / 100;
        var newHTML = '                <tr> \
              <td>'+imghtml+'</td> \
              <td>'+timeDifference(new Date(), new Date(bounty['web3_created']))+'</td> \
              <td>'+val+' '+bounty['token_name']+'</td> \
              <td>'+limitStr(bounty['title'],30)+'</td> \
              <td>'+limitStr(bounty['status'],30)+'</td> \
              <td><a class=target target=_blank href="'+bounty['github_url']+'">View >></a></td> \
            </tr> \
            ';
        $("#openbounties tbody").append(newHTML);
    }
}

var all_bounties = getAllBounties();

var searchBounties = function(keyword) {
  keyword = keyword.toLowerCase();
  var matching_bounties = []
  for (var i = all_bounties.length - 1; i >= 0; i--) {
    var bounty_keywords = JSON.parse(all_bounties[i].raw_data[8]).issueKeywords.toLowerCase();
    var bounty_title = all_bounties[i].title.toLowerCase();
    var do_keywords_contain = bounty_keywords.indexOf(keyword) !== -1;
    var does_title_contain = bounty_title.indexOf(keyword) !== -1;
    if (do_keywords_contain || does_title_contain) {
      matching_bounties.push(all_bounties[i])
      localStorage.setItem('keyword', keyword)
    }
  }
  appendTableNodes(matching_bounties)
}

if (isOnGitHubcom && isOnRepo) {
    var repo = localStorage['browser_location'].split('/')[4]
    //console.log(repo, 'repo')
    searchBounties(repo);
}



$(document).ready(function(){

    $('.search-button').click(function() {
        var keyword = document.getElementById('search_bar').value;
        searchBounties(keyword)
    })

    $('input[name=Tip]').click(function(){
        var username = $("input[name=username]").val()
        if (username == ""){
            alert("Invalid username");
        } else {
            $("#tip").html('Transaction has been submitted to the blockchain.')
        }
    });
    if(localStorage['githubusername']){
        $("#username").text("@" + localStorage['githubusername'] );
    }

    if(!isweb3()){
        addMessage('warning',"Metamask not detected.  <a target=_blank href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>Please install metamask to proceed.</a>")
    }else if(!isweb3unlocked()){
        addMessage('warning',"Metamask locked.  Try unlocking it & refreshing.")
    } else {
        $('#address').text(limitStr(web3account(),10));
        $('#address').attr('href','https://etherscan.io/address/'+web3account());
        $('#balance').text(localStorage['ethbalance']);
    }

    var bounties_api_url = 'https://gitcoin.co/api/v0.1/bounties/?idx_status=open&order_by=-web3_created';
    $.get(bounties_api_url,function(results){
        if(results.length == 0){
            $("#openbounties tbody").append('No Bounties Found');
        }
        if (localStorage['keyword']) {
            searchBounties(localStorage['keyword'])
            var keyword = document.getElementById('search_bar').value = localStorage['keyword'];
        }
        else {
            var max_display = 10;
            for(var i=0; i<results.length && i<max_display; i++){
                var result = results[i];
                var val = Math.round(100.0 * result['value_in_token']/10**18) / 100;
                var imghtml = "<img height=20 width=20 src="+result['avatar_url']+"/>"
                var newHTML = '                <tr> \
                      <td>'+imghtml+'</td> \
                      <td>'+timeDifference(new Date(), new Date(result['web3_created']))+'</td> \
                      <td>'+val+' '+result['token_name']+'</td> \
                      <td>'+limitStr(result['title'],30)+'</td> \
                      <td>'+limitStr(result['status'],30)+'</td> \
                      <td><a class=target target=_blank href="'+result['github_url']+'">View >></a></td> \
                    </tr> \
                    ';
                $("#openbounties tbody").append(newHTML);
            }
        }
    }).error(function(){
            $("#openbounties tbody").append('Error: Could not reach api.');
    });;


    $("#bounty a").attr('href', 'https://gitcoin.co/funding/new' + "?" + '&user=' + localStorage['githubusername'] + "&source=" + localStorage['browser_location']);

});


