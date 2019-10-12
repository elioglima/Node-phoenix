import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux'
import Routes from './routes'
import ContextWrapper from './components/contextWrapper'

import HeaderComponent from './components/header'
import FooterComponent from './components/footer'

function App() {
  return (
    <Provider store={store} >
      <ContextWrapper>
        <div className="App">
          <HeaderComponent />
            <Routes />
          <FooterComponent />
        </div>
      </ContextWrapper>
    </Provider>
  );
}

export default App;
