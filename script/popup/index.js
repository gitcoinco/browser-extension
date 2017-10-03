var isweb3 = function(){
    return localStorage['isweb3'];
}
var isweb3unlocked = function(){
    return localStorage['web3accountslength'] != 0;
}
var web3account = function(){
    return localStorage['web3account'];
}


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
        var unit = 'second';
    }

    else if (elapsed < msPerHour) {
        var amt = Math.round(elapsed/msPerMinute);
        var unit = 'minute';
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

var limitStr = function(str,len){
    if(str.length < len){
        return str;
    }
    return str.substring(0,len) + '...';
}


$(document).ready(function(){
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
        $('#address').text(limitStr(web3account(),15));
        $('#address').attr('href','https://etherscan.io/address/'+web3account());
        $('#balance').text(localStorage['ethbalance']);
    }

    var bounties_api_url = 'https://gitcoin.co/api/v0.1/bounties/?idx_status=submitted&order_by=web3_created';
    $.get(bounties_api_url,function(results){
        if(results.length == 0){
            $("#openbounties tbody").append('No Bounties Found');
        }
        var max_display = 10;
        for(var i=0; i<results.length && i<max_display; i++){
            var result = results[i];
            var newHTML = '                <tr> \
                  <td>'+timeDifference(new Date(), new Date(result['web3_created']))+'</td> \
                  <td>'+Math.round(result['value_in_token']/10**18)+' '+result['token_name']+'</td> \
                  <td>'+limitStr(result['title'],30)+'</td> \
                  <td><a target=_blank href="'+result['github_url']+'">View >></a></td> \
                </tr> \
                ';
            $("#openbounties tbody").append(newHTML);
        }
    }).error(function(){
            $("#openbounties tbody").append('Error: Could not reach api.');
    });;

    $("#bounty a").attr('href', 'https://gitcoin.co/funding/new' + "?" + '&user=' + localStorage['githubusername'] + "&source=" + localStorage['browser_location']);

});


