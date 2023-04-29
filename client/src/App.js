//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//Import all components
import Username from "./Components/Registration/Username/Username";
import Register from "./Components/Registration/Register/Register";
import Password from "./Components/Registration/Password/Password";
import Profile from "./Components/Registration/Profile/Profile";
import Recovery from "./Components/Registration/Recovery/Recovery";
import Reset from "./Components/Registration/Reset/Reset";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import { AuthorizeLogin, AuthorizeUser, ProtectRoutes } from "./middleware/Auth";
import Dashboard from "./Components/dashboard/Dashboard";
import Main from "./Components/dashboard/subPages/Main";
import MyGPA from "./Components/dashboard/subPages/MyGPA";
import Subjects from "./Components/dashboard/subPages/Subjects";

//Route routes
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<AuthorizeLogin><Username/></AuthorizeLogin>
//   },

//   {
//     path:'/register',
//     element:<Register></Register>
//   },
//   {
//     path:'/password',
//     element:<ProtectRoutes><Password/></ProtectRoutes>
//   },
//   {
//     path:'/dashboard',
//     element:<AuthorizeUser><Dashboard/></AuthorizeUser>
//   },
//   {
//     path:'/recovery',
//     element:<Recovery></Recovery>
//   },
//   {
//     path:'/reset',
//     element:<Reset></Reset>
//   },
//   {
//     path:'*',
//     element:<PageNotFound></PageNotFound>
//   },
// ])
function App() {
  return (
    <main className="">
      {/* <RouterProvider router={router}></RouterProvider> */}

      <Router>
        <Routes>
          <Route path="/" element={<AuthorizeLogin><Username/></AuthorizeLogin>}/>
          <Route path="/register" element={<Register></Register>}/>
          <Route path="/password" element={<ProtectRoutes><Password/></ProtectRoutes>}/>
          <Route path="/recovery" element={<Recovery></Recovery>}/>
          <Route path="/reset" element={<Reset></Reset>}/>

          <Route path="/dashboard/*" element={<AuthorizeUser><Dashboard/></AuthorizeUser>}>
            <Route index element={<AuthorizeUser><Main/></AuthorizeUser>} />
            <Route path="myGPA/" element={<MyGPA />} />
            <Route path="subjects/" element={<Subjects />} />

          </Route>


          <Route path="*" element={<PageNotFound></PageNotFound>}/>




        </Routes>
      </Router>
    </main>
  );
}

export default App;
