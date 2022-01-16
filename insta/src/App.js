import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

const DefaultContainer = () => (
  <div className="container">
    <Header />
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
