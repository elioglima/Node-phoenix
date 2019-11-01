import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux'
import Routes from './routes'
import Firebase, { FirebaseContext } from './plugins/Firebase/';

import HeaderComponent from './components/header'
import FooterComponent from './components/footer'

function App() {
  return (
    <Provider store={store} >
      <FirebaseContext.Provider value={new Firebase()} >
        <div className="App">
          <HeaderComponent />
          <Routes />
          <FooterComponent />
        </div>
      </FirebaseContext.Provider>
    </Provider>
  );
}

export default App;
