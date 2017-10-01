

//injects various information on the page
var body = function(){
    var url = document.location.href;
    var isOnGitHubcom = url.indexOf('://github.com') != -1 && url.indexOf('://github.com') < 15;
    var isOnGitHubEnterprise = document.getElementsByClassName('enterprise').length >= 1 && document.getElementsByClassName('header-logo-invertocat').length >= 1;
    var isOnGitHub = isOnGitHubEnterprise || isOnGitHubcom;

    if(!isOnGitHub){
        setThumbnail('');
    }

    var isOnUserProfile = isOnGitHub && url.match(/.+\/.+\/?/gi) != null;
    var isOnProfile = isOnGitHub && url.match(/.+\/.+\/.+\/?/gi) != null;
    var isOnRepo = isOnGitHub && url.match(/.+\/.+\/.+\/.+\/?/gi) != null;
    var isOnIssuePage = isOnGitHub && ( url.indexOf('/pull/') != -1 || url.indexOf('/issue/') != -1 || url.indexOf('/issues/') != -1 );
    var isAlreadyGitcoinBountyD = document.getElementsByClassName('gitcoin_bounty').length >= 1;
    
    if(isOnUserProfile){
        addButtonToUserPage();
    }
    if (isOnIssuePage){
        if (!isAlreadyGitcoinBountyD){
            addButtonToIssuePage();
        }
        injectGetBountyAmount();
    } else if (isOnRepo){
        var repoUrl = document.location.href.split('issues')[0].split('pulls')[0];
        injectGetNumberBounties(repoUrl);
    } else if (isOnGitHub){
        injectGetTotalBounties();
    }
}

body();

