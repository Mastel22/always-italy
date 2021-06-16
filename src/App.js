import Landing from './pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Signup from './pages/auth/Signup';
import Welcome from './pages/Shop/Welcome';
import Signin from './pages/auth/Signin';
import MainShop from './pages/Shop/MainShop';
import ContactPage from './pages/ContactUs/ContactPage';

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
          <Route path="/contactus" exact component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
