import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path = "/" exact element = {<SignUp/>}></Route>
      <Route path = "/signup" exact element = {<SignUp/>}></Route>
      <Route path = "/signin" exact element = {<SignIn/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
