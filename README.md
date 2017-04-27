<h1 align="center">react-native-retriable-fetch</h1>
<div align="center">
  <strong>Quick and dirty wrapper around fetch API to allow retries</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/react-native-retriable-fetch">
    <img src="https://img.shields.io/npm/v/react-native-retriable-fetch.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/react-native-retriable-fetch">
  <img src="https://img.shields.io/npm/dm/react-native-retriable-fetch.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/react-native-retriable-fetch">
    <img src="https://img.shields.io/travis/tiaanduplessis/react-native-retriable-fetch.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Freact-native-retriable-fetch">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Freact-native-retriable-fetch.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/react-native-retriable-fetch">
    <img src="https://dependencyci.com/github/tiaanduplessis/react-native-retriable-fetch/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-retriable-fetch/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-native-retriable-fetch.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/react-native-retriable-fetch/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/react-native-retriable-fetch.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-retriable-fetch/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/react-native-retriable-fetch.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20react-native-retriable-fetch!%20https://github.com/tiaanduplessis/react-native-retriable-fetch%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/react-native-retriable-fetch.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/react-native-retriable-fetch/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install --save react-native-retriable-fetch
# OR
$ yarn add react-native-retriable-fetch
```

## Usage

Use like you would normally use the `fetch` API. This module adds additional options:

- `retries` (default: 1, Optional) - Number of retries to perform
- `delay`: (default: undefined, Optional) - Delay between retry attempts
- `rejectCodes`: (default: [], Optional) - Array of response status codes to trigger a retry

```js
// ... Other imports

import fetch from 'react-native-retriable-fetch'

export default class Example extends Component {

  componentDidMount () {
		// Use like you would fetch
    fetch('foobarbaz', {retries: 5, delay:2000, rejectCodes: [404]})
  }

	render() {
		return (
			// lalala
		)
	}
}
```

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
