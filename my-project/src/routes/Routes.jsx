import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Header from "../components/Header";

const routes= createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Header />
            }
        ]
    }
])

export default routes;