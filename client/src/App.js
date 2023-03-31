import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./Components/Dashboard/Dashboard";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";

import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Results from "./Components/Dashboard/Results/Results";

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
            <Route path="signin"  element={<SignIn />}/>

            <Route path="dashboard/">
            <Route index  element={<Dashboard />}/>
            <Route path="results"  element={<Results />}/>

            </Route>

            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
