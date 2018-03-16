function timeDifference(current, previous) {
  if (current<previous) {
    return 'in ' + timeDifference(previous, current).replace(' ago', '');
  }

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;
  var amt;
  var unit;

  if (elapsed < msPerMinute) {
    amt = Math.round(elapsed/1000);
    unit = 'sec';
  } else if (elapsed < msPerHour) {
    amt = Math.round(elapsed/msPerMinute);
    unit = 'min';
  } else if (elapsed < msPerDay ) {
    amt = Math.round(elapsed/msPerHour );
    unit = 'hour';
  } else if (elapsed < msPerMonth) {
    amt = Math.round(elapsed/msPerDay);
    unit = 'day';
  } else if (elapsed < msPerYear) {
    amt = Math.round(elapsed/msPerMonth);
    unit = 'month';
  } else {
    amt = Math.round(elapsed/msPerYear);
    unit = 'year';
  }
  var plural = amt !== 1 ? 's' : '';

  return amt + ' '+unit+plural+' ago';
};

function limitStr(str,len) {
  if(str.length < len){
      return str;
  }
  return str.substring(0,len) + '...';
}

const BOUNTIES_BASE_URL = 'https://gitcoin.co/api/v0.1/bounties/?';

export {
  BOUNTIES_BASE_URL,
  limitStr,
  timeDifference
}
