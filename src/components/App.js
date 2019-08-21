import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';

import StartPage from '../pages/StartPage';
import WebdesignPage from '../pages/WebdesignPage';
import DevelopmentPage from '../pages/DevelopmentPage';
import ThreegraphicPage from '../pages/ThreegraphicPage';
import TwographicPage from '../pages/TwographicPage';

import { LayoutProvider } from '../context/LayoutContext';

import '../styles/global.scss';

function App() {
  return (
    <LayoutProvider>
      <BrowserRouter>
        <div className="App">
          <PageHeader />
          <Route path="/" exact component={StartPage} />
          <Route path="/webdesign" exact component={WebdesignPage} />
          <Route path="/webdevelopment" exact component={DevelopmentPage} />
          <Route path="/3dgraphic" exact component={ThreegraphicPage} />
          <Route path="/2dgraphic" exact component={TwographicPage} />
          <PageFooter />
        </div>
      </BrowserRouter>
    </LayoutProvider>
  );
}

export default App;
