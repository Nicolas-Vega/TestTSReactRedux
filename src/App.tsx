import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Detail from "./Detail";
import store from './_store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BrowserRouter>
            <Route>
              <Detail>
                Test
              </Detail>
            </Route>
          </BrowserRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
