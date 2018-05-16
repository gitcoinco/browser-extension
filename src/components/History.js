/* globals localStorage */
import React, { Component } from 'react';
import { BOUNTIES_BASE_URL } from '../utils/utils';
import { DEVELOPMENT } from '../constants';
import TableNodes from './TableNodes';

const bountyStyle = {
  float: 'right'
};

const searchBtnStyle = {
  marginLeft: '25px'
};

const ENTER_KEY = 13;

export class History extends Component {
  constructor() {
    super();
    this.state = {
      allBounties: [],
      bounties: [],
      browserLocation: null,
      githubUsername: null,
      keyword: '',
      loading: true,
      fetchError: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    let fetchUrl = DEVELOPMENT ? '/mock.gitcoin.co.json' :
      BOUNTIES_BASE_URL + 'idx_status=open&order_by=-web3_created&network=mainnet';

    let url = localStorage['browser_location'];
    let keyword = localStorage['keyword'];
    let isOnGitHubcom = typeof url !== 'undefined' && url.indexOf('://github.com') !== -1 && url.indexOf('://github.com') < 15;
    let isOnRepo = typeof url !== 'undefined' && isOnGitHubcom && url.match(/.+\/.+\/.+\/.+\/?/gi) != null;

    fetch(fetchUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          allBounties: data,
          bounties: data,
          loading: false
        });
      })
      .then(() => {
        if (isOnGitHubcom && isOnRepo) {
          var repo = url.split('/')[4];
          this.filterBounties(repo);
        }

        if (keyword) {
          this.setState({keyword});
          this.filterBounties(keyword);
        }

      if(localStorage['githubusername']) {
        this.setState({
          githubUsername: localStorage['githubusername'],
          browserLocation: url
        });
      }
    })
    .catch((e) => {
      this.setState({fetchError: 'Error: Could not reach api: ' + e});
    });
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.id === 'search-button') {
      let { keyword } = this.state;
      this.filterBounties(keyword);
    }
  }

  handleChange(e) {
    this.setState({keyword: e.target.value});
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      let { keyword } = this.state
      this.filterBounties(keyword);
    }
  }

  filterBounties(keyword) {
    keyword = keyword.trim().toLowerCase();
    let matching_bounties = [];
    if (keyword.length === 0) {
      matching_bounties = this.state.allBounties;
    } else {
      let all_bounties = this.state.allBounties;
      for (let i = all_bounties.length - 1; i >= 0; i--) {
        let bounty_keywords = (all_bounties[i].metadata && all_bounties[i].metadata.issueKeywords) ? all_bounties[i].metadata.issueKeywords.toLowerCase() : '';
        let bounty_title = all_bounties[i].title.toLowerCase();
        let do_keywords_contain = bounty_keywords.indexOf(keyword) !== -1;
        let does_title_contain = bounty_title.indexOf(keyword) !== -1;
        if (do_keywords_contain || does_title_contain) {
          matching_bounties.push(all_bounties[i]);
          localStorage.setItem('keyword', keyword);
        }
      }
    }
    this.setState({
      bounties: matching_bounties,
      keyword,
      loading: false
    });
  }

  render() {
    let href = this.state.githubusername ? `https://gitcoin.co/funding/new?&user=${this.state.githubUsername}&source=${this.state.browserLocation}` : 'https://gitcoin.co/funding/new';
    return this.state.fetchError ? (<span>{this.state.fetchError}</span>) : (
      <div id='history'>
        <div id='bounty' style={bountyStyle}>
            <a target='_blank' href={href} rel='noopener noreferrer' className='btn btn-sm btn-primary js-details-target gitcoin_button'>+ Fund Issue</a>
        </div>
        <h5>Funded Issues</h5>
        <input type='text' id='search_bar' value={this.state.keyword} placeholder='Search for keywords..' onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        <button id="search-button" style={searchBtnStyle} onClick={this.handleClick} className='btn btn-sm btn-primary js-details-target gitcoin_button'>Search</button>
        <table className='table table-striped table-sm' id='openbounties'>
          <thead>
            <tr>
              <th></th>
              <th>When</th>
              <th>Amount</th>
              <th>For</th>
              <th>Status</th>
              <th>Link</th>
            </tr>
          </thead>
          <TableNodes {...this.state} />
        </table>
        <a target='new' href='https://gitcoin.co/explorer' rel='noopener noreferrer'>View More &gt;&gt; </a>
      </div>
    );
  }
}

export default History;
