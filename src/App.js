import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./component/Home/Home";
import LeagueDetails from "./component/LeagueDetails/LeagueDetails";
import NoMatch from "./component/NoMatch/NoMatch";

function App() {
  return (
    <div >
      <Router>

       <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
            </Route>
            <Route path='/league/:idLeague'>
              <LeagueDetails/>
            </Route>
          <Route path="/about">
            <NoMatch/>
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
