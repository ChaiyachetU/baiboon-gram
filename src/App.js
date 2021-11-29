import { BrowserRouter, Route, Redirect } from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Route path="/">
            {!user && <Redirect to="/login" />}
            {user && <Home />}
          </Route>
          <Route path="/login">
            {user && <Redirect to="/" />}
            {!user && <Login />}
          </Route>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
