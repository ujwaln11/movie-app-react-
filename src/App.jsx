import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Addmovie from "./components/Addmovie";
import Moviedetails from "./components/Moviedetails";
import Updatemovie from "./components/Updatemovie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Searchmovie from "./components/Searchmovie";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/addmovie">
            <Addmovie />
          </Route>

          <Route path="/moviedetail:id">
            <Moviedetails />
          </Route>

          <Route path="/update:id">
            <Updatemovie />
          </Route>

          <Route path="/searchmovie:searchKeyword">
            <Searchmovie />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
