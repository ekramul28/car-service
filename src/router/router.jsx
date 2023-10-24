import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home/Home";
import Login from "../Components/Login/Login";
import SingUp from "../Components/SingUp/SingUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <SingUp></SingUp>
            }
        ]
    },
]);

export default router;