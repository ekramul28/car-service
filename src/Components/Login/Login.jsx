import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
    return (
        <div>
            <Header></Header>

            <div className=" lg:flex justify-center items-center my-10">
                <div className="flex justify-center">
                    <img className="w-[460px] h-[500px]" src="assets/images/login/login.svg" alt="" />
                </div>
                <div className=" bg-[#FFF] border-2 p-10 grid justify-center rounded-lg">
                    <h1 className="text-xl font-semibold text-center">Login</h1>

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
                                <input type="text" name="email" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your Email" />
                            </label>
                        </div>
                        <div className="p-2" >
                            <label>
                                <span>Password</span><br></br>
                            </label>
                            <label>
                                <input type="text" name="password" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your password" />
                            </label>
                        </div>
                        <div className="my-2 flex justify-center rounded-md">
                            <label>
                                <input type="submit" name="password" id="" value="login" className=" p-2 rounded-md w-[350px] md:w-[461px] h-[60px] bg-[#FF3811] text-white" placeholder="Your password" />
                            </label>

                        </div>
                        <div>
                            <h1 className="text-xl text-center">Go to <Link to="/register" className="text-[#FF3811]">singUp</Link> </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;