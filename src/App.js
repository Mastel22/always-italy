import Landing from './pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Signup from './pages/auth/Signup';
import Welcome from './pages/Shop/Welcome';
import Signin from './pages/auth/Signin';
import MainShop from './pages/Shop/MainShop';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" exact component={About} />
          <Route path="/register" exact component={Signup} />
          <Route path="/login" exact component={Signin} />
          <Route path="/shop" exact component={Welcome} />\
          <Route path="/mainshop" exact component={MainShop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
