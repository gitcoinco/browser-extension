// injects various information on the page
var body = function(url) {
    var isOnGitHubcom = url.indexOf('://github.com') !== -1 && url.indexOf('://github.com') < 15;
    var isOnGitHubEnterprise = document.getElementsByClassName('enterprise').length >= 1 && document.getElementsByClassName('header-logo-invertocat').length >= 1;
    var isOnGitHub = isOnGitHubEnterprise || isOnGitHubcom;

    if(!isOnGitHub) {
        setThumbnail('');
    }

    var isOnUserProfile = url.match(/.+\/.+\/?/gi) !== null && document.getElementById("report-block-modal");
    var isOnProfile = url.match(/.+\/.+\/.+\/?/gi) !== null;
    var isOnRepo = url.match(/.+\/.+\/.+\/.+\/?/gi) !== null;
    var isOnIssuePage = url.indexOf('/pull/') !== -1 || url.indexOf('/issue/') !== -1 || url.indexOf('/issues/') !== -1;
    var isOnIssuesPage = url.indexOf('/issues') !== -1;
    var isAlreadyGitcoinBounty = document.getElementsByClassName('gitcoin_bounty').length >= 1;
    var isOnIssueBoard = url.indexOf('boards') !== -1;
    
    // Location | User Profile
    if(isOnUserProfile && !isAlreadyGitcoinBounty ) {
        addButtonToUserPage();
    }

    // Location | Issue Page
    if (isOnIssuePage) {
        addButtonToIssuePage();
        addBountyInfoToIssuePage(url);
        injectGetBountyAmount();
    } else if (isOnRepo) {
        var repoUrl = document.location.href.split('issues')[0].split('pulls')[0];
        injectGetNumberBounties(repoUrl);
    } else {
        injectGetTotalBounties();
    }

    if (isOnIssuesPage) {
        injectGetAllBountiesOnIssuesPage();
    }
    if (isOnIssueBoard) {
        injectGetAllBountiesOnIssueBoard(); 
    }
}

var url = window.location.href;
var hasRun = false;

setInterval(function() {
    if (url !== window.location.href || !hasRun) {
        url = window.location.href;
        body(url);
    }
    hasRun = true;
}, 1000);
