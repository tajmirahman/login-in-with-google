import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";

import Login from "../components/Login";
import Home from "../components/Home";

const routes= createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            }
        ]
    }
])

export default routes;