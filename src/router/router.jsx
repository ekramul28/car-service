import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home/Home";
import Login from "../Components/Login/Login";
import SingUp from "../Components/SingUp/SingUp";
import CardDetails from "../Components/cardDetails/cardDetails";
import Booking from "../Booking/Booking";
import PrivetPout from "../PrivetRout/PrivetPout";

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
            },
            {
                path: "/checkOut/:id",
                element: <PrivetPout><CardDetails></CardDetails></PrivetPout>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: "booking",
                element: <PrivetPout><Booking></Booking></PrivetPout>
            }
        ]
    },
]);

export default router;