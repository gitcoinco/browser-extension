/* --------------------------- Interface Globals ---------------------------- */
import 'extensionTheme/stylesheet/app.global.css'
/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { ThemeProvider } from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
/* ------------------------- Internal Dependencies -------------------------- */
import themeSettings from 'extensionTheme/settings'

/* ---------------------------- Initialization ------------------------------ */
injectTapEventPlugin();
export default function Providers({ store, history, children }) {
  return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={themeSettings}>
            <MuiThemeProvider>

                {children}

            </MuiThemeProvider>
          </ThemeProvider>
        </ConnectedRouter>
    </Provider>
  );
}
