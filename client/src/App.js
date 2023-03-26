import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./Components/Dashboard/Dashboard";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";

import "./App.css";
import DashboardContainer from "./Components/Dashboard/DashboardContainer/DashboardContainer";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/signup" exact element={<SignUp />}></Route>
          <Route path="/signin" exact element={<SignIn />}></Route>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="signup"  element={<SignUp />}/>
            <Route path="signin"  element={<SignIn />}/>
            <Route path="dashboard"  element={<DashboardContainer />}/>
            <Route path="signin"  element={<SignIn />}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
