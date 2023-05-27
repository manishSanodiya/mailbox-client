
import { Route,Switch} from "react-router-dom/cjs/react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import ComposeMail from "./component/ComposeMail";
import Layout from "./component/Layout";

function App() {
  return (
    <>
    <Layout>
    <Switch>
      <Route path="/" exact>
          <Login />
        </Route>
      <Route path="/welcome" exact>
        <Welcome/>
        </Route>
      <Route path="/compose" exact>
        <ComposeMail/>
        </Route>
      </Switch>
    </Layout>
      
      
      
        
    
    </>
  );
}

export default App;
