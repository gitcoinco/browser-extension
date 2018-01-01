<img src='https://d3vv6lp55qjaqc.cloudfront.net/items/263e3q1M2Y2r3L1X3c2y/helmet.png' width="150px" />
# Staging - Chrome Extension
The staging branch is an experimental branch. Intended to offer a working prototype for designers and developers to experiment with larger codebase changes.

## Proposed Prototype Ideas
- [x] Webpack   
- [x] React   
- [ ] uPort*
- [ ] RxJS/RxDB
- [ ] Offline Storage + Minimal Server Requests

Uport has been partially implemented, but can't be considered a prototype. It doesn't do anything meaningful.

### Webpack
The Webpack Bundle process composes the ```entry``` and ```src``` files into the ```build``` folder.

- entry: Non-Javascript Application files.
- src: Javascript Application files.

The configuration for the build process is ```configuration/webpack.config.extension.js```
The configuration for development is ```configuration/webpack.config.extension.dev.js```

```
npm run build || yarn build <---- Bundles Chrome Extension
npm run start || yarn start <---- React Hot Loading for Popup Development (localhost: 3000)
```

**Notice:** Webpack implements ~~black magic~~ dependency bundling, so the normal ```chrome.extension``` method doesn't work, because Webpack doesn't know ```chrome``` will be available in the global ```window``` object and therefore will fail during the bundle/compiling process - assuming you made the mistake. Therefore, the ```chrome``` object must be explicitliy declared in ```window.chrome``` to interact with Chrome Extension specific methods/functions. **This could be changed with a Webpack plugin.**

## React
The React family has been added (Redux, Router, Sagas) to help scale the interface.

As mentioned in a recent Tweet (https://twitter.com/GetGitcoin/status/947533717689450497) the future is bright for the Gitcoin ecosystem. As Gitcoin features become interconnected, hopefully predictable interface state management can help designers and developers more quickly and easily code new features.

Common async management (generators, await and promises) are implemented within the application bundle. Helping designers and developers more easily reason about Javascript's *notorious* single threaded callback style.

Basically, a top-level Redux store exists to monitor inbound/outbound requests using the Saga methodology.

>  From now on, nothing goes down unless I'm involved. No ethlotto, no asyncronous requests, no nothing. An API gets requested in the Interwebs, I want in. - Kings of New York.

If meaningful things happen in the application they should be tracked and available for any component or feature to respond to.

A good example is in ```src/core/assimilation/symbiosis/uport/sagas.js```

A user wants to request credentials. Perfect. We dispatch a request from our application. The Sagas will catch the request. Manage the outbond data request (to the blockchain) and respond accordingly: requested, success or failure.

Now from anywhere in the application the request can be observed and individual components/features can respond accordingly. Maybe we want to display an Avatar and Name in the header. Perhaps, a smart contract is automatically communnicated with via uPort login. Whatever the case will be, predictable state management requests (perhaps especially with the blockchain) will make life joyous.

```
/*---*--- Get Credentials ---*---*/
function* getCredentials({payload, metadata}) {
  try {
    yield put(notificationOpen({payload:{title: 'Requesting: Identity'}}))
    const requestedCredentials = payload
    const credentials = yield uPortConnection.requestCredentials(requestedCredentials)
    yield put(uPortGetCredentialsSuccess({
      payload: credentials, 
      metadata
    }))
    yield put(notificationOpen({payload:{
      title: 'Returned: Identity Request',
      message: `Welcome ${credentials.name} to Eidenai`
    }}))
  } catch(e) {
    yield put(uPortGetCredentialsFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{
      title: 'Failure: Identity Request ',
      message: e,
    }}))
  }
}
```


#### Basic Tenets
> State machine — a set of defined states, where transition between states is initiated by triggering an action.

> Workflow — a sequence of activities, where transition between them occurs when the previous activity is completed. Workflows can include branching to other activities. A workflow can be built on top of a state machine. A process manager is a workflow pattern.

> Saga — multiple workflows, each providing compensating actions for every step of the workflow where it can fail. Sagas are not necessarily implemented using workflows.

##### File Structure
Probably the biggest misdirection in the React infrastructure is the ```core``` folder. Ultimately it's a judgement call by each developer whether the feature is specific to the Chrome Extension or can be abstracted away, but if the code could potentially be copy/pasted into a Browser, Electron or other Javascript based application, it should probably live within the core folder.

Everything else should be contained within their respective folders or core Javascript file.

```
src/
- core <--- resources abstracted away from Chrome Extension specific codebase.
- popup/index.js
- background.js
- options.js
```

# Gitcoin

Gitcoin pushes Open Source Forward.  Learn more at [https://gitcoin.co](https://gitcoin.co)

[Star](https://github.com/gitcoinco/chrome_ext/stargazers) and [watch](https://github.com/gitcoinco/chrome_ext/watchers) this github repository to stay up to date, we're pushing new code several times per week!

<img src='https://d3vv6lp55qjaqc.cloudfront.net/items/263e3q1M2Y2r3L1X3c2y/helmet.png'/>