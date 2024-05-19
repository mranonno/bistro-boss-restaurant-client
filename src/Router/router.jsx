import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
  

const router = createBrowserRouter([
    {
      path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/menu",
                element:<Menu/>
            }
        ]
    },
]);

export default router;