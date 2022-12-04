
import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Details/Details";
import Home from "../Components/Home/Home/Home";
import Main from "../Components/Layout/Main";

export const router=createBrowserRouter([
    {
        
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
            path:'/details',
            element:<Details></Details>
            }
        ]
    }
    
])