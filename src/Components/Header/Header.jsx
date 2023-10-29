import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const link = <>
        <li>  <NavLink className="gap-2" to="/">Home</NavLink></li>
        <li> <NavLink to="/about">About</NavLink></li>
        <li> <NavLink to="/services">Services</NavLink> </li>
        <li><NavLink to="/blog">Blog</NavLink> </li>



        {user?.email ? <>
            <li><NavLink to="/booking">My Booking</NavLink></li>
            <li><button onClick={handelLogOut}>LogOut</button></li>

        </>
            : <li><NavLink to="/login">Login</NavLink></li>}
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>

                <Link to="/"><img className="h-12 md:h-16" src="assets/logo.svg" alt="" /></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <a className=" md:btn p-2 rounded-lg   bg-white border-2 text-[#FF3811] border-[#FF3811]">Appointment</a>
            </div>
        </div>
    );
};

export default Header;