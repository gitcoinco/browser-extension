import React from 'react';
import banner from './header.png';

export function Header() {
  const style = {
    width: '600px',
    height: '161px',
    backgroundSize: 'contain',
    marginTop: '-20px',
    marginBottom: '10px'
  };

  return (<div id='header'>
        <ul id='messages'></ul>
        <a target='_blank' href='https://gitcoin.co/explorer' rel='noopener noreferrer'>
          <img src={banner} style={style} alt='' />
        </a>
      </div>
    );
}

export default Header;
