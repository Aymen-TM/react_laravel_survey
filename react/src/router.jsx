import {createBrowserRouter, Navigate} from "react-router-dom"
import DashBoard from "./views/DashBoard"
import Survey from "./views/Survey"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import GuestLayout from "./components/GuestLayout"
import DeafaultLayout from "./components/DeafaultLayout"
import SurveyView from "./views/SurveyView"

const router = createBrowserRouter([
    {
        path:"/",
        element:<DeafaultLayout />,
        children:[
            {
                path:"/",
                element:<Navigate to={"/dashboard"} />
            },
            {
                path:"/dashboard",
                element:<DashBoard />
            },
            {
                path:"/survey",
                element:<Survey />
            },
            {
                path:"/survey/create",
                element:<SurveyView />
            },
        ]
    },
    {
        path:'/',
        element:<GuestLayout />,
        children:[
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/signup",
                element:<SignUp />
            },
        ]
    }
])

export default router