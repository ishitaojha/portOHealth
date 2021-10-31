import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import AboutHiv from './components/AboutHiv/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={AboutHiv}/>
                <Route exact path="/Contact" component={Contact}/>
            </Switch>    
        </Router>
    </div>
  );
}

export default App;
