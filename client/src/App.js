import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Import all components
import Username from "./Components/Registration/Username/Username";
import Register from "./Components/Registration/Register/Register";
import Password from "./Components/Registration/Password/Password";
import Profile from "./Components/Registration/Profile/Profile";
import Recovery from "./Components/Registration/Recovery/Recovery";
import Reset from "./Components/Registration/Reset/Reset";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

//Route routes
const router = createBrowserRouter([
  {
    path:'/',
    element:<Username></Username>
  },

  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/password',
    element:<Password></Password>
  },
  {
    path:'/profile',
    element:<Profile></Profile>
  },
  {
    path:'/recovery',
    element:<Recovery></Recovery>
  },
  {
    path:'/reset',
    element:<Reset></Reset>
  },
  {
    path:'*',
    element:<PageNotFound></PageNotFound>
  },
])
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
