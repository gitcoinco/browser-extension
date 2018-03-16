import React from 'react';
import { BOUNTIES_BASE_URL, limitStr, timeDifference } from '../utils/utils';
import BountyItem from './BountyItem';

export function TableNodes({bounties, loading}) {
  if (loading) {
    return (
      <tbody>
        <tr>
          <td col='4'>Loading...</td>
        </tr>
      </tbody>
    );
  }
  if (bounties.length === 0) {
    return (
      <tbody>
        <tr>
          <td col='4'>No Bounties Found</td>
        </tr>
      </tbody>
    );
  }

  const MAX_DISPLAY = 10;
  let lines = [];
  for(var i=0; i < bounties.length && i < MAX_DISPLAY; i++) {
    let bounty = bounties[i];
    let item = {
      imgsrc: bounty['avatar_url'],
      timeDiff: timeDifference(new Date(), new Date(bounty['web3_created'])),
      tokenAmount: Math.round(100.0 * bounty['value_in_token'] / 10 ** 18) / 100 + ' ' + bounty['token_name'],
      title: limitStr(bounty['title'], 30),
      state: limitStr(bounty['status'],30),
      linkUrl: bounty['github_url']
    }
    lines.push(item);
  }

  return (
    <tbody>
      {lines.map(item => (<BountyItem item={item} key={item.title}/>))}
    </tbody>
  )
}

export default TableNodes;
