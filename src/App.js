import React from 'react';

// scss
import './default.scss';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

// Switch component is used for setting priority first one have the highest priority
// Route component is used for setting routes to components
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path='/registration' render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
        </Switch>
    </div>
  );
}

export default App;
