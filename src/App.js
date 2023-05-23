
import { Route,Switch} from "react-router-dom/cjs/react-router-dom";
import "./App.css";

import Login from "./pages/Login";

function App() {
  return (
    <>
      <Switch>
      <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
      
        
    
    </>
  );
}

export default App;
