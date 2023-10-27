import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SingUp = () => {
    const { createEmail } = useContext(AuthContext);

    const handelSingIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createEmail(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error =>
                console.error(error)
            )
    }

    return (
        <div>
            <Header></Header>

            <form onSubmit={handelSingIn}>
                <div className=" lg:flex justify-center items-center my-10">
                    <div className="flex justify-center">
                        <img className="w-[460px] h-[500px]" src="assets/images/login/login.svg" alt="" />
                    </div>
                    <div className=" bg-[#FFF] border-2 p-10 grid justify-center rounded-lg">
                        <h1 className="text-xl font-semibold text-center">Sign Up</h1>

                        <div >
                            <div className="p-2" >
                                <label>
                                    <span>Name</span><br></br>
                                </label>
                                <label>
                                    <input type="text" name="name" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your name" />
                                </label>
                            </div>
                            <div className="p-2" >
                                <label>
                                    <span>Email</span><br></br>
                                </label>
                                <label>
                                    <input type="email" name="email" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your Email" />
                                </label>
                            </div>
                            <div className="p-2" >
                                <label>
                                    <span>Password</span><br></br>
                                </label>
                                <label>
                                    <input type="password" name="password" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your password" />
                                </label>
                            </div>
                            <div className="my-2 flex justify-center rounded-md">
                                <label>
                                    <input type="submit" id="" value="Sign Up" className=" p-2 rounded-md w-[350px] md:w-[461px] h-[60px] bg-[#FF3811] text-white" placeholder="Your password" />
                                </label>
                            </div>
                            <div>
                                <h1 className="text-xl text-center">Go to <Link to="/login" className="text-[#FF3811]">Login Page</Link> </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SingUp;