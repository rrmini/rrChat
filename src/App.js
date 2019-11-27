// import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app'
// import 'firebase/auth'
// import { firebaseConfig } from './firebaseConfig'

import React, { Component } from "react";
import Router from "./containers/Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "@material-ui/core/styles";
import initStore, { history } from "./store";
// import logo from './logo.svg';
import "./css/App.css";
import theme from "./css/theme";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const firebaseApp = firebase.initializeApp(firebaseConfig);
//
// const firebaseAppAuth = firebaseApp.auth();
//
// const providers = {
//     googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

class App extends Component {
  render() {
    // const {
    //     user,
    //     signOut,
    //     signInWithGoogle,
    // } = this.props;
    // console.log(this.props);
    return (
      <Provider store={initStore()}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ConnectedRouter store={initStore()} history={history}>
              <Router />
              {/*{*/}
              {/*user*/}
              {/*? <p>Hello, {user.displayName}</p>*/}
              {/*: <p>Please sign in.</p>*/}
              {/*}*/}
              {/*{*/}
              {/*user*/}
              {/*? <button onClick={signOut}>Sign out</button>*/}
              {/*: <button onClick={signInWithGoogle}>Sign in with Google</button>*/}
              {/*}*/}
            </ConnectedRouter>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

// export default withFirebaseAuth({
// 		providers,
// 		firebaseAppAuth,
// })(App); // App
