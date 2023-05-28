import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import ComposeMail from "./component/ComposeMail";
import Layout from "./component/Layout";
import Received from "./component/Received";

import { useSelector } from "react-redux";

import Sent from "./component/Sent";
import Home from "./pages/Home";

function App() {

  const isLoggedIn = useSelector((state) => state.login.isloggedIn);


  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/welcome" exact>
           {isLoggedIn && <Welcome />}
           {!isLoggedIn && <Login />}
          </Route>

          <Route path="/in" exact>
           {isLoggedIn && <Received />}
            {!isLoggedIn && <Login />}
          </Route>
          <Route path="/out" exact>
           {isLoggedIn &&  <Sent />}
            {!isLoggedIn && <Login />}
          </Route>
          <Route path="/compose" exact>
            {isLoggedIn && <ComposeMail />}
            {!isLoggedIn && <Login />}
          </Route>
          <Route path="/home" exact>
           {isLoggedIn && <Home/>}
           {!isLoggedIn && <Login />}
          </Route>
        
        </Switch>
       
      </Layout>
      
     
    </>
  );
}

export default App;
