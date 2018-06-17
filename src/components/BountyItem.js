import React from 'react';

const bountyImgStyle = {
  height: '20px',
  width: '20px'
};

export function BountyItem({item}) {
  return (
    <tr>
      <td><img src={item.imgsrc} alt='' style={bountyImgStyle} /></td>
      <td>{item.timeDiff}</td>
      <td>{item.tokenAmount}</td>
      <td>{item.title}</td>
      <td>{item.state}</td>
      <td><a href={item.linkUrl} target= '_blank' className='target' rel='noopener noreferrer'>View &gt;&gt;</a></td>
    </tr>
  )
}

export default BountyItem;
