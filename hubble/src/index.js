import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bulma/css/bulma.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Main from './components/Main';
import Gallery from './components/Gallery';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path = "/" component = {Main} />
                <Route exact path = "/gallery" component = {Gallery} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
