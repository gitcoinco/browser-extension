<img src='https://d3vv6lp55qjaqc.cloudfront.net/items/263e3q1M2Y2r3L1X3c2y/helmet.png'/>

This Extension allows users to find new & interesting work, right where you work, on github.com.

# Gitcoin Web Extension

Gitcoin pushes Open Source Forward.  Learn more at [https://gitcoin.co](https://gitcoin.co)

[Star](https://github.com/gitcoinco/browser-extension/stargazers) and [watch](https://github.com/gitcoinco/browser-extension/watchers) this github repository to stay up to date, we're pushing new code several times per week!

# Browser Extension

## Get It Today

The Browser extension is live on the Google Chrome Store.  [Get it here](https://gitcoin.co/extension).

<a href="https://gitcoin.co/extension">
<img src="https://d3vv6lp55qjaqc.cloudfront.net/items/062d2k3t43040c2u2e2H/Image%202017-09-25%20at%204.12.56%20AM.png"/>
</a>

## What Does This Extension Do
=======

### Browse Work Directly on Github

<img src='readme/browse_on_github.png'>

### Filter Available Work from Github

<img src='readme/filter_available_work.png'>

### Fund Work Directly on Github

<img src='readme/fund.png'>

### Tip Users Directly on Github

<img src='readme/tip.png'>


# How to build the extension

Clone the repo, then

```sh
$ yarn install
$ yarn build
```

## How to test without build as extension

Note: this method is only useful for testing the popup page.

To avoid cross domain (CORS) issue when using fetch API, modify `src/constants.js` and change `DEVELOPMENT`'s value:

```js
const DEVELOPMENT = true
```

That will use mocked json file in `/public/mock.gitcoin.co.json`.

Then debugging the popup page via `yarn start`.

## Web extention lint

run web extention lint via

```
npm run extlint
```

## Test

Run `yarn test` or `yarn test --coverage` for test and test coverage.


# Legal

```
    Copyright (C) 2017 Gitcoin Core

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

```


<!-- Google Analytics -->

<img src='https://ga-beacon.appspot.com/UA-102304388-1/gitcoinco/browser-extension' style='width:1px; height:1px;' >
