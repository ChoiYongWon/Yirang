import React from 'react';
import Home from "./pages/Home/index"
import Container from "./components/home/Container"
import LoginRedirect from "./containers/pages/home/LoginRedirect"
import LogoutRedirect from "./containers/pages/home/LogoutRedirect"
import Manage from "./pages/Manage/index"
import Create from "./pages/Create/index"
import UserAuthority from "./pages/UserAuthority"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Seniors from "./pages/Seniors/index"


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginRedirect}>
        </Route>
        <Route path="/logout" component={LogoutRedirect}>
        </Route>
        <Route path="/seniors" component={Seniors}>

        </Route>
        <Route path ="/manage" component={Manage}>
        </Route>
        <Route path ="/create" component={Create}>
        </Route> 
        <Route path="/userauthority" component={UserAuthority}>
        </Route>

        <Route exact path="/" component={Home}>
        </Route>
      </Switch> 
    </BrowserRouter>
    </>
  );
}

export default App;
