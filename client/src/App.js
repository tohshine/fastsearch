import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopHeader from './layout/topHeader';
import Welcome from './component/welcome';
import Footer from './layout/Footer';
import Login from './component/auth/login';
import Register from './component/auth/getStarted';
import EntRegistration from './component/entRegistration';
import details from './component/clientSearch/details'
import search from './component/clientSearch/EntSearch';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import setAuth from './util/setAuth';
import PrivateRoute from './routing/privateRoute';
import 'antd/dist/antd.css';
import './App.less';
import NotFound from './component/nofFound'
if (localStorage.token) {
  setAuth(localStorage.token);
}

function App() {
  return (
    <div className="body">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <div className="content">
              <TopHeader />

              <Switch>
                <Route  path="/create_account" component={Register} />
                <Route exact path="/" component={Welcome} />
                <Route  path="/details/:id" component={details}/>
                <Route  path="/search" component={search} />
                <PrivateRoute  path="/start" component={EntRegistration} />
                <Route  path="/login" component={Login} />
                <Route  component={NotFound}/>
              </Switch>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
