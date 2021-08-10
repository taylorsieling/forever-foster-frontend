import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from "./auth/protected-route";
import Auth0ProviderWithHistory from './auth/auth0Provider'

import Dashboard from './containers/Dashboard'
import Home from './components/Home';

function App() {
  return (
    <Router>
        <Auth0ProviderWithHistory>

          {/* <div className="spruce">
          <Navigation />
          </div> */}
          
          <Switch> 
            
            <Route exact path='/' component={ Home }/>
            <ProtectedRoute exact path='/dashboard' component={ Dashboard }/>

          </Switch>

          {/* <div className="spruce">
            <Footer/>
          </div> */}

        </Auth0ProviderWithHistory>
      </Router>
  );
}

export default App;
