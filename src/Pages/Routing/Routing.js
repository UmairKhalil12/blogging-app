import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from '../Details/Details'
import HomePage from "../HomePage/HomePage";
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import AddEditBlog from '../AddEditBlog/AddEditBlog'
import About from '../About/About'
import NoPage from "../NoPage/NoPage";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/create/" element={<AddEditBlog />} />
                <Route path="/edit/:id" element={<AddEditBlog />} />
                <Route path="/about" element ={<About />} />
                <Route path="*" element ={<NoPage />} />
            </Routes>
        </BrowserRouter>

    )
}
